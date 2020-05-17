import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Auth from "~/utils/authentication";
import Store from '~/store/store';//store adapter

export default class SettingsPage extends Observable {
	private homeViewModel;
    constructor() {
        super();
		this.homeViewModel = Store.getHomeViewModel();
    }

    public logout(args: EventData) {
        let button = <Page>args.object;
        let page = button.page;
        Auth.logout();
        //setTimeout(()=>{
           this.homeViewModel.setIndex(0); 
        //},50)
		Nav.navigateToLogin();
		
        
    }
}