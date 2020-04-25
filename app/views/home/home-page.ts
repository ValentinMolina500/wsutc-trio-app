import { EventData, Page } from "tns-core-modules/ui/page/page";
import Auth from "~/utils/authentication";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";

export function  onLoaded(args: EventData) {
    let page = <Page>args.object;
     checkAuthentication(page);
}

async function checkAuthentication(page: Page) {
    let auth = await Auth.isAuthenticated();
    if (!auth) {
        Nav.navigate(Pages.LOGIN, page);
    }
}