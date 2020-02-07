import { Observable } from "tns-core-modules/ui/page/page";
import Navigator from "~/utils/navigator";
import { Menu } from "nativescript-menu";
import * as Calendar from "nativescript-calendar";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Frame } from "tns-core-modules/ui/frame";

declare let android;

export class ContentItem extends Observable {
    public type: ContentType;
    public title: string;
    public description: string;
    public icon: string;
    public image: string;
    public timestamp: string;
    public area: ContentArea;
    public staff: string;
    public postId: string;

    constructor(item: any) {
        super();

        this.type = item.type;
        this.title = item.title;
        this.description = item.description;
        this.icon = item.icon;
        this.image = item.image || null;
        this.timestamp = item.timestamp;
        this.area = item.area;
        this.staff = item.staff;
        this.postId = item.postId;
    }

    public openMenu() {
        if (app.android) {
            let view = app.android.startActivity.getWindow().getDecorView();
            view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
        }
        console.log("hello");

        Menu.popup({
            view: Frame.topmost().page.getViewById(this.postId),
            actions: [
                "Link",
                "Share"
            ]
        });
    }


}

export enum ContentType {
    NEWS = "NEWS",
    EVENT = "EVENT",
}

export enum ContentArea {
    CARRER = "Career",
    LIFE = "Life", 
    NEWS = "News",
    EVENT = "Event"
}

export class NewsItem extends ContentItem {
    public link: string;
    public smileCount: number;
    public surprisedCount: number;
    public hasSmiled: boolean;
    public hasSurprised: boolean;

    constructor(item: any) {
        super(item);

        this.link = item.link;
        this.smileCount = item.smileCount;
        this.surprisedCount = item.surprisedCount;
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
        }
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

export class EventItem extends ContentItem {
    public date: string;
    public location: string;
    public time: string;

    constructor(item: any) {
        super(item);

        this.date = item.date;
        this.location = item.location;
        this.time = item.time;
    }

    public eventAdd() {
        if (app.android) {
            let view = app.android.startActivity.getWindow().getDecorView();
            view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
        }

        dialogs.confirm("Add Event To Your Calendar?")
            .then((res) => {
                if (res) {
                    //@ts-ignore
                    Calendar.createEvent({
                        startDate: new Date(new Date().getTime() + (60*60*1000)),
                        endDate: new Date(new Date().getTime() + (2*60*60*1000)),
                        title: this.title,
                        notes: "Created via the TRIO APp",
                        location: this.location
                    }).then((id: string) => console.log("This is event id"));
                }
            })
    }
}


