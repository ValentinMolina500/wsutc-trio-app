import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import { Feed } from '../models/feed';
import { FeedsAdapter } from '../store/feed-adapter';
import { ConversationAdapter } from '../store/conversation-adapter';
import { MessagesAdapter } from './messages-adapter';
import Firebase from "../utils/firebase";
import { Conversation } from '../models/conversation';
import { StaffAdapter } from "./staff-adapter";
import HomeViewModel from '~/views/home/home-page-vm';
//https://github.com/jcmsalves/firebase-playground/tree/master/app/src/main/java/com/jcmsalves/firebaseplayground/realtimedatabase

export class myStore {
    public feedsAdapter: FeedsAdapter;
    public conversationsAdapter: ConversationAdapter;
    public messagesAdapter: MessagesAdapter;
    public staffAdapter: StaffAdapter
    public homeViewModel: HomeViewModel;

    constructor() {
        // this.conversationsAdapter = new ConversationAdapter();
        this.feedsAdapter = new FeedsAdapter();
        this.messagesAdapter = new MessagesAdapter();
        // this.staffAdapter = new StaffAdapter();
    }

    public getFeeds() {
        let callback = (result) => {
            this.feedsAdapter.updateFeed(result);
        }
        Firebase.feedListener(callback);
        return this.feedsAdapter.getData();
    };

<<<<<<< HEAD
    public setStaffListener() {
        Firebase.staffListener((result) => {
            this.staffAdapter.updateStaff(result);
        })
    }

    public getStaff() {
        return this.staffAdapter.getData();
    }

    public async setConversations() {
        let callback = (result) => {
            this.conversationsAdapter.updateConversation(result);
=======
    // public async setConversations() {
    //     let callback = (result) => {
    //         this.conversationsAdapter.updateConversation(result);
>>>>>>> fix-conversations

    //         Firebase.addChildEventListener((message) => {
    //             this.conversationsAdapter.updateMessages(result.key, message.value)
    //         }, '/conversations/' + result.value + '/messages')
    //     }

    //     Firebase.getCurrentUserConversations(callback, "17413");
    // }

    // public getConversations() {
    //     return this.conversationsAdapter.getData();
    // };


<<<<<<< HEAD
    public getMessages(id) {
        // let callback = (result) => {
        //     if (result.type == "ChildAdded") {
        //         console.log(result.value)
        //         this.messagesAdapter.updateMessages(result);
        //     }

        // }
        // console.log("*****CALLLED")
        // Firebase.messagesListener(callback);
        // return this.messagesAdapter.getData();
=======
    // public getMessages(id) {
>>>>>>> fix-conversations

    //     return this.conversationsAdapter.getMessages(id);
    // }


<<<<<<< HEAD
 

  
=======
    // public async setStaff() {
    //     // let result = await Firebase.getStaff();
    //     Firebase.staffListener((result) => {
    //         this.staffAdapter.updateStaff(result);

    //     })
    // }

    // public getStaff() {
    //     return this.staffAdapter.getData();
    // }
>>>>>>> fix-conversations
    public setHomeViewModel(HomeViewModel: HomeViewModel) {
        return this.homeViewModel = HomeViewModel;
    };

    public getHomeViewModel() {
        return this.homeViewModel;
    }

    // public doesConversationExist(wsuId): boolean {
    //     return this.conversationsAdapter.doesConversationExist(wsuId)
    // }

}
let Store = new myStore();
export default Store;

