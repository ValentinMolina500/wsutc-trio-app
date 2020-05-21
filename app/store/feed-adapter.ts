import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Feed, Order, newImageCacheFeedFactory } from '../models/feed';
import Cache from "~/utils/image-cache";
import { BaseArray } from '../models/base-array';

export class FeedsAdapter extends Observable {
    public feeds: BaseArray<Feed>;
    constructor() {
        super();
        this.feeds = new BaseArray<Feed>();
    }

    public updateFeed = async (result: any) => {
        let feed: Feed = await newImageCacheFeedFactory(result)
        let tempFeed = this.feeds.findItem(feed, feed.index);
        if (typeof (tempFeed) === "number") {
            this.feeds.push(feed);
        } else {
            tempFeed.update(feed);
        }
        this.feeds.sort(Order);
    };
 
    public getData = () => {
        return this.feeds
    };
}
export interface Feeds extends ObservableArray<Feed> {
}

