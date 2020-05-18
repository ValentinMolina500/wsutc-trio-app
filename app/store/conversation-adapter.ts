import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Conversation } from '../models/conversation';
import { BaseArray } from '../models/base-array';

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
        console.log(item);
        this.conversationsMap.set(item.key, { userKey: item.key, conversation: new Conversation(item)} )
        this.conversationsArray.push(this.conversationsMap.get(item.key));
    }

    public updateMessages(key, item) {
        let conversation = this.conversationsMap.get(key).conversation;

        conversation.updateMessages(item);

        // this.conversationsMap.set(key, { messages });
    }

    public getData() {
        return this.conversationsArray;
    }
}





