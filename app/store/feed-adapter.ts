import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable} from 'tns-core-modules/data/observable';
//import { ObservableProperty } from '../observable-property-decorator';
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { NewsItem } from '../models/content';

export class FeedsAdapter extends Observable {
    public feeds: ObservableArray<NewsItem>;  
    private idMap: Map<number, number> = new Map();
    public listLoad: boolean = false;
    constructor() {
        super();
        this.feeds = new ObservableArray<NewsItem>();
    }
    public setFeeds = (result) => {
        let index = result.postId;
            if (!(this.idMap.get(index) >= 0)) {
                let feed = new NewsItem(result)
                let id=this.feeds.push(feed);
                this.idMap.set(index,id--); 
            } else {
               // let feedTemp = <NewsItem>this.feeds.getItem(this.idMap[index]);
               // feedTemp.update(result);
            }

    };
    public selectFeeds(args: ItemEventData) {
        //rewrite
        console.log('Second ListView item tap');
    }
 }

