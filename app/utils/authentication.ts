import Firebase from "./firebase";

export class Authentication {
    public login(email: string, password: string) {
        return Firebase.doLogin(email, password);
    }

    public isAuthenticated(): Promise<boolean> {
        return Firebase.isAuthenticated()
            .then((user) => {
                return user != null;
            });
    }

    public logout() {
        Firebase.doLogout().then(() => console.log("User logged out"));
    }
}

let singleton = new Authentication();

export default singleton;