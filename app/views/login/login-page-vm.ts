import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";

export default class LoginPage extends Observable {
    constructor() {
        super();
    }

    public onButtonTap(args: EventData) {
        let button = <Button>args.object;
        let page = button.page;
        Navigator.navigate(Pages.HOME, page);
    }
}