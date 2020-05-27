import { Observable } from "tns-core-modules/data/observable";
import firebase from "~/utils/firebase"
import * as dialogs from "tns-core-modules/ui/dialogs"; 

export class RegisterPage extends Observable {
	public name: string;
	public email: string;
	public password: string;
	public wsuId: string;

	constructor() {
		super();

		this.name = "";
		this.email = "";
		this.password = ""; 
	}

	public submit(): void {
		let student = {
			name: this.name,
			email: this.email,
			password: this.password,
			wsuId: this.wsuId,
			role: "students"
		}

		/* Add user into firebase API authentication */
		firebase.createUser(student)
			/* Add user to students table in database */
			.then((user) => {

				firebase.addUserToMaster(student, user.uid)
					.then(() => {
						firebase.addStudent(student)
							.then(() => {
								dialogs.alert({
									message: "Successfully added user!",
									okButtonText: "WOOOOOO"
								})
							})
					});
			})
			.catch((err) => console.log(err));
	}
}

