import { EventData, NavigatedData, Page } from "tns-core-modules/ui/page/page";
import ViewModel from "./feed-page-vm";
import { ContentItem } from "~/utils/content";
let viewModel: any;

export function onNavigatingTo(args: NavigatedData): void {
	console.log('onNavigatingTo');
	if (args.isBackNavigation) {
		return;
	}
    const page = <Page>args.object;
	viewModel= ViewModel;
	page.bindingContext = viewModel;
}
export function onNavigatedTo(args: NavigatedData): void {
	console.log('onNavigatedTo');
	setTimeout(() => { viewModel.loaded = true; }, 8000)
	
}
export function typeOfContent(item) {
    return item.type;
}
