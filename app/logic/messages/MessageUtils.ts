import { Message } from "~/utils/messages";

export class MessageUtils {
	public sortMessagesByTime(a: Message, b: Message) {
		if (a.updateTs > b.updateTs) {
                return 1;
            } else if (a.updateTs < b.updateTs) {
                return -1;
            } else {
                return 0;
            }
	}
}

let singleton = new MessageUtils();

export default singleton;