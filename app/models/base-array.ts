import { ObservableArray } from 'tns-core-modules/data/observable-array';

export class BaseArray<T> extends ObservableArray<T> {
    constructor(items: Array<any>) {
        super();
        
        if (items) {
            items.forEach((item) => this.push(item));
        } 
    }
    
    public findItem(itemT: T, field): T | number {//override findItem
        let item: T;
        for (let i = 0, l = this.length; i < l; i++) {
            let item: T = this.getItem(i);
            if (item[field] === itemT[field]) {
                return item;
            }
        }
        return -1;
    };
}