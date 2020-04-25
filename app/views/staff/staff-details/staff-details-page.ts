import { Page, Observable } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";

// import ViewModel from "./staff-details-vm";
import * as email from "nativescript-email";

let staff;
let page: Page;
let sv: ScrollView;
export function onNavigatingTo(args) {
    page = args.object;
    staff = page.navigationContext;
    page.bindingContext = fromObject(staff);

    // sv = <ScrollView>page.getViewById("scroll");

    // sv.on("scroll", (args: ScrollEventData) => {
    //     console.log("X: " + args.scrollX);
    //     console.log("Y:" + args.scrollY);
    // });
}

export function goBack() {
    Frame.goBack();
}

export function sendEmail() {

    email.available().then((avail: boolean) => {
        console.log("Email avaialble? " + avail)

        if (avail) {
            email.compose({
                subject: "Testing",
                body: "<br><br>Sent from TRIO App",
                to: [staff.email]
            }).then(() => {
                console.log("Email closed");
            });
        }
    });
}

