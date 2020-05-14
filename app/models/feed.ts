import { Observable } from "tns-core-modules/ui/page/page";
import Navigator from "~/utils/navigator";
import { Menu } from "nativescript-menu";
import * as Calendar from "nativescript-calendar";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Frame } from "tns-core-modules/ui/frame";
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { ContentType, ContentArea } from "./strings";
import { ContentItem } from "./content";
import { ObservableProperty } from '~/observable-property-decorator';

declare let android;

export class Feed extends ContentItem {
    public link: string;
    @ObservableProperty() smileCount: number;
    @ObservableProperty() surprisedCount: number;
    @ObservableProperty() hasSmiled: boolean;
    @ObservableProperty() hasSurprised: boolean;

    constructor(item: any) {
        super(item);
        this.link = item.link;
        this.smileCount = item.smileCount;
        this.surprisedCount = item.surprisedCount;
        this.hasSmiled = item.hasSmiled || false;
        this.hasSurprised = item.hasSurpried || false;
    }
    public update(item: any) {
        this.link = item.link;
        this.smileCount = item.smileCount;
        this.surprisedCount=item.surprisedCount;
        this.hasSmiled = item.hasSmiled || false;
        this.hasSurprised = item.hasSurpried || false;
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


