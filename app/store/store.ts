import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import { NewsItem } from '../models/content';
import { FeedsAdapter } from '../store/feed-adapter';
import { ConversationAdapter } from '../store/conversation-adapter';
import Firebase from "../utils/firebase";
import { Conversation} from '../models/conversation';
//https://github.com/jcmsalves/firebase-playground/tree/master/app/src/main/java/com/jcmsalves/firebaseplayground/realtimedatabase

class ViewModel extends Observable {
    public listLoad: Boolean;
    public currentIndex: number;
    constructor() {
        super();
        this.listLoad = false;
        this.currentIndex = 0;

    }
    public load(val: Boolean) {
        this.set('listLoad', val);
    }
    public setIndex(index: number) {
        this.set('currentIndex', index);
    }
}


export class myStore {
    public feedsAdapter: FeedsAdapter;
    public conversationsAdapter: ConversationAdapter;
    public homeViewModel: ViewModel;

    constructor() {
        this.conversationsAdapter = new ConversationAdapter();
        this.feedsAdapter = new FeedsAdapter();
        this.homeViewModel = new ViewModel();
    }
    
    public getFeeds() {
        let callback = (result) => {
            this.feedsAdapter.updateFeed(result);
        }
        Firebase.feedListener(callback);
        return this.feedsAdapter.getData();
    };

    public getConversations() {
        let callback = (result) => {
            this.conversationsAdapter.updateConversation(result);
        }
        Firebase.conversationListener(callback);
        return this.conversationsAdapter.getData();
    };
    
    public getHomeViewModel() {
        return this.homeViewModel;
    };
    
}
let Store = new myStore();
export default Store;

