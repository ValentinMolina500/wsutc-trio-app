import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
import { Staff } from "~/models/staff";
import { BaseArray } from '../models/base-array';

export class StaffAdapter extends Observable {
	public staff: ObservableArray<Staff>;

	constructor() {
		super();
		this.staff = new ObservableArray<Staff>();
	}

	public updateStaff(result) {
		// Object.keys(result.value).map(key => {
			this.staff.push(result.value);

			this.staff = new ObservableArray(this.staff.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				} else if (a.name > b.name ) {
					return 1;
				} else {
					return 0;
				}
			}));
		// })
		
	}

	public getData() {
		return this.staff;
	}
}