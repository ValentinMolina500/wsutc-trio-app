import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Conversation, Order } from '../models/conversation';
import { BaseArray } from '../models/base-array';

export class ConversationAdapter {
    public data: BaseArray<Conversation>;
    constructor() {
        this.data = new BaseArray<Conversation>();
    }
    public updateConversation = (item) => {
        let conversation = new Conversation(item);
        let conversationTemp: Conversation | number = this.data.findItem(conversation, conversation.index);
        if (typeof (conversationTemp) === "number") {
            this.data.push(conversation);
        } else {
            conversationTemp.update(conversation);
        }
        this.data.sort(Order);
    };
    public getData = () => {
        return this.data;
    };
}





