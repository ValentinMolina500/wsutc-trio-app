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

			temp.push({ 
				...this.findStaff(value.wsuId), 
				wsuId: value.wsuId, 
				recentMessage, 
				date,
				displayDate: this.formatTimestamp(date),
				conversation: value.conversation, 
				conversationKey: value.conversationKey 
			});
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

	private formatTimestamp(date) {
		let dateObject = new Date(date);
		let currentDate = new Date();

		let diff = currentDate.getTime() - dateObject.getTime();

		// 24 hrs in milliseconds
		if (diff < 86400000) {
			return this.formatTime(dateObject);
		}

		return this.formatDate(dateObject);
	}

	private formatDate(date: Date) {
		return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
	} 

	private formatTime(date: Date) {
		let string = "";
		let hours = date.getHours(); 
		let minutes = date.getMinutes();
		let minutesString = "";
		let period = "AM";

		if (hours > 12) {
			hours -= 12;
			period = "PM";
		}

		if (minutes < 10) {
			minutesString += "0";
		}

		return `${hours}:${minutesString + minutes} ${period}`;
	}
}

let s = new MessagesPage();

export default s;