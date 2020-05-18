import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
import { Message } from '../models/message';

export class MessagesAdapter extends Observable {
	public messages: ObservableArray<Message>;

	constructor() {
		super();
		this.messages = new ObservableArray<Message>();
	}

	public updateMessages(result) {
		this.messages.push(result.value);
	}

	public getData() {
		return this.messages;
	}
}