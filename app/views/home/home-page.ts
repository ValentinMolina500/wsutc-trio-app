import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import HomeViewModel from './home-page-vm';//store adapter
import Store from '../../store/store';//store adapter

export function onNavigatingTo(args: EventData): void {
	const page = <Page>args.object;
	let homeViewModel: HomeViewModel = new HomeViewModel(page);
	page.bindingContext = homeViewModel;
	Store.setHomeViewModel(homeViewModel);
}



