import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button/button";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";

export default class StaffPage extends Observable {
    constructor() {
        super();
    }

    public staff: Array<any> = [
        { name: "Stassia Feltes", position: "TRIO President", image: "~/imgs/stassia.jpg" },
        { name: "Oliva Primera", position: "Supplemental Instructor", image: "~/imgs/oliva.jpg" },
        { name: "Jennifer Silva-Guiterrez", position: "Program Coordinator", image: "~/imgs/jennifer.jpg" },
        { name: "Jarod Cable", position: "Supplemental Instructor", image: "~/imgs/jarod.jpg" },
    ]

    public onStaffTap(args: ItemEventData) {
        let button = <Button>args.object;
        let page = button.page;
        Navigator.navigateContext(Pages.STAFF_DETAILS, page, this.staff[args.index]);
    }
}