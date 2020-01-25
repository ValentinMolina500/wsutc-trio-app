import { Page } from "tns-core-modules/ui/page";
import ViewModel from "./login-page-vm";

export function onLoaded(args) {
    const page = <Page>args.object;
    page.bindingContext = new ViewModel();
}