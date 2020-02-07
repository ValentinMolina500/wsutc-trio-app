import { Page } from "tns-core-modules/ui/page";
import ViewModel from "./login-page-vm";
import * as svgModule from "nativescript-svg";

export function onLoaded(args) {
    const page = <Page>args.object;
    page.bindingContext = new ViewModel();
    // var file = new svgModule.ImageSourceSVG();

    // var path = "/imgs/drawing.svg";
    // let loaded = file.loadFromFile(path)

    // if (loaded) {
    //     console.log("loaded")
    // } else {
    //     console.log("error");
    // }
}