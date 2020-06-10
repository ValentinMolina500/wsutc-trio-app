import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import firebase from "~/utils/firebase";
import messages, { Message } from "~/utils/messages";
import { Observer } from "~/logic/utils/Observer";
import { Frame } from "tns-core-modules/ui/frame/frame";
import Store from '~/store/store';//store adapter
import { ObservableProperty } from '~/observable-property-decorator';
import { Staff } from "~/models/staff";
declare let android;
export class DirectMessagePage extends Observable   {
    @ObservableProperty() messages: any;
    public name;
    public image;
    public currentMessage = "";
    public conversationKey; 
    public wsuId;
    public staff;
    public conversations;   
    public recieverId;
    public recieverRole;
    public ListViewHeight = "100%";
    public keyboardShown = true;
    public page: any = {};

    constructor() {
        super();

        this.messages = new ObservableArray();
        this.name = "";
        this.image = "";
        this.conversationKey = "";
    }

    public setPage({ wsuId }, page) {
        console.log("THIS IS WSUID: " + wsuId);
        this.set("page", page);
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
                this.set("recieverId", staff.wsuId)
                this.set("recieverRole", staff.role);
            }
        })

       
    }

    public scrollFeed() {
        let feed = this.page.getViewById("feed");
        feed.scrollToIndex(feed.items.length - 1);
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
        firebase.sendMessage(this.conversationKey, this.currentMessage, this.wsuId, this.recieverId, this.recieverRole);
        this.set("currentMessage", "");
    }

    public updateStaff(staff) {
        this.staff = staff;
    }

    public updateConversations(conversations) {
        this.conversations = conversations;     
    }

    // public messageSelector(item) {
        
    //     console.log("SENDERID:" + item.senderId);
    //     console.log(this.wsuId);
    //     return item.senderId == this.wsuId ? "sent" : "recieved";
    // }

    public updateCurrentUser(user) {
        // this.wsuId = user.wsuId;
       this.wsuId = user.wsuId;  

       this.set("messageSelector", (item) => { return item.senderId == this.wsuId ? "sent" : "recieved"; })
    }

    public trackAndroidKeyboard() {
        // let _this = this;
        // let cv = Frame.topmost().currentPage.android;
        // cv.getViewTreeObserver().addOnGlobalLayoutListener(new android.view.ViewTreeObserver.OnGlobalLayoutListener({
        //     onGlobalLayout: function() {
        //         // Grab the Current Screen Height
        //         var rect = new android.graphics.Rect();
        //         cv.getWindowVisibleDisplayFrame(rect);
        //         var screenHeight = cv.getRootView().getHeight();
        //         var missingSize = screenHeight - rect.bottom;
        //         if (missingSize > (screenHeight * 0.15)) {
                  

        //             if (_this.keyboardShown) {
        //                 console.log("ListViewHeight");
        //                 _this.set('ListViewHeight', (100*(1 - missingSize / screenHeight+.04)).toFixed(0)+'%');
                         
        //                 _this.keyboardShown = false;
        //             }
                   

        //         } else {
        //             _this.set('ListViewHeight', '100%');
        //             _this.keyboardShown = true;
        //         }
        //     }
        // }));
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