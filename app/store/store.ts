import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import { Feed } from '../models/feed';
import { FeedsAdapter } from '../store/feed-adapter';
import { ConversationAdapter } from '../store/conversation-adapter';
import Firebase from "../utils/firebase";
import { Conversation } from '../models/conversation';
import HomeViewModel from '~/views/home/home-page-vm';
//https://github.com/jcmsalves/firebase-playground/tree/master/app/src/main/java/com/jcmsalves/firebaseplayground/realtimedatabase

export class myStore {
    public feedsAdapter: FeedsAdapter;
    public conversationsAdapter: ConversationAdapter;
    public homeViewModel: HomeViewModel;

    constructor() {
        this.conversationsAdapter = new ConversationAdapter();
        this.feedsAdapter = new FeedsAdapter();
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

    public setHomeViewModel(HomeViewModel: HomeViewModel) {
        return this.homeViewModel = HomeViewModel;
    };

    public getHomeViewModel() {
        return this.homeViewModel;
    }

}
let Store = new myStore();
export default Store;

