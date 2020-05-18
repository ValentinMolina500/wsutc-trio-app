import { Observable } from "tns-core-modules/ui/page/page";

export class Staff extends Observable {
	public name: string;
	public position: string;
	public wsuId: string;

	constructor() {
		super();
	}
}