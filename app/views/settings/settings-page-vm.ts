import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Auth from "~/utils/authentication";
import Store from '~/store/store';//store adapter

class SettingsPage extends Observable {
	private homeViewModel;
    public currentUser = {};

    constructor() {
        super();
		this.homeViewModel = Store.getHomeViewModel();
    }

    public logout(args: EventData) {
        let button = <Page>args.object;
        let page = button.page;
        Auth.logout();

        //setTimeout(()=>{
           // this.homeViewModel.setIndex(0); 
        //},50)
		Nav.navigateToLogin();
    }

    public updateCurrentUser(user) {
        this.set("name", user.name);
        this.set("email", user.email);
        this.set("wsuId", user.wsuId);
        this.set("role", user.role);
        this.set("image", user.image);
    }
}

let s = new SettingsPage();

export default s;