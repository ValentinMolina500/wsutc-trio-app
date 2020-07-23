import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Authentication from "~/utils/authentication";
import { Frame, Page, getFrameById } from "tns-core-modules/ui/frame";
import fireabse from "~/utils/firebase";
import UserSubject from "~/logic/UserSubject";
import * as dialogs from "tns-core-modules/ui/dialogs"; 
import ConversationSubject from "~/logic/ConversationsSubject";

export default class LoginPage extends Observable {
    public email: string = "fumiko.denham@wsu.edu";
    public password: string = "123456789";
    public toggle: boolean = true;
    public btnEnabled: boolean = true;
    constructor() {
        super();
        //this.email = "luis.delatorre@wsu.edu";
        //this.password = "Medalla6571";
    }

    public login(args: EventData) {
        let button = <Button>args.object;
        let page = button.page;  
        this.set("btnEnabled", false);
        Authentication.login(this.email.trim(), this.password.trim())
            .then(async () => {
                this.set("btnEnabled", true);
                let auth = Authentication.isAuthenticated();
                Navigator.navigateToFeed();
            })
            .catch(() => {
                dialogs.alert({
                    message: "Incorrect email/password!",
                    okButtonText: "OK",
                    title: "Invalid Credentials"
                })

                this.set("btnEnabled", true);
            })
    
           
    }

    public change() {
        this.set("toggle", !this.toggle);
    }

    public navigateToRegister() {
        Frame.topmost().navigate("~/views/register/register-page");
    }
}