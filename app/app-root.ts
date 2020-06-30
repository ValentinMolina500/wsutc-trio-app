import { EventData } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import AppRootModel from "./app-root-vm";

export function onLoaded(args: EventData) {
    let appRoot = <GridLayout>args.object;
    appRoot.bindingContext = new AppRootModel();
}