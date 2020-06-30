import { Page, EventData, Color } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { ListView } from "tns-core-modules/ui/list-view/list-view";
import { Frame, PercentLength, isIOS } from "tns-core-modules/ui/frame/frame";
import vm from "./direct-message-vm";
import dialogs from "~/utils/dialogs";
import * as app from "tns-core-modules/application";
let model;

declare let android;
export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    // if (android) {
    //     let window = app.android.startActivity.getWindow();
    //     window.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    // }
    page.bindingContext = vm;
    if (isIOS) {
        const view = page.getViewById("main-view");
        const backButton = page.getViewById("back-button");
        backButton.style.visibility = "collapse";
        view.style.marginBottom = PercentLength.parse("39");
    }
    vm.setPage(page.navigationContext, page);
}

export function onLoaded2() {
    // vm.scrollFeed();
}
// export function messageSelector(item)
// {
//     return item.senderId == "17413" ? "sent" : "recieved";
// }

export function goBack() {
	Frame.topmost().goBack();
}

export function onNavigatedTo(args: EventData) {
   
	// vm.trackAndroidKeyboard();
}