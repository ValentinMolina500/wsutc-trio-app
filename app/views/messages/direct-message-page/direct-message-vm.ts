import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

class ViewModel extends Observable {
    public messages: ObservableArray<any> = new ObservableArray([
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam.",
            type: "recieved",
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam.",
            type: "sent",
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam.",
            type: "recieved",
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam.",
            type: "sent",
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam.",
            type: "sent",
        },
        {
            message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam.",
            type: "recieved",
        },

    ])

    private currentMessage: string = "";

    constructor() {
        super();
    }

    public sendMessage() {
        console.log("woo")
        console.log(this.currentMessage);
        this.messages.push({ message: this.currentMessage, type: "sent" });

        /* Empty input box */
        this.set("currentMessage", "");
    }
}

export default ViewModel;