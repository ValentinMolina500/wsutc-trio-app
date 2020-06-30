import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Observable } from 'tns-core-modules/data/observable';
import { Staff, Order, newImageCacheStaffFactory } from "~/models/staff";
import { BaseArray } from '../models/base-array';

export class StaffAdapter extends Observable {
	
	public staffs: BaseArray<Staff>;
	constructor() {
		super();
		this.staffs = new BaseArray<Staff>(null);
	}

	public updateStaff = async (result: any) => {
		console.log(result);
		let staff: Staff = await newImageCacheStaffFactory(result)
		let tempStaff = this.staffs.findItem(staff, staff.index);

		if (typeof (tempStaff) === "number") {
			this.staffs.push(staff);
		} else {
			tempStaff.update(staff);
			console.log(tempStaff);
		}
		this.staffs.sort(Order);
	};

	public getData() {
		return this.staffs;
	}
}