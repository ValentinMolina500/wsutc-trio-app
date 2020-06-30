import { EventData, Page, Color } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { Frame, isIOS, PercentLength } from "tns-core-modules/ui/frame/frame";
import ViewModel from "./messages-vm";
import { NavigatedData } from 'tns-core-modules/ui/page';
import Store from '../../store/store';//store adapter

export function onNavigatingTo(args: NavigatedData): void {
    // if (args.isBackNavigation) {
    //     return;
    // }
    let page = <Page>args.object;
    page.bindingContext = ViewModel;
    
    if (isIOS) {
        const stackLayout = page.getViewById("main-view");
        stackLayout.style.marginBottom = PercentLength.parse("39");
    }
 
    // page.bindingContext = fromObject({
    //     conversations: [],
    //     onItemTap: function(args: ItemEventData) {
    //         Frame.topmost().navigate("~/views/messages/direct-message-page/direct-message-page");

    //     }
    // });
    // page.bindingContext.conversations = Store.getConversations();


    let feed = <ListView>page.getViewById("feed");
    feed.separatorColor = new Color('#eff0f2');
}

export function onNavigatedTo(): void {
    console.log("NAVIGATING TO");
}

