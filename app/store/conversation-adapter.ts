import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Conversation } from '../models/conversation';
import { BaseArray } from '../models/base-array';
import Store from "./store";

export class ConversationAdapter {
    // public data: BaseArray<Conversation>;
    // constructor() {
    //     this.data = new BaseArray<Conversation>();
    // }
    // public updateConversation = (item) => {
    //     let conversation = new Conversation(item);
    //     let conversationTemp: Conversation | number = this.data.findItem(conversation, conversation.index);
    //     if (typeof (conversationTemp) === "number") {
    //         this.data.push(conversation);
    //     } else {
    //         conversationTemp.update(conversation);
    //     }
    //     this.data.sort(Order);
    // };
    // public getData = () => {
    //     return this.data;
    // };

    public conversationsMap: Map<any, any>;
    public conversationsArray: BaseArray<any>;

    constructor() {
        this.conversationsMap = new Map();
        this.conversationsArray = new BaseArray();
    }

    public updateConversation(item) {
        this.conversationsMap.set(item.key, { userKey: item.key, conversation: new Conversation(item), } )
        this.conversationsArray.push(this.conversationsMap.get(item.key));
    }

    public updateMessages(key, item) {
        let conversation = this.conversationsMap.get(key).conversation;

        conversation.updateMessages(item);
    }

    public getData() {
        // { userKey: 17412, conversation: Conversation }
        return this.conversationsArray.map(value => {
            return {
                name: (() => { for (let i = 0; i < Store.getStaff().length; i++) { if (Store.getStaff().getItem(i).wsuId == value.userKey) return Store.getStaff().getItem(i).name } })(),
                recentMessage: value.conversation.messages.length != 0 ? value.conversation.messages.getItem(value.conversation.messages.length - 1).message : "Tap to send message",
                // date: value.conversation.messages.getItem(value.conversation.messages.length - 1).updateTs,
                key: value.userKey
            }
        });

    }

    public getMessages(id) {
        return this.conversationsMap.get(id).conversation.messages;
    }
}


// [13, 15, 17]







