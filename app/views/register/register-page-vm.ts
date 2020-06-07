import { Observable } from "tns-core-modules/data/observable";
import firebase from "~/utils/firebase"
import * as dialogs from "tns-core-modules/ui/dialogs"; 
import { Frame } from "tns-core-modules/ui/frame/frame";

export class RegisterPage extends Observable {
	public name: string = "";
	public nameError: boolean = false;
	public email: string = "";
	public emailError: boolean = false;
	public password: string = "";
	public passwordError: boolean = false;
	public wsuId: string = "";
	public wsuIdError: boolean = false;
	public btnEnabled: boolean = true;
	public invalidPasswordLengthError: boolean = false;
	public loading: boolean = false;

	constructor() {
		super();

		this.name = "";
		this.email = "";
		this.password = ""; 
	}

	public submit(): void {		
		if (!this.validate()) {
			return;
		}
		
		let name = this.name.toLowerCase()
			.split(' ')
			.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
			.join(' ');

		let student = {
			name: name,
			email: this.email,
			password: this.password,
			wsuId: this.wsuId,
			role: "students"
		}

		this.set("btnEnabled", false);
		this.set("loading", true);
		/* Add user into firebase API authentication */
		firebase.createUser(student)
			/* Add user to students table in database */
			.then((user) => {

				firebase.addUserToMaster(student, user.uid)
					.then(() => {
						firebase.addStudent(student)
							.then(() => {
								dialogs.alert({
									message: "Account created! Sign in with your account",
									okButtonText: "OK"
								})
								.then(() => { this.set("loading", false); Frame.goBack() })
							})
					});
			})
			.catch((err) => {
				dialogs.alert({
					message: "Email is already in use!",
					okButtonText: "OK"
				})
				.then(() => {
					this.set("name", "");
					this.set("wsuId", "");
					this.set("email", "");
					this.set("password", "");
					this.set("loading", false);
				})
			});
	}

	private validate(): boolean {
		let hasError = false;

		if (this.name == "") {
			this.set("nameError", true);
			hasError = true;
		}

		if (this.wsuId == "") {
			this.set("wsuIdError", true);
			hasError = true;
		}

		if (this.email == "") {
			this.set("emailError", true);
			hasError = true;
		}

		if (this.password == "") {
			this.set("passwordError", true);
			hasError = true;
		}
		else if (this.password.length < 6) {
			this.set("passwordError", false);
			this.set("invalidPasswordLengthError", true);
			hasError = true;
		}

		if (hasError) return false;

		this.set("nameError", false);
		this.set("wsuIdError", false);
		this.set("emailError", false);
		this.set("passwordError", false);

		return true;
	}
}

