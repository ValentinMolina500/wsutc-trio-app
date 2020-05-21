import { Observable } from "tns-core-modules/ui/page/page";
import Store from "~/store/store";
import { Pages } from "~/utils/pages";
import Navigator from "~/utils/navigator";
import ConversationSubject from "~/logic/ConversationsSubject";
import Firebase from "~/utils/firebase";

export class Staff extends Observable {
	public name: string;
	public position: string;
	public wsuId: string;
	public image: string;

	constructor(object) {
		super();

		for (const key in object) {
			this[key] = object[key];
		}
	}

	public sendMessage(): void {
		console.log("wsuId: " + this.wsuId);
		if (!ConversationSubject.doesConversationExist(this.wsuId)) {
			console.log("Creating conversation...");
			Firebase.createConversation(this.wsuId);
			

		} else {
			Navigator.navigateFrame(Pages.DIRECT_MESSAGES);
		}
	}
}	