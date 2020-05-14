import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import HomeViewModel from './home-page-vm';//store adapter
import Store from '../../store/store';//store adapter

export function onNavigatingTo(args: EventData): void {
	const page = <Page>args.object;
	let homeViewModel: HomeViewModel = new HomeViewModel(page);
	page.bindingContext = homeViewModel;
	console.log(page.bindingContext.page);
	Store.setHomeViewModel(homeViewModel);
}

export function  onLoaded(args: EventData) {

}


export function test(index) {
	console.log(index.object);
}

