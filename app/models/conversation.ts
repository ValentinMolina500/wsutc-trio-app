import { Observable } from "tns-core-modules/ui/page/page";

export class Conversation extends Observable {
    public staffId: number;
    public img: string;
    public key: string;
    public name: string;
    public recentMessage: string;
    public date: string;
    public updateTs: number;
    public index: string = "staffId";

    constructor(data: Conversation) {
        super();
        this.update(data);
    }

    public update(data: Conversation) {
        for (let key in data) {
            this[key] = data[key];
        }
        //this.date = this.formatTime(data.date);
    };
    public formatTime(value: string) {
        //@ts-ignore
        // var formatter = new java.text.DecimalFormat("\#,\#\#0.\#\#");
        //if (!num) { return 0 }
        return value; //formatter.format(num);
    };
}
export function Order(a: Conversation, b: Conversation) {
    if (a.updateTs < b.updateTs) {
        return 1;
    } else if (a.updateTs > b.updateTs) {
        return -1;
    }
    return 0;
}
export function Find(conversation: Conversation) {
    return conversation.staffId == this; 
}