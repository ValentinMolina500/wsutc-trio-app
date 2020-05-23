import { Observable } from "tns-core-modules/data/observable";
import firebase from "~/utils/firebase"

export class RegisterPage extends Observable {
	public email: string;
	public password: string;
	public wsuId: string;

	constructor() {
		super();

		this.email = "";
		this.password = ""; 
	}

	public submit(): void {
		let student = {
			email: this.email,
			password: this.password,
			wsuId: this.wsuId
		}

		firebase.createStudent(student)
			.then((result) => {
				console.log(result);
			});
	}
}

