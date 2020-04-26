import * as firebase from "nativescript-plugin-firebase";
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { LoginType, FirebasePasswordLoginOptions } from "nativescript-plugin-firebase";
import Navigator from "~/utils/navigator";
import { Pages } from "./pages";
import Auth from "./authentication";
import { NewsItem } from '../models/content';
import {  ContentType, ContentArea } from "~/utils/content";

export class Firebase {
    private isInit: boolean = false;

    public init(): any {
        return firebase.init({
            persist: true,
            onAuthStateChanged: (data: firebase.AuthStateData) => {
                data.loggedIn ? console.log("Logged in as " + data.user.email) : Navigator.navigateFrame(Pages.LOGIN);
            }
        })
            .then(async () => {
                //let auth = await Auth.isAuthenticated();
                // auth ? console.log("Authenticated!") : Navigator.navigateFrame(Pages.LOGIN);
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
    
    public feedListener(callback){
        callback({
            type: ContentType.NEWS,
            title: "Reminder: Schedule Your Semester Visit",
            description: "Remember as part as a TRIO student you are required to schedule a semester visit.",
            icon: "~/imgs/stassia.jpg",
            timestamp: "1 week ago",
            area: ContentArea.NEWS,
            staff: "Stassia Feltes",
            postId: "193804",
            smileCount: 12,
            surprisedCount: 9
        });
        callback({
            area: ContentArea.CARRER,
            description: "Come join our resume workshop with Alisa Thompson.",
            date: "4/15",
            icon: "~/imgs/oliva.jpg",
            image: "~/imgs/resume.jpg",
            location: "FLOYD 251",
            staff: "Oliva Primera",
            time: "2:15PM",
            timestamp: "1 hour ago",
            postId: "3434",
            type: ContentType.EVENT,
            title: "Resume Workshop with Alisa Thompson",
        });
        callback({
            area: "Financial",
            description: "There will be a Study Abroad Info session at 3PM today via Zoom meeting ID: 405-018-945 with the Pullman campus.\n\nIf you are interested join the meeting! The deadline to apply to study abroad in Rome is Feb 3rd at noon.",
            icon: "~/imgs/jennifer.jpg",
            image: "~/imgs/rome.png",
            postId: "2323223",
            staff: "Jennifer Silva",
            timestamp: "4 days ago",
            type: ContentType.EVENT,
            title: "Study in ROME info session",
            date: "1/22",
            location: "ZOOM",
            time: "3PM"
        });                
    }

    public doLogout(): Promise<any> {
        return firebase.logout();
    }

    public getConversation(uid: string) {
        return firebase.getValue("/students/17413/conversations/" + uid)
            .then((res) => {
                console.log(res);
            });
    }
}

let singleton = new Firebase();

export default singleton;