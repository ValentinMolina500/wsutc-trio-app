import { Observable, EventData } from "tns-core-modules/ui/page/page";
import Store from '../../store/store';

export default class MessagesPage extends Observable {
	public conversations;
	public staff;

	constructor() {
		super();
		this.staff = Store.getStaff();

		this.conversations = Store.getConversations().map(v => {
			return {
				name: this.findStaff(v.userKey),
				img: v.image
			}
		})
	}

	public findStaff(key) {
		let found = false;
		let name;
		this.staff.forEach(value => {
			console.log(key);
			console.log(value.wsuId)

			if (value.wsuId == key) {
				found = true;
				name = value.name

				return;
			}
		});


		return found ? name : "Unknown";
	}
}