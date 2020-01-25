import { Page, Observable } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame/frame";


export function onNavigatingTo(args) {
    let page: Page = args.object;
    let staff = page.navigationContext;
    page.bindingContext = fromObject(staff);
}

export function goBack() {
    Frame.goBack();
}