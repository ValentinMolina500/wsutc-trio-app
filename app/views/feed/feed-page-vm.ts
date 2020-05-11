import { Observable, Page } from "tns-core-modules/ui/page/page";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ContentItem,ContentType, NewsItem, EventItem, ContentArea } from "~/utils/content";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { Menu } from "nativescript-menu";
import * as Calendar from "nativescript-calendar";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import Store from '../../store/store';//store adapter
import { Feeds } from '../../store/feed-adapter';
import { Config } from '~/share/default';


declare let android;

export default class FeedPage extends Observable {
    public feeds: Feeds;
    public defaultImage: string = Config.iconImage;
    //private page: Page;
       
    constructor(page: Page) {
        super();
        //this.page = page;
        this.feeds = Store.getFeeds();
    }
}