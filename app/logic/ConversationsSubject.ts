import Firebase from "~/utils/firebase";
import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Conversation } from "~/models/conversation";

export class ConversationsSubject extends Observable {
	private observers: Array<any> = [];
	public conversations: Map<any, any> = new Map();
	public wsuId = "";
	public isSet = false;
	public listeners = [];

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

	public setConversationsListener(wsuId, role) {
		if (this.isSet) return;
		this.isSet = true;

		let callback = (result) => {
			this.conversations.set(result.key, { wsuId: result.key, conversationKey: result.value, conversation: new Conversation() });
			this.notifyObservers();

			Firebase.addChildEventListener((message) => {
				if (message.type == "ChildAdded") {			
					this.conversations.get(result.key).conversation.updateMessages(message.value)
					this.notifyObservers();
				}	
			}, '/conversations/' + result.value + '/messages')
			.then((listenerWrapper) => {
				this.listeners.push(listenerWrapper);
			})
		}

		Firebase.getCurrentUserConversations(callback, wsuId, role)
			.then((listenersWrapper) => {
				this.listeners.push(listenersWrapper)
			})
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

	public updateCurrentUser(user) {
		this.wsuId = user.wsuId;
	}

	/* When user logs out, remove event listeners and clear conversations */
	public logout(): void {
		this.listeners.forEach((listenerWrapper) => {
			Firebase.removeEventListeners(listenerWrapper.listeners, listenerWrapper.path);
		})

		this.isSet = false;
		this.conversations = new Map();
		this.notifyObservers();
	}
}

let s = new ConversationsSubject();

export default s;