import { Feeds } from '../../store/feed-adapter';
import { Config } from '~/share/default';
import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Auth from "~/utils/authentication";
import Store from '~/store/store';//store adapter
export default class FeedPage extends Observable {
    public feeds: Feeds;
    public defaultImage: string = Config.iconImage;
    //private page: Page;
       
    constructor() {
        super();
        //this.page = page;
        this.feeds = Store.getFeeds();
    }
}