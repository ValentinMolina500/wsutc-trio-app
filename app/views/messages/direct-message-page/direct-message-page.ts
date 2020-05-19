import { Page, EventData, Color } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { ListView } from "tns-core-modules/ui/list-view/list-view";
import { Frame } from "tns-core-modules/ui/frame/frame";
import vm from "./direct-message-vm";
import dialogs from "~/utils/dialogs";

let model;
export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new vm(page.navigationContext.key);
    // page.bindingContext.init(page, page.navigationContext)
    // dialogs.hideLoader();
}

export function messageSelector(item)
{
    return item.senderId == "17413" ? "sent" : "recieved";
}

export function goBack() {
	Frame.topmost().goBack();
}
