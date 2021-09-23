import { Feeds } from '../../store/feed-adapter';
import { Config } from '~/share/default';
import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Auth from "~/utils/authentication";
import Store from '~/store/store';//store adapter
import { BaseArray } from '~/models/base-array';
import Firebase from "~/utils/firebase";
import { FeedItem } from '~/models/feed';
import Cache from "~/utils/image-cache";
import { ObservableProperty } from '~/observable-property-decorator'; 
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { Frame } from "tns-core-modules/ui/frame";

export class FeedPage extends Observable {
	@ObservableProperty() loaded: boolean;
	public feeds = new BaseArray<any>(null);

	public defaultImage: string = Config.iconImage;
	constructor() {
		super();
		// this.feeds = Store.getFeeds();
	}

	public updatePosts(posts) {
		this.set("feeds", posts);
	}

    public navigateToCreatePost(args) {
        Frame.topmost().navigate("~/views/add-post/add-post");
    }
}
const s = new FeedPage();

export default s;