import { EventData, Page } from "tns-core-modules/ui/page/page";
import ViewModel from "./settings-page-vm";

export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new ViewModel();
}