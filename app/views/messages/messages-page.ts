import { EventData, Page, Color } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { Frame } from "tns-core-modules/ui/frame/frame";
import ViewModel from "./messages-vm";

export function onLoaded(args: EventData): void {
    let page = <Page>args.object;

    page.bindingContext = ViewModel;
    page.bindingContext.init();

    let feed = <ListView>page.getViewById("feed");
    feed.separatorColor = new Color('#eff0f2');
}

export function onNavigatedTo(): void {
    console.log("NAVIGATING TO");
}