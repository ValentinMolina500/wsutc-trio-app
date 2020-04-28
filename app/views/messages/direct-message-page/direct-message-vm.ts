import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import firebase from "~/utils/firebase";
import messages from "~/utils/messages";

class ViewModel extends Observable {
    public messages: ObservableArray<any>;

    private currentMessage: string = "";
    private feed;//complete the type 
    private conversation;
    constructor(page, conversation) {
        super();
        this.feed = page.getViewById("feed");
        this.conversation = conversation.value;

        if (!this.conversation.messages) {
            this.messages = new ObservableArray([]);
        } else {
            let messages = Object.keys(this.conversation.messages).map(key => this.conversation.messages[key]);

            this.messages = new ObservableArray(messages.sort((a, b) => {
                if (a.updateTs > b.updateTs) {
                    return 1;
                } else if (a.updateTs < b.updateTs) {
                    return -1;
                } else {
                    return 0;
                }
            }));
        }

        messages.addMessagesListener((result) => {
            if (result.type == "ChildAdded") {
                this.messages.push(result.value);
                console.log("adding!")
                this.feed.scrollToIndex(this.feed.items.length - 1);
            }

        }, this.conversation.key)
    }

    public sendMessage() {
        console.log(this.currentMessage);        
        firebase.sendMessage(this.conversation.key, this.currentMessage, "17413");
        this.set("currentMessage", "");
    }
}

export default ViewModel;