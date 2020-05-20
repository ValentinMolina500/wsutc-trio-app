import { EventData, NavigatedData, Page } from "tns-core-modules/ui/page/page";
import ViewModel from "./feed-page-vm";
import { ContentItem } from "~/utils/content";

export function onNavigatedTo(args: NavigatedData): void {
	if (args.isBackNavigation) {
		return;
	}
    const page = <Page>args.object;
	page.bindingContext = new ViewModel();;
}

export function typeOfContent(item: ContentItem) {
    return item.type;
}
