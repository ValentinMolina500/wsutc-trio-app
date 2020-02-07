import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Authentication from "~/utils/authentication";

export default class LoginPage extends Observable {
    public email: string = "valentinmolina83@gmail.com";
    public password: string = "Mario509";
    public toggle: boolean = true;

    constructor() {
        super();
    }

    public login(args: EventData) {
        let button = <Button>args.object;
        let page = button.page;
        page.frame.navigate("~/views/home/home-page");
        // Authentication.login(this.email, this.password)
        //     .then((user) => {
        //         console.log(user.email);
        //         Navigator.navigate(Pages.HOME, page)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    public change() {
        this.set("toggle", !this.toggle);
    }
}