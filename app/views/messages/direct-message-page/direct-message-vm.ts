import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

class ViewModel extends Observable {
    public messages: ObservableArray<any> = new ObservableArray([
        {
            message: "Maure scelerisque interdum massa.",
            type: "recieved",
            time:'12:37 a. m.'
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum.",
            type: "sent",
            time: '12:37 a. m.'
        },
        {
            message: "Maure scelerisque interdum massa",
            type: "recieved",
            time: '12:37 a. m.'
        },
        {
            message: "Vel lobortis ipsum. Duis sed fermentum elit.",
            type: "sent",
            time: '12:37 a. m.'
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit.",
            type: "sent",
            time: '12:37 a. m.'
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam.",
            type: "recieved",
            time: '12:37 a. m.'
        },

    ])

    private currentMessage: string = "";
    private feed;//complete the type 
    constructor(page) {
        super();
        this.feed = page.getViewById("feed");
    }

    public sendMessage() {
        console.log("woo")
        console.log(this.currentMessage);
        this.messages.push({ message: this.currentMessage, type: "sent" });
        
        this.feed.scrollToIndex(this.feed.items.length - 1);
        /* Empty input box */
        this.set("currentMessage", "");
    }
}

export default ViewModel;