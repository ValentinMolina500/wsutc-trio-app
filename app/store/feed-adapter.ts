import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { FeedItem,  newImageCacheFeedFactory } from '../models/feed';
import Cache from "~/utils/image-cache";
import { BaseArray } from '../models/base-array';

export class FeedsAdapter extends Observable {
    public feeds: BaseArray<any>;
    constructor() {
        super();
        this.feeds = new BaseArray<any>();
    }

    public updateFeed = async (result: any) => {


       let feed =await newImageCacheFeedFactory(result);

       this.feeds.push(feed);
        // let tempFeed = this.feeds.findItem(feed, feed.postId);
        // if (typeof (tempFeed) === "number") {
        //     this.feeds.push(feed);
        // } else {
        //     tempFeed.update(feed);
        // }
        
        // this.feeds.sort(Order);
    };
 
    public getData = () => {
        return this.feeds
    };
}
export interface Feeds extends ObservableArray<FeedItem> {
}

