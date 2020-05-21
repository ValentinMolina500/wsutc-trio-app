import * as firebase from "nativescript-plugin-firebase";
import * as webApi from "nativescript-plugin-firebase/app";

import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { LoginType, FirebasePasswordLoginOptions } from "nativescript-plugin-firebase";
import Navigator from "~/utils/navigator";
import { Pages } from "./pages";
import Auth from "./authentication";
import { ContentType, ContentArea } from "~/utils/content";
import messagesSubject from "~/logic/messages/MessagesSubject";
import DMViewModel from "~/views/messages/direct-message-page/direct-message-vm";
import { Conversation} from '../models/conversation';
import Store from '~/store/store';//store adapter
import StaffSubject from "~/logic/StaffSubject";
import StaffPage from "~/views/staff/staff-page-vm";
import ConversationSubject from "~/logic/ConversationsSubject";
import MessagesPage from "~/views/messages/messages-vm";

export class Firebase {
    private isInit: boolean = false;

    public init(): any {
        return firebase.init({
            persist: true,
            onAuthStateChanged: (data: firebase.AuthStateData) => {
               // data.loggedIn ? console.log("Logged in as " + data.user.email) : Navigator.navigateFrame(Pages.LOGIN);
            }
        })
            .then(async () => {
                // messagesSubject.setMessages();
                // messagesSubject.register(DMV1iewModel);
                // Store.setStaffListener();
                Store.setConversations();

                StaffSubject.register(StaffPage);
                StaffSubject.register(MessagesPage);
                ConversationSubject.register(MessagesPage);
                StaffSubject.setStaffListener();
                ConversationSubject.setConversationsListener();
        
                // Store.setConversations();
            })
            .catch((err) => (console.log("Error initing firebase " + err)));
    }

    public doLogin(email: string, password: string): Promise<firebase.User> {
        let login: FirebasePasswordLoginOptions = {
            email: email,
            password: password
        }
        return firebase.login({
            type: LoginType.PASSWORD,
            passwordOptions: login
        });
    }

    public isAuthenticated(): Promise<firebase.User> {
        return firebase.getCurrentUser();
    }
    public feedListener(callback) {
        firebase.addChildEventListener(callback, "/posts")
        /*.then(
            listenerWrapper => {
                var path = listenerWrapper.path;
                var listeners = listenerWrapper.listeners; // an Array of listeners added
                // you can store the wrapper somewhere to later call 'removeEventListeners'
            }
        );*/
    }

    public staffListener(callback) {
        firebase.addChildEventListener(callback, "/staff");
    }



    public validateConversation(user, staff): Promise<any> {
        return firebase.getValue(`/students/${user.id}/conversation/${staff.id}`)
            .then(function(value) {

            })
            .catch(error => console.log("ErrorV: " + error));
        return firebase.getCurrentUser();
    }

    public conversationListener(callback: (Conversation) => void): any {
        callback({
            img: "https://firebasestorage.googleapis.com/v0/b/wsutc-trio-app.appspot.com/o/1034227-contact-us.png?alt=media",
            staffId: 17413,
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/23",
            updateTs: 3
        });
        callback({
            img: "https://firebasestorage.googleapis.com/v0/b/wsutc-trio-app.appspot.com/o/1034227-contact-us.png?alt=media",
            staffId: 17414,
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/22",
            updateTs: 2
        });
        callback({
            img: "https://firebasestorage.googleapis.com/v0/b/wsutc-trio-app.appspot.com/o/1034227-contact-us.png?alt=media",
            staffId: 17413,
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/21",
            updateTs: 1
        });
        callback({
            img: "https://firebasestorage.googleapis.com/v0/b/wsutc-trio-app.appspot.com/o/1034227-contact-us.png?alt=media",
            staffId: 17411,
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/20",
            updateTs: 0
        });
    }
    public doLogout(): Promise<any> {
        
        return firebase.logout();
    }

    public getUserConversation(uid: string): any {
        return firebase.getValue("/students/17413/conversations/" + uid)
            .then((res) => { return res.value });
    }

    public createConversation(uid: string): any {
        let conversation;
        conversation = {
            creatorId: "17413",
            recieverId: uid,
            messages: [{ message: "TRIO is ready to help you!", senderId: "0000" }]
        }

        return firebase.push('/conversations/',
            conversation
        ).then((fbConversation) => {
            conversation = { ...conversation, key: fbConversation.key };
            return firebase.setValue('/conversations/' + conversation.key, conversation)
                .then(() => {
                    return firebase.setValue('/students/17413/conversations/' + uid, conversation.key)
                        .then(() => {
                            return conversation.key
                        });
                })

        });
    }

    public getConversation(id: string): any {
        return firebase.getValue('/conversations/' + id);
    }

    public sendMessage(conversationId, message, senderId) {

 
       // firebase.update('/services/' + cData.service.info.fsid, );

       // return firebase.push('/staff/' + conversationId + '/messages/', { updateTs: firebase.ServerValue.TIMESTAMP, message, senderId })

        return firebase.push('/conversations/' + conversationId + '/messages/', { updateTs: firebase.ServerValue.TIMESTAMP, message, senderId })
    }

    public getMessages(conversationId: string) {
        // return firebase.query()
    }

    public addChildEventListener(callback, path) {
        firebase.addChildEventListener(callback, path);
    }

    public messagesListener(callback) {
        firebase.addChildEventListener(callback, "conversations/-M7ZvGOGRS6UJ5YqBdJI/messages").then(
            listenerWrapper => {
                var path = listenerWrapper.path;
                var listeners = listenerWrapper.listeners; // an Array of listeners added
                // you can store the wrapper somewhere to later call 'removeEventListeners'
            })    
    }

    public getStaff() {
        return firebase.getValue("/staff");
    }

    public getCurrentUserConversations(callback, id: string) {
        return firebase.addChildEventListener(callback, '/students/' + id + "/conversations")
    }


}

let singleton = new Firebase();

export default singleton;