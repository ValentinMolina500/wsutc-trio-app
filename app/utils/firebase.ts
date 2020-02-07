import * as firebase from "nativescript-plugin-firebase";
import { LoginType, FirebasePasswordLoginOptions } from "nativescript-plugin-firebase";
import Navigator from "~/utils/navigator";
import { Pages } from "./pages";
import Auth from "./authentication";

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
                let auth = await Auth.isAuthenticated();
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

    public doLogout(): Promise<any> {
        return firebase.logout();
    }
}

let singleton = new Firebase();

export default singleton;