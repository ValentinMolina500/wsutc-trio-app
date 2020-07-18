import { Page } from "tns-core-modules/ui/page";
import { fromObject } from "tns-core-modules/data/observable";

export function onLoaded(args) {
    const page = args.object as Page;

    page.bindingContext = fromObject({
        videoTitle: page.navigationContext.video.title,
        videoTimestamp: page.navigationContext.video.timestamp
    })
}