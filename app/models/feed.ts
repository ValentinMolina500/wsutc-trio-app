import { Observable } from "tns-core-modules/ui/page/page";
import Navigator from "~/utils/navigator";
import { Menu } from "nativescript-menu";
import * as app from "tns-core-modules/application";
import { ContentItem } from "./content";
import { ObservableProperty } from '~/observable-property-decorator';
import Cache from "~/utils/image-cache";

declare let android;

export class Feed extends ContentItem {
    public link: string;
    @ObservableProperty() smileCount: number;
    @ObservableProperty() surprisedCount: number;
    @ObservableProperty() hasSmiled: boolean;
    @ObservableProperty() hasSurprised: boolean;
    public updateTs: number;
    public index: string = "postId";

    constructor(item: any) {
        super(item);
        this.update(item);
    }
    
    public update(item: any) {
        this.link = item.link;
        this.smileCount = item.smileCount;
        this.surprisedCount=item.surprisedCount;
        this.hasSmiled = item.hasSmiled || false;
        this.hasSurprised = item.hasSurpried || false;
        this.updateTs = item.updateTs;
    }
    public doSmile() {
                if (app.android) {
            let view = app.android.startActivity.getWindow().getDecorView();
            view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
        }
        if (!this.hasSmiled) {
            this.set("smileCount", this.get("smileCount") + 1);
            this.set("hasSmiled", true);
        } else {
            this.set("smileCount", this.get("smileCount") - 1);
            this.set("hasSmiled", false);
        }//directly to firebase , call clud function
    }

    public doSurprise() {
        if (app.android) {
            let view = app.android.startActivity.getWindow().getDecorView();
            view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
        }

        if (!this.hasSurprised) {
            this.set("surprisedCount", this.get("surprisedCount") + 1);
            this.set("hasSurprised", true);
        } else {
            this.set("surprisedCount", this.get("surprisedCount") - 1);
            this.set("hasSurprised", false);
        }
    }

}
export async function newImageCacheFeedFactory(result: any) {
    let tempFeed = result.value;
    tempFeed.postId = result.key;
    tempFeed.icon = await Cache.getImageByUrl(tempFeed.icon);
    tempFeed.image = await Cache.getImageByUrl(tempFeed.image);
    return new Feed(tempFeed);
};
export function Order(a: Feed, b: Feed) {
     if (a.updateTs < b.updateTs) {
         return 1;
     } else if (a.updateTs > b.updateTs) {
         return -1;
     }
     return 0;
 }



