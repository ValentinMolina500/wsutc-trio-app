import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Auth from "~/utils/authentication";
import Nav from "~/utils/navigator";
import { ObservableProperty } from '~/observable-property-decorator';
export default class HomeViewModel extends Observable {
	@ObservableProperty() listLoad: Promise<boolean> | boolean = false;
	public currentIndex: number;
	constructor(page: Page) {
		super();
		this.currentIndex = 0;
		this.listLoad = true;
		this.validateAuthentication(page);		
	}

	public async validateAuthentication(page: Page) {
		let auth = await Auth.isAuthenticated();
		console.log('auth', auth);
		this.listLoad = auth;
		if (!auth) {
			Nav.navigateToLogin();	
		}
		return auth;
	}

	public setIndex(index: number) {
		this.set('currentIndex', index);
	}
}