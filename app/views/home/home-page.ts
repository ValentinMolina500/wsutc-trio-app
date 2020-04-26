import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Auth from "~/utils/authentication";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
let viewModel: ViewModel;
export function onNavigatingTo(args: EventData): void {
	const page = <Page>args.object;
	viewModel = new ViewModel();
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

class ViewModel extends Observable {
	public listLoad: Boolean;
	constructor() {
		super();
		this.listLoad = false;
	}
	public load(val: Boolean) {
		this.set('listLoad', val);
	}
}