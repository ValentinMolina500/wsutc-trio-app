import firebase from "~/utils/firebase";

class Messages {
	public addMessagesListener(callback, conversationId) {
		firebase.addChildEventListener(callback, "/conversations/" + conversationId + "/messages");
	}
}

export interface Message {
	message: string;
	senderId: string;
	updateTs: number;
}

const messages = new Messages();

export default messages;