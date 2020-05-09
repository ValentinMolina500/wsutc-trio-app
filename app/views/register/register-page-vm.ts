import { Observable } from "tns-core-modules/data/Observable";

export class RegisterPage extends Observable {
	public WSUID: string = "";
	public disabled: boolean = false;

	constructor() {
		super();
	}

	public submit(): void {
		console.log(this.WSUID);
		this.set("WSUID", 2090109);
	}
}