import { EventData, Page, Color, PercentLength, isIOS } from "tns-core-modules/ui/page/page";
import ViewModel from "./staff-page-vm";
import { ListView } from "tns-core-modules/ui/list-view/list-view";
import { android } from "tns-core-modules/application/application";

export function onNavigatingTo(args: EventData) {
    let page = <Page>args.object;
    setupFeed(page);
    if (isIOS) {
        const view = page.getViewById("list-view");
        view.style.marginBottom = PercentLength.parse("39");
    }
    page.bindingContext = ViewModel;
}


function setupFeed(page: Page) {
    let feed = <ListView>page.getViewById("list-view");
    feed.separatorColor = new Color('#eff0f2');

    if (android) {
        // feed.android.setVerticalScrollBarEnabled(false);
    }

    
}

