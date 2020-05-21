import { Staff } from "~/models/staff";
import Firebase from "~/utils/firebase";

export class StaffSubject {
	private observers: Array<any> = [];
	private staff: Array<Staff> = [];

	public register(o) {
		this.observers.push(o)
	}
	
	public notifyObservers() {
		this.observers.forEach(o => {
			o.updateStaff(this.staff);
		})
	}

	public setStaffListener() {
		Firebase.staffListener((result) => {
			this.staff.push(new Staff(result.value));

			this.notifyObservers();
		});
	}
}

let s = new StaffSubject();

export default s;