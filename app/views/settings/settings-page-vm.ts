import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";

export default class SettingsPage extends Observable {
    constructor() {
        super();
    }

    public logout(args: EventData) {
        let button = <Page>args.object;
        let page = button.page;
        Navigator.navigate(Pages.LOGIN, page);
    }
}