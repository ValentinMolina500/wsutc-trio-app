import { Observable, EventData } from "tns-core-modules/ui/page/page";
import Store from '../../store/store';
import { Frame } from "tns-core-modules/ui/frame/frame";
import { ItemEventData } from "tns-core-modules/ui/list-view/";
export default class MessagesPage extends Observable {
	public conversations;
	public staff;

	constructor() {
		super();
		this.staff = Store.getStaff();

		this.conversations = Store.getConversations();
		// this.conversations = Store.getConversations().map(v => {
		// 	return {
		// 		name: this.findStaff(v.userKey),
		// 		img: v.image
		// 	}
		// })
	}

	public onItemTap(args: ItemEventData) {
		console.log("*******************")
		console.log(this.conversations[args.index]);
		Frame.topmost().navigate({ moduleName: "~/views/messages/direct-message-page/direct-message-page", context: { key: this.conversations[args.index].key	 }});
	}
}