import firebase from "~/utils/firebase";

class Messages {
	public addMessagesListener(callback, conversationId) {
		firebase.addChildEventListener(callback, "/conversations/" + conversationId + "/messages");
	}
}

const messages = new Messages();

export default messages;