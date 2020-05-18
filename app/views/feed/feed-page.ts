import { EventData, Page } from "tns-core-modules/ui/page/page";
import ViewModel from "./feed-page-vm";
import { ContentItem } from "~/utils/content";
let viewModel: ViewModel = new ViewModel();

export function onNavigatedTo(args: EventData): void {
    const page = <Page>args.object;
	page.bindingContext = viewModel;
}

export function typeOfContent(item: ContentItem) {
    return item.type;
}
