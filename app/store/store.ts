import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { NewsItem } from '../models/content';
import { FeedsAdapter } from '../store/feed-adapter';
import Firebase from "../utils/firebase";
//https://github.com/jcmsalves/firebase-playground/tree/master/app/src/main/java/com/jcmsalves/firebaseplayground/realtimedatabase
export class myStore {
    public feedsContext: FeedsAdapter; 
    public idMap: Array<number>=[]; 
    constructor() {
        this.feedsContext = new FeedsAdapter();
    }
    public FeedsViewModel() {
        let callback = (result) => {
            this.feedsContext.setFeeds(result);
        }
        Firebase.feedListener(callback);
        return this.feedsContext;
    };
 }
let Store = new myStore();
export default Store;
