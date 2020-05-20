import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Feed, Order } from '../models/feed';
import Cache from "~/utils/image-cache";
import { BaseArray } from '../models/base-array';

export class FeedsAdapter extends Observable {
    public feeds: BaseArray<Feed>;
    private idMap: Map<number, number> = new Map();
    constructor() {
        super();
        this.feeds = new BaseArray<Feed>();
    }

    public updateFeed = async (result: any) => {
        let feed: Feed = await this.newFeed(result)
        let tempFeed = this.feeds.findItem(feed, feed.index);
        if (typeof (tempFeed) === "number") {
            this.feeds.push(feed);
        } else {
            tempFeed.update(feed);
        }
        this.feeds.sort(Order);
    };

    public async newFeed(result: any) {
        let tempFeed = result.value;
        tempFeed.postId = result.key;
        tempFeed.icon = await Cache.getImageByUrl(tempFeed.icon);
        tempFeed.image = await Cache.getImageByUrl(tempFeed.image);
        return new Feed(tempFeed);
    };

    public getData = () => {
        return this.feeds
    };
}
export interface Feeds extends ObservableArray<Feed> {
}

