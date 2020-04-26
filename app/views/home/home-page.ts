import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Auth from "~/utils/authentication";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Store, { ViewModel } from '../../store/store';//store adapter
let viewModel: ViewModel;
export function onNavigatingTo(args: EventData): void {
	const page = <Page>args.object;
	viewModel = Store.getHomeViewModel();
	page.bindingContext = viewModel;
	checkAuthentication(page);
}

export function  onLoaded(args: EventData) {

}

async function checkAuthentication(page: Page) {
    let auth = await Auth.isAuthenticated();
	viewModel.load(auth);
    if (!auth) {
        Nav.navigate(Pages.LOGIN, page);
    }
}

