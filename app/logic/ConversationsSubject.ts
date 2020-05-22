import Firebase from "~/utils/firebase";
import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Conversation } from "~/models/conversation";

export class ConversationsSubject extends Observable {
	private observers: Array<any> = [];
	public conversations: Map<any, any> = new Map();
	public number = 42;
	constructor() {
		super();
	}

	public register(o) {
		this.observers.push(o)
	}
	
	public notifyObservers() {
		this.observers.forEach(o => {
			o.updateConversations(this.conversations);
		})
	}

	public setConversationsListener() {
		let callback = (result) => {
			this.conversations.set(result.key, { wsuId: result.key, conversationKey: result.value, conversation: new Conversation() });
			this.notifyObservers();

			Firebase.addChildEventListener((message) => {
				if (message.type == "ChildAdded") {			
					this.conversations.get(result.key).conversation.updateMessages(message.value)
					this.notifyObservers();
				}
				
			}, '/conversations/' + result.value + '/messages');
		}

		Firebase.getCurrentUserConversations(callback, "17413");
	}

	public doesConversationExist(wsuId) {
		let found = false;

		this.conversations.forEach((value) => {
			if (value.wsuId == wsuId) {
				found = true;
				return;
			}
		})

		return found;
	}
}

let s = new ConversationsSubject();

export default s;