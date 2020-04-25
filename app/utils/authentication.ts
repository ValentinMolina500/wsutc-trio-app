import Firebase from "./firebase";

export class Authentication {
    public login(email: string, password: string) {
        return Firebase.doLogin(email, password);
    }

    public isAuthenticated(): Promise<boolean> {
        return new Promise(function(resolve, reject) {
            Firebase.isAuthenticated()
                .then((user) => {
                    console.log('log',true);
                    resolve(true);
                }).catch((error) => {
                    console.log('log', false);
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