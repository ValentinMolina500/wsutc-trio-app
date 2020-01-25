import { EventData, Page, Color } from "tns-core-modules/ui/page/page";
import { ListView } from "tns-core-modules/ui/list-view";
import ViewModel from "./feed-page-vm";
import { android } from "tns-core-modules/application/application";
import { Content } from "~/utils/content";

export function onNavigatedTo(args: EventData): void {
    const page = <Page>args.object;
    setupFeed(page);
    page.bindingContext = new ViewModel();
}

function setupFeed(page: Page) {
    let feed = <ListView>page.getViewById("feed");
    feed.separatorColor = new Color('#eff0f2');

    if (android) {
        // feed.android.setVerticalScrollBarEnabled(false);
    }
}

export function typeOfContent(item: Content) {
    return item.type;
}