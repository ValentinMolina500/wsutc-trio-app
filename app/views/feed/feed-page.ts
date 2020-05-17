import { EventData, Page } from "tns-core-modules/ui/page/page";
import ViewModel from "./feed-page-vm";
import { ContentItem } from "~/utils/content";

export function onNavigatedTo(args: EventData): void {
    const page = <Page>args.object;
    page.bindingContext = new ViewModel(page);
}

export function typeOfContent(item: ContentItem) {
    return item.type;
}
