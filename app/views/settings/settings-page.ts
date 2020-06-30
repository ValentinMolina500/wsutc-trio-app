import { EventData, Page, isIOS, PercentLength } from "tns-core-modules/ui/page/page";
import ViewModel from "./settings-page-vm";

export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    if (isIOS) {
        const view = page.getViewById("main-view");
        view.style.marginBottom = PercentLength.parse("39");
    }
    page.bindingContext =  ViewModel;
}