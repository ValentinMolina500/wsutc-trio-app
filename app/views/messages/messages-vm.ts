import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { ItemEventData } from "tns-core-modules/ui/list-view/";
import { ObservableArray } from 'tns-core-modules/data/observable-array';

export class MessagesPage extends Observable {
	public conversations;
	public staff;

	constructor() {
		super();
		
		this.conversations = new ObservableArray<any>();
		this.staff = [];		
	}

	public updateConversations(conversations: Map<any, any>) {
		let temp = [];

		conversations.forEach(value => {
			const { recentMessage, date } = value.conversation;

			temp.push({ ...this.findStaff(value.wsuId), wsuId: value.wsuId, recentMessage, date, conversation: value.conversation, conversationKey: value.conversationKey });
		});

		this.set("conversations", new ObservableArray(temp.sort(this.sort)));
	}

	public updateStaff(staff) {
		this.set("staff", staff);
		

		let temp = []
		this.get("conversations").forEach(value => {
			const { recentMessage, date } = value.conversation;
			temp.push({ ...this.findStaff(value.wsuId), wsuId: value.wsuId, recentMessage, date, conversation: value.conversation, conversationKey: value.conversationKey })
		})

		this.set("conversations", new ObservableArray(temp.sort(this.sort)));
	}

	public findStaff(wsuId) {
		for (let i = 0; i < this.staff.length; i++) {
			if (this.staff[i].wsuId == wsuId) {
				return {
					name: this.staff[i].name,
					image: this.staff[i].image,
				};
			}
		}

		return {
			name: "Unkown"
		};
	}



	public onItemTap(args: ItemEventData) {
		console.log("*******************")
		console.log(this.conversations[args.index]);
		Frame.topmost().navigate({ moduleName: "~/views/messages/direct-message-page/direct-message-page", context: { wsuId: this.conversations.getItem(args.index).wsuId } });
	}

	private sort(a, b) {
		if (a.date > b.date) {
			return -1;
		} else {
			return 1;
		}
	}
}

let s = new MessagesPage();

export default s;