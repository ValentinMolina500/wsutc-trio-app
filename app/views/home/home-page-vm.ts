import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Auth from "~/utils/authentication";
export default class HomeViewModel extends Observable {
	public listLoad: Promise<boolean>|boolean=false;
	public currentIndex: number;
	constructor(page: Page) {
		super();
		this.currentIndex = 0;
		this.listLoad=Auth.validateAuthentication(page);
	}

	public setIndex(index: number) {
		this.set('currentIndex', index);
	}
}