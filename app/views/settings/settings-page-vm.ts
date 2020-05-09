import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Auth from "~/utils/authentication";

export default class SettingsPage extends Observable {
    constructor() {
        super();
    }

    public logout(args: EventData) {
        let button = <Page>args.object;
        let page = button.page;
        
        Auth.logout();
        Navigator.navigate(Pages.LOGIN, page);
    }
}