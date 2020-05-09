import { Subject } from "../utils/Subject";
import messages, { Message } from "~/utils/messages";
import { Observer } from "../utils/Observer";
import utils from "./MessageUtils"


let i:number = 0;
export class MessagesSubject implements Subject
{
	private observers: Array<Observer> = [];
	private messages: Array<Message> = [];
	private isSet: boolean = false;

	public setMessages() {
		if (!this.isSet) {
			this.setMessagesListener();
			this.isSet = true;
		}
	}

	register(o: Observer): void {
		this.observers.push(o);
	}

	unregister(o: Observer): void {

	}

	notifyObserver(): void {
		this.observers.forEach((observer: Observer, index: number) => {
      		observer.update(this.messages);
		});
	}

	public setMessagesListener() {
		messages.addMessagesListener((data) => {
			if (data.type == "ChildAdded") {
				let fbMessage = data.value as Message;
				this.messages.push(fbMessage);
				this.messages = this.messages.sort(utils.sortMessagesByTime);

				this.notifyObserver();
			}
			
		}, "-M6qDcstoJIoLzEQbQBs");
	}
}

const subject = new MessagesSubject();

export default subject;