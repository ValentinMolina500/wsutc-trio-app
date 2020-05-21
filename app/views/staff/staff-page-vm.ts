import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button/button";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import * as email from "nativescript-email";
import Store from '../../store/store';//store adapter
import firebase from "~/utils/firebase";
import { Frame } from "tns-core-modules/ui/frame/frame";
import dialogs from "~/utils/dialogs";
import { ObservableProperty } from '~/observable-property-decorator';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

let viewModel;

export class StaffPage extends Observable {
    public staff;

    constructor() {
        super();

        this.staff = new ObservableArray<any>();
    }

    public updateStaff(staff) {
    	this.staff = staff;
    	this.set("staff", new ObservableArray(staff));
    }
}

let s = new StaffPage();

export default s;
// class StaffItem extends Observable {
//     private email: string;
//     private name: string;
//     private position: string;
//     private image: string;
//     private uid: string;
//     private disabled: boolean;

//     constructor(staff) {
//         super();
//         this.email = staff.email;
//         this.name = staff.name;
//         this.position = staff.position;
//         this.image = staff.image;
//         this.uid = staff.uid;
//         this.disabled = false;
//     }

//     public composeEmail(): void {
//         email.available()
//             .then((available: boolean) => {
//                 if (available) {
//                     email.compose({
//                         subject: "Testing",
//                         body: "Sent from TRIO App",
//                         to: [this.email]
//                     });
//                 }
//             });
//     }

//     public async sendMessage() {
//         let conversation;
//         let key: string;
//         if (!this.disabled) {
//             console.log("TIMEOUT STARTED");

//             this.disabled = true;

//              setTimeout(() => {
//                 console.log("TIMEOUT FINISHED")
//                 this.disabled = false;
//             }, 4000)

            

//             dialogs.showLoader();
           
//             viewModel.setIndex(2);

//             key = await firebase.getUserConversation(this.uid);
//             console.log("Key: " + key);
            
//             if (!key) {
//                 console.log("CREATING CONVERSATION...")
//                 key = await firebase.createConversation(this.uid);
//             }
//             console.log("FETCHING CONVERSATION...")
//             conversation = await firebase.getConversation(key);

//             Frame.topmost().navigate({
//                 moduleName: "~/views/messages/direct-message-page/direct-message-page",
//                 context: conversation
//             });


//         }



//     }
// }

// export default class StaffPage extends Observable {
//     public viewModel: any;
//     constructor() {
//         super();
//         viewModel = Store.getHomeViewModel();
//     }

//     public staff: Array<StaffItem> = [
//         new StaffItem({ email: "stassia.feltes@wsu.edu", name: "Stassia Feltes", position: "TRIO President", image: "~/imgs/stassia.jpg", uid: "667788" }),
//         new StaffItem({ email: "oliva.primera@wsu.edu", name: "Oliva Primera", position: "Supplemental Instructor", image: "~/imgs/oliva.jpg", uid: "112233" }),
//         new StaffItem({ email: "j.silva-gutierrez@wsu.edu", name: "Jennifer Silva-Gutierrez", position: "Program Coordinator", image: "~/imgs/jennifer.jpg", uid: "112253" }),
//         new StaffItem({ email: "valentin.molina@wsu.edu", name: "Jarod Cable", position: "Supplemental Instructor", image: "~/imgs/jarod.jpg", uid: "112633" }),
//     ]

//     public onStaffTap(args: ItemEventData) {
//         let button = <Button>args.object;
//         let page = button.page;
//         Navigator.navigateContext(Pages.STAFF_DETAILS, page, this.staff[args.index]);
//     }
// }