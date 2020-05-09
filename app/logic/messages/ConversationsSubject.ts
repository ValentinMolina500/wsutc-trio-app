import { Subject } from "../utils/Subject";
import messages, { Message } from "~/utils/messages";
import { Observer } from "../utils/Observer";
import utils from "./MessageUtils"
import firebase from "~/utils/firebase"

let i = 0;
class ConversationsSubject implements Subject {
	private observers: Array<Observer> = [];
	private conversationMessages: Map<string, any> = new Map();

	public register(o: Observer): void {
		this.observers.push(o);
	}

	public unregister(o: Observer): void {

	}


	public notifyObserver(): void {
		this.observers.forEach((observer: Observer, index: number) => {
      		observer.update(this.conversationMessages);
		});
	}

	public async setConversationListeners() {
		/* Get conversations for current users */
		let result = await firebase.getCurrentUserConversations(17413);
		Object.keys(result.value).map(key => {
			this.conversationMessages.set(key, { conversationKey: result.value[key], messages: [] });

			/* Add a listener for each conversation */
			messages.addMessagesListener((data) => {
				if (data.type == "ChildAdded") {
					let fbMessage = data.value as Message;
			
					let conversations = this.conversationMessages.get(key);
					conversations.messages.push(fbMessage);
					conversations.messages = conversations.messages.sort(utils.sortMessagesByTime)

					this.conversationMessages.set(key, conversations);
					this.notifyObserver();
				}
			}, result.value[key]);
		});
	}
}

let singleton = new ConversationsSubject();

export default singleton;