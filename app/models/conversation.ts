import { Observable } from "tns-core-modules/ui/page/page";
import { ObservableProperty } from '~/observable-property-decorator';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

export class Conversation extends Observable {
    // public staffId: number;
    // public img: string;
    // public key: string;
    // public name: string;
    // public recentMessage: string;
    // public date: string;
    // public updateTs: number;
    // public index: string = "staffId";
    @ObservableProperty() messages: ObservableArray<any>;
    public recentMessage: string;
    public date: string;

    constructor() {
        super();
        this.messages = new ObservableArray();
    }

    public update(data: Conversation) {
        for (let key in data) {
            this[key] = data[key];
        }
        // this.date = this.formatTime(data.date);
    };

    public updateMessages(message) {
        //console.log("**********")
       // console.log(message);
        this.recentMessage = message.message;
        this.date = message.updateTs;
        this.messages.push(message);
    }
    public formatTime(value: string) {
        //@ts-ignore
        // var formatter = new java.text.DecimalFormat("\#,\#\#0.\#\#");
        //if (!num) { return 0 }
        return value; //formatter.format(num);
    };

    public getRecentMessage() {
        let lastMessage = this.messages.getItem(this.messages.length - 1);

        let message = lastMessage ? lastMessage.message : "Loading...";
        // let date = lastMessage ? Number(lastMessage.updateTs) : "Loading..."; 
        let date = 12345;


        // date = this.formatDate(date);

        return {
            recentMessage: message,
            date
        }
    }

    public getMessages() {
        return this.messages;
    }
}

// Val 

// Hung




// export function Order(a: Conversation, b: Conversation) {
//     if (a.updateTs < b.updateTs) {
//         return 1;
//     } else if (a.updateTs > b.updateTs) {
//         return -1;
//     }
//     return 0;
// }
