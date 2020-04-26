import { Page, EventData, Color } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { ListView } from "tns-core-modules/ui/list-view/list-view";
import { Frame } from "tns-core-modules/ui/frame/frame";
import vm from "./direct-message-vm";

export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new vm(page, page.navigationContext.messages);
    console.log(page.navigationContext);
}

export function goBack() {
    Frame.topmost().goBack();
}

export function messageSelector(item)
{
    return item.type == "sent" ? "sent" : "recieved";
}
