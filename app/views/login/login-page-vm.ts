import { Observable, EventData } from "tns-core-modules/ui/page/page";
import { Button } from "tns-core-modules/ui/button";
import Navigator from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Authentication from "~/utils/authentication";

export default class LoginPage extends Observable {
    public email: string = "luis.delatorre@wsu.edu";
    public password: string = "Medalla6571";
    public toggle: boolean = true;

    constructor() {
        super();
        //this.email = "luis.delatorre@wsu.edu";
        //this.password = "Medalla6571";
    }

    public login(args: EventData) {
        let button = <Button>args.object;
        let page = button.page;
        //page.frame.navigate("~/views/home/home-page");
        Navigator.navigate(Pages.HOME, page)
        Authentication.login(this.email, this.password)
            .then((user) => {
                console.log(user.email);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    public change() {
        this.set("toggle", !this.toggle);
    }

    public register(): void {
        Navigator.navigateFrame(Pages.REGISTER);
    }
}