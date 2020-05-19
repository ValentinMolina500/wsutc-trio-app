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
    constructor() {
        super();
        this.feeds = Store.getFeeds();
    }
}