import { Observable } from "tns-core-modules/ui/page/page";
import Cache from "~/utils/image-cache";
import { ObservableProperty } from '~/observable-property-decorator';

export class Staff extends Observable {
	@ObservableProperty() name: string;
	@ObservableProperty() position: string;
	@ObservableProperty() image: string;
	public index: string = "wsuId";
	public wsuId: string;

	constructor(data: Staff) {
		super();
		this.update(data);
		this.wsuId = data.wsuId;
	}

	public update(data: Staff) {
		this.position = data.position;
		this.name = data.name;
		this.image = data.image;
	};
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




