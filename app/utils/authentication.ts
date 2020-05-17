import Firebase from "./firebase";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import { Page } from "tns-core-modules/ui/page/page";
export class Authentication {
    public login(email: string, password: string) {
        return Firebase.doLogin(email, password);
    }

    public async validateAuthentication(page: Page) {
        let auth = await this.isAuthenticated();
        if (!auth) {
           // Nav.navigate(Pages.LOGIN, page);
        }
        return auth;
    }

    public isAuthenticated(): Promise<boolean> {
        return new Promise(function(resolve, reject) {
            Firebase.isAuthenticated()
                .then((user) => {
                    console.log('log', true);
                    resolve(true);
                }).catch((error) => {
                    console.log('log1', false);
                    resolve(false);
                });
        });
    }

    public logout() {
        Firebase.doLogout().then(() => console.log("User logged out"));
    }
}

let singleton = new Authentication();

export default singleton;