import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import firebase from "~/utils/firebase";
import messages, { Message } from "~/utils/messages";
import { Observer } from "~/logic/utils/Observer"

class ViewModel extends Observable implements Observer  {
    public messages;
    private messagesMap;
    private isInit = false;
    private currentMessage: string = "";
    private feed;//complete the type 
    private conversation;
    private currentStaffKey = "";
    private currentConversationKey = "";

    constructor() {
        super();
    }

    public init(page, conversation) {
        if (!this.isInit) {
            this.conversation = conversation.value;
            this.isInit = true;
        }

        this.feed = page.getViewById("feed");

        if (conversation.staffKey != this.currentStaffKey) {
            this.currentStaffKey = conversation.staffKey;
            this.currentConversationKey = conversation.conversationKey;

            this.set("messages", new ObservableArray(this.messagesMap.get(this.currentStaffKey).messages));
            this.feed.scrollToIndex(this.feed.items.length - 1);
        }
        
        console.log("wooo!: " + this.currentStaffKey)
    }

    public sendMessage() {
        console.log(this.currentMessage);        
        firebase.sendMessage(this.currentConversationKey, this.currentMessage, "17413");
        this.set("currentMessage", "");
    }

    public update(messages: any)
    {
        this.messagesMap = messages; 

        if (this.currentStaffKey != "") {
            this.set("messages", new ObservableArray(messages.get(this.currentStaffKey).messages));
        }

        if (this.feed != undefined) 
        {
            this.feed.scrollToIndex(this.feed.items.length - 1);
        }
    }
}

let singleton = new ViewModel();

export default singleton;