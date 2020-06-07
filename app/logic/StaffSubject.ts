import { Staff } from "~/models/staff";
import Firebase from "~/utils/firebase";

export class StaffSubject {
	private observers: Array<any> = [];
	private staff: Array<Staff> = [];
	private listeners = [];
	public isSet: boolean = false;

	public register(o) {
		this.observers.push(o)
	}
	
	public notifyObservers() {
		this.observers.forEach(o => {
			o.updateStaff(this.staff);
		})
	}

	public setStaffListener(role) {
		if (this.isSet) return;

		let reciever;
		this.isSet = true;
		if (role == "students") {
			reciever = "staff";
		} else {
			reciever = "students";
		}
		
		Firebase.staffListener((result) => {
			if (result.type == "ChildAdded") {
				this.staff.push(new Staff(result.value));

				this.notifyObservers();
			}
			
		}, reciever)
		.then((listenersWrapper) => {
			this.listeners.push(listenersWrapper);
		})
	}

	public logout(): void {
		this.listeners.forEach((listenerWrapper) => {
			Firebase.removeEventListeners(listenerWrapper.listeners, listenerWrapper.path);
		})

		this.staff = [];
		this.notifyObservers();
		this.isSet = false;
	}
}

let s = new StaffSubject();

export default s;