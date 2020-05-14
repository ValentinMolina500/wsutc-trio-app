import { Observable } from "tns-core-modules/ui/page/page";
import { Menu } from "nativescript-menu";
import * as Calendar from "nativescript-calendar";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Frame } from "tns-core-modules/ui/frame";
import { BaseArray } from './base-array';
import { ContentType, ContentArea } from "./strings";

declare let android;

export class ContentItem extends Observable {
    public type: ContentType;
    public title: string;
    public description: string;
    public icon: string;
    public image: string;
    public timestamp: string;//format
    public area: ContentArea;
    public staff: string;//creator
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

        Menu.popup({
            view: Frame.topmost().page.getViewById(this.postId),
            actions: [
                "Link",
                "Share"//later implement
            ]
        });
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
                        startDate: new Date(new Date().getTime() + (60 * 60 * 1000)),
                        endDate: new Date(new Date().getTime() + (2 * 60 * 60 * 1000)),
                        title: this.title,
                        notes: "Created via the TRIO APP",
                        location: this.location
                    }).then((id: string) => console.log("This is event id"));
                }
            })
    }
}


