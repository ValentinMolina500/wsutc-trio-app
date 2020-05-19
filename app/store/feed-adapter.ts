import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Feed } from '../models/feed';
import Cache from "~/utils/image-cache";

export class FeedsAdapter {
    public feeds: ObservableArray<Feed>;
    private idMap: Map<number, number> = new Map();
    constructor() {
        this.feeds = new ObservableArray<Feed>();
    }

    public updateFeed(result: any) {
        let feedTemp = this.findFeed(result);
        console.log('ll------', result.key, feedTemp);
        if (!feedTemp) {
            this.pushFeed(result);
        } else {
            //@ts-ignore
            feedTemp.update(result.value);
        }
    };

    public findFeed(result: any) {
        let id = this.idMap.get(result.key);
        return (id == undefined) ? false : this.feeds.getItem(id);       
    };
    public async pushFeed(result: any) {
        let tempFeed = result.value;
        tempFeed.postId = result.key;
        tempFeed.image = await Cache.getImageByUrl(tempFeed.image);
        let id = this.feeds.push(new Feed(tempFeed));
        this.idMap.set(tempFeed.postId, id-1);
    };

    public getData = () => {
        return this.feeds;
    };
    public selectFeeds(args: ItemEventData) {
        //rewrite
        console.log('Second ListView item tap');
    }
}
export interface Feeds extends ObservableArray<Feed> {
}

