import { EventData, Page, Color } from "tns-core-modules/ui/page/page";
import { ListView } from "tns-core-modules/ui/list-view";
import ViewModel from "./feed-page-vm";
import { android } from "tns-core-modules/application/application";
import { ContentItem } from "~/utils/content";
import Navigator from "~/utils/navigator";

export function onNavigatedTo(args: EventData): void {
    const page = <Page>args.object;
    page.bindingContext = new ViewModel(page);
}



export function typeOfContent(item: ContentItem) {
    return item.type;
}


/*
Navigator.setCurrentPage(page);
function setupFeed(page: Page) {
    //let feed = <ListView>page.getViewById("feed");
    //feed.separatorColor = new Color('#eff0f2');

    if (android) {
        // feed.android.setVerticalScrollBarEnabled(false);
    }
}*/