import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import { NewsItem } from '../models/content';
import { FeedsAdapter } from '../store/feed-adapter';
import Firebase from "../utils/firebase";
//https://github.com/jcmsalves/firebase-playground/tree/master/app/src/main/java/com/jcmsalves/firebaseplayground/realtimedatabase
export class myStore {
    public feedsContext: FeedsAdapter; 
    public homeViewModel: ViewModel; 
    public idMap: Array<number>=[]; 
    constructor() {
        this.feedsContext = new FeedsAdapter();
        this.homeViewModel = new ViewModel();
    }
    public FeedsViewModel() {
        let callback = (result) => {
            this.feedsContext.setFeeds(result);
        }
        Firebase.feedListener(callback);
        return this.feedsContext;
    };
    public getHomeViewModel() {
        return this.homeViewModel;
    };
 }
let Store = new myStore();
export default Store;

export class ViewModel extends Observable {
    public listLoad: Boolean;
    public index: Boolean;
    constructor() {
        super();
        this.listLoad = false;
    }
    public load(val: Boolean) {
        this.set('listLoad', val);
    }
    public setIndex(index: number) {
        this.set('index', index);
    }
}