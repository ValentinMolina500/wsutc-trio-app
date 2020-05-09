import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import firebase from "~/utils/firebase";
import MessagesSubject from "~/logic/messages/MessagesSubject"
import { Observer } from "~/logic/utils/Observer"
import messages, { Message } from "~/utils/messages";
import { Frame } from "tns-core-modules/ui/frame/frame";


export class RecentMessages extends Observable implements Observer {
	private staff: Map<string, any>;
	public recentConversations: ObservableArray<any> = new ObservableArray();
	private isInit: boolean = false;

	constructor() {
		super();
		this.staff = new Map();

		this.staff.set("667788", {
			name: "Stassia Feltes",
		})

		this.staff.set("112233", {
			name: "Oliva Primera"
		})
	}

	public init() {
		if (!this.isInit) {
			this.isInit = true;
		}
	}

    public update(messages: Map<any, any>) {
		let recentConversations = [];

		messages.forEach((value, key) => {
			if (value.messages.length != 0) {
				recentConversations.push(new Conversation({
				name: this.staff.get(key).name,
				recentMessage: value.messages[value.messages.length - 1].message,
				date: value.messages[value.messages.length - 1].updateTs, 
				staffKey: key,
				conversationKey: value.conversationKey
			}));

			}
			
		});

		this.set("recentConversations", new ObservableArray(recentConversations));
	}
}


class Conversation {
	public name;
	public recentMessage;
	public date;
	public key;
	public staffKey: string;
	public conversationKey: string;

	constructor(conversation) {
		this.name = conversation.name;
		this.recentMessage = conversation.recentMessage;
		this.date = conversation.date;
		this.staffKey = conversation.staffKey;
		this.conversationKey = conversation.conversationKey;
	}

	public tap() {
		Frame.topmost().navigate({
			moduleName: "~/views/messages/direct-message-page/direct-message-page",
			context: {
				staffKey: this.staffKey,
				conversationKey: this.conversationKey
			}
		})
	}
}

let messages2 = new RecentMessages();

export default messages2;