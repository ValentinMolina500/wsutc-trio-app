import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import firebase from "~/utils/firebase";
import messages, { Message } from "~/utils/messages";
import { Observer } from "~/logic/utils/Observer";
import { Frame } from "tns-core-modules/ui/frame/frame";
import Store from '~/store/store';//store adapter
import { ObservableProperty } from '~/observable-property-decorator';
import { Staff } from "~/models/staff";

export class DirectMessagePage extends Observable   {
    @ObservableProperty() messages: any;
    public name;
    public image;
    public currentMessage = "";
    public conversationKey; 

    public staff;
    public conversations;   
    constructor() {
        super();

        this.messages = new ObservableArray();
        this.name = "";
        this.image = "";
        this.conversationKey = "";
    }

    public setPage({ wsuId }) {
        console.log("THIS IS WSUID: " + wsuId);
        this.conversations.forEach((value, key) => {
            if (key == wsuId) {
                this.set("messages", value.conversation.messages);
                this.conversationKey = value.conversationKey;
            }    
        });

        this.staff.forEach((staff: Staff) => {
            if (wsuId == staff.wsuId) {
                this.set("name", staff.name);
                this.set("image", staff.image);
            }
        })
    }

    // public messages: ObservableArray<any> = new ObservableArray();
    // private isInit = false;
    // private currentMessage: string = "";
    // private feed;//complete the type 
    // private conversation;
    // constructor() {
    //     super();
    // }

    // public init(page, conversation) {
    //     if (!this.isInit) {
    //         this.feed = page.getViewById("feed");
    //         this.conversation = conversation.value;
    //         this.isInit = true;
    //     }
    // }

    public sendMessage() {
        firebase.sendMessage(this.conversationKey, this.currentMessage, "17413");
        this.set("currentMessage", "");
    }

    public updateStaff(staff) {
        this.staff = staff;
    }

    public updateConversations(conversations) {
        console.log("I'm GETTING CALLED");
        this.conversations = conversations;

           
    }
}

let s = new DirectMessagePage();

export default s;

/*      

// if (!this.conversation.messages) {
        //     this.messages = new ObservableArray([]);
        // } else {
        //     let messages = Object.keys(this.conversation.messages).map(key => this.conversation.messages[key]);

        //     this.messages = new ObservableArray(messages.sort((a, b) => {
        //         if (a.updateTs > b.updateTs) {
        //             return 1;
        //         } else if (a.updateTs < b.updateTs) {
        //             return -1;
        //         } else {
        //             return 0;
        //         }
        //     }));
        // }

        // messages.addMessagesListener((result) => {
        //     if (result.type == "ChildAdded") {
        //         this.messages.push(result.value);
        //         console.log("adding!")
        //         this.feed.scrollToIndex(this.feed.items.length - 1);
        //     }

        // }, this.conversation.key)
*/