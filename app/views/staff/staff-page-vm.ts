import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button/button";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import * as email from "nativescript-email";
import Store from '../../store/store';//store adapter
import firebase from "~/utils/firebase";
let viewModel;
class StaffItem extends Observable {
  private email: string;
  private name: string;
  private position: string;
  private image: string;
  private uid: string;

  constructor(staff) {
    super();

    this.email = staff.email;
    this.name = staff.name;
    this.position = staff.position;
    this.image = staff.image;
    this.uid = staff.uid;
  }

  public composeEmail(): void {
    console.log("test");
    email.available()
      .then((available: boolean) => {
        if (available) {
          email.compose({
            subject: "Testing",
            body: "Sent from TRIO App",
            to: [this.email]
          });
        }
      });
  }

  public async sendMessage() {

    console.log(this.uid);
    viewModel.setIndex(2);
    //@ts-ignore
    let key: string = await firebase.getConversation(this.uid);

    if (!key) {

    } else {

    }
  }
}
export default class StaffPage extends Observable {

  public viewModel: any;
  constructor() {
    super();
    viewModel = Store.getHomeViewModel();
  }


  public staff: Array<StaffItem> = [
    new StaffItem({ email: "stassia.feltes@wsu.edu", name: "Stassia Feltes", position: "TRIO President", image: "~/imgs/stassia.jpg", uid: "667788" }),
    new StaffItem({ email: "oliva.primera@wsu.edu", name: "Oliva Primera", position: "Supplemental Instructor", image: "~/imgs/oliva.jpg", uid: "112233" }),
    // new StaffItem({ email: "j.silva-gutierrez@wsu.edu", name: "Jennifer Silva-Gutierrez", position: "Program Coordinator", image: "~/imgs/jennifer.jpg" }),
    // new StaffItem({ email: "valentin.molina@wsu.edu", name: "Jarod Cable", position: "Supplemental Instructor", image: "~/imgs/jarod.jpg" }),
  ]

  public onStaffTap(args: ItemEventData) {
    let button = <Button>args.object;
    let page = button.page;
    Navigator.navigateContext(Pages.STAFF_DETAILS, page, this.staff[args.index]);
  }
}