import firebase from "~/utils/firebase";

class UserSubject {
	public currentUser: any = {};
	public observers = [];

	public getCurrentUser(uid: string) {
		return firebase.getCurrentUser(uid)
			.then((user) => {
				let result = user.value;

				return firebase.getUser(result.role, result.wsuId);
			})
	}

	public register(observer) {
		this.observers.push(observer);
	}

	public notifyObservers() {
		this.observers.forEach(o => {
			o.updateCurrentUser(this.currentUser);
		})
	}

	public setCurrentUser(user) {
		this.currentUser = user;
		this.notifyObservers();
	}

	public getRole() {
		return this.currentUser.role;
	}
}

let s = new UserSubject();

export default s;