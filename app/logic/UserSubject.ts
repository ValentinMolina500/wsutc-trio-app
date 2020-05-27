import firebase from "~/utils/firebase";

class UserSubject {
	public currentUser = {};
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
}

let s = new UserSubject();

export default s;