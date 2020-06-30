import { EventData, NavigatedData, Page, PercentLength } from "tns-core-modules/ui/page/page";
import ViewModel from "./feed-page-vm";
import { isIOS } from "tns-core-modules/platform";

let viewModel: any;
export function onNavigatingTo(args: NavigatedData): void {
	console.log('onNavigatingTo');
	if (args.isBackNavigation) {
		return;
	}
    const page = <Page>args.object;
    viewModel= ViewModel;
    
    if (isIOS) {
        const stackLayout = page.getViewById("main-stack");
        stackLayout.style.marginBottom = PercentLength.parse("50");
    }
	page.bindingContext = viewModel;
}
export function onNavigatedTo(args: NavigatedData): void {
	console.log('onNavigatedTo');
	setTimeout(() => { viewModel.loaded = true; }, 8000)
	
}
export function typeOfContent(item) {
    return item.type;
}
