import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Feed } from '../models/feed';

export class FeedsAdapter extends Observable {
    public feeds: ObservableArray<Feed>;
    private idMap: Map<number, number> = new Map();
    public listLoad: boolean = false;
    constructor() {
        super();
        this.feeds = new ObservableArray<Feed>();
    }
    public updateFeed = (result) => {
        result.value.postId = result.key;
        let index = result.key;      
        if (this.idMap.get(index) == undefined) {
            let feed = new Feed(result.value)
            let id = this.feeds.push(feed);
            this.idMap.set(index, id-1);
        } else {
            let feedTemp: Feed = <Feed>this.feeds.getItem(this.idMap.get(index));
            feedTemp.update(result.value);
        }
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

