import { Feeds } from '../../store/feed-adapter';
import { Config } from '~/share/default';
import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Auth from "~/utils/authentication";
import Store from '~/store/store';//store adapter
import { BaseArray } from '~/models/base-array';
import Firebase from "~/utils/firebase";
import { Feed, Order } from '~/models/feed';
import Cache from "~/utils/image-cache";
import { ObservableProperty } from '~/observable-property-decorator'; 
export default class FeedPage extends Observable {
	@ObservableProperty() loaded: boolean;
	public feeds: BaseArray<Feed>;

	public defaultImage: string = Config.iconImage;
	constructor() {
		super();
		this.feeds = Store.getFeeds();
	}
}