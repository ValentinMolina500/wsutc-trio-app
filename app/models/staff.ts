import { Observable } from "tns-core-modules/ui/page/page";
import Cache from "~/utils/image-cache";
import { ObservableProperty } from '~/observable-property-decorator';
import Store from "~/store/store";
import { Pages } from "~/utils/pages";
import Navigator from "~/utils/navigator";
import ConversationSubject from "~/logic/ConversationsSubject";
import Firebase from "~/utils/firebase";

export class Staff extends Observable {
	@ObservableProperty() name: string;
	@ObservableProperty() position: string;
	@ObservableProperty() image: string;
	public index: string = "wsuId";
	public wsuId: string;
	public showMoreInfo;

	constructor(data: Staff) {
		super();
		this.showMoreInfo = false;
		this.update(data);
		this.wsuId = data.wsuId;
	}

	public update(data: Staff) {
		this.position = data.position;
		this.name = data.name;
		this.image = data.image;
	};

	public sendMessage(): void {
		console.log("wsuId: " + this.wsuId);
		if (!ConversationSubject.doesConversationExist(this.wsuId)) {
			console.log("Creating conversation...");
			Firebase.createConversation(this.wsuId);
		} else {
			Navigator.navigateFrameWithContext(Pages.DIRECT_MESSAGES, { wsuId: this.wsuId });
		}
	}
}

export async function newImageCacheStaffFactory(result: any) {
	let tempStaff = result.value;
	tempStaff.image = await Cache.getImageByUrl(tempStaff.image);
	return new Staff(tempStaff);
};

export function Order(a: Staff, b: Staff) {
	if (a.name < b.name) {
		return 1;
	} else if (a.name > b.name) {
		return -1;
	}
	return 0;
}



	
