import { Observable, Page } from "tns-core-modules/ui/page/page";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ContentItem,ContentType, NewsItem, EventItem, ContentArea } from "~/utils/content";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { Menu } from "nativescript-menu";
import * as Calendar from "nativescript-calendar";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import Store from '../../store/store';//store adapter
import { FeedsAdapter } from '../../store/feed-adapter';

declare let android;

export default class FeedPage extends Observable {
    public content: FeedsAdapter;
    private page: Page;
        
    constructor(page) {
        super();
        this.page = page;
        this.content = Store.FeedsViewModel();

    }
    
    /* public content: any = new ObservableArray([
        fromObject({
            area: ContentArea.NEWS,
            description: "The office will close earlier today at 2:00PM. Sorry for any inconvenience this may pose.",
            icon: "~/imgs/stassia.jpg",
            image: null,
            id: "0",
            staff: "Stassia Feltes",
            timestamp: "30 min ago",
            type: ContentType.NEWS,
            title: "Office Closure",
            //@ts-ignore
            openDropdown: function() {
                this.open  = !this.open;
                console.log(this.open);
            },
            open: true,
            smileCount: 23,
            surprisedCount: 45,
            smiled: false,
            surprised: false,
            smile: function() {
                // this.set("smiledCount", this.smileCount++)
                if (this.smiled) {
                    this.set("smiledCount", this.smileCount--);
                    this.set("smiled", false)
                } else {
                    this.set("smiledCount", this.smileCount++);
                    this.set("smiled", true)
                }

                if (app.android) {
                    let view = app.android.startActivity.getWindow().getDecorView();
                    view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
                }
            },
            surprise: function() {
                if (this.surprised) {
                    this.set("surprisedCount", this.get("surprisedCount") - 1);
                    this.set("surprised", false)
                } else {
                    this.set("surprisedCount", this.get("surprisedCount") + 1);
                    this.set("surprised", true)
                }

                if (app.android) {
                    let view = app.android.startActivity.getWindow().getDecorView();
                    view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
                }
            },
            openMenu: () => {
                if (app.android) {
                    let view = app.android.startActivity.getWindow().getDecorView();
                    view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
                }
                Menu.popup({
                    view: this.page.getViewById("0"),
                    actions: [
                        "Share",
                        "Open Link"
                    ]
                })
            }
        }),
        {
            area: ContentArea.EVENT,
            description: "We want to invite you to celebrate Martin Luther King Jr. day with the Career Services and MOSAIC Center.\n\nThey will be hosting a MLK Celebration watch party in the SUB today from 6-8PM.\n\nIf you have some free time stop by and hang out. 😃",
            icon: "~/imgs/jennifer.jpg",
            image: null,
            id: "1",
            staff: "Jennifer Silva-Gutierrez",
            timestamp: "3 days ago",
            type: ContentType.EVENT,
            title: "MLK celebration watch party TODAY",
            date: "1/23",
            location: "SUB",
            time: "6PM",
            openMenu: () => {
                if (app.android) {
                    let view = app.android.startActivity.getWindow().getDecorView();
                    view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
                }
                Menu.popup({
                    view: this.page.getViewById("1"),
                    actions: [
                        "Share",
                        "Open Link"
                    ]
                })
            },
            eventAdd: () => {
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
                                title: "MLK celebration watch party TODAY",
                                notes: "Testing",
                                location: "SUB"
                            }).then((id: string) => console.log("This is event id"));
                        }
                    })
                
                
            }
        },
        {
            area: ContentArea.LIFE,
            description: "There will be a Study Abroad Info session at 3PM today via Zoom meeting ID: 405-018-945 with the Pullman campus.\n\nIf you are interested join the meeting! The deadline to apply to study abroad in Rome is Feb 3rd at noon.",
            icon: "~/imgs/jennifer.jpg",
            image: "~/imgs/rome.png",
            staff: "Jennifer Silva-Gutierrez",
            timestamp: "4 days ago",
            type: ContentType.EVENT,
            title: "Study in ROME info session",
            date: "1/22",
            location: "ZOOM",
            time: "3PM"
        },
        {
            area: ContentArea.CARRER,
            description: "Today Career Services and MOSAIC Center are having a Career Workshop: How to Write a Winning Resume and Cover Letter. This event is happening in Floyd 140 at 1:00PM -2:00PM.\n\nResumes and cover letters are really important in applying for jobs, internships, scholarships and other positions you are interested in. To stand out from other applicants you need to impress the hiring committees before they even meet you, the only way to do so is through your resume and cover letter.\n\nYou don’t want to miss this great opportunity!",
            icon: "~/imgs/jennifer.jpg",
            image: null,
            staff: "Jennifer Silva-Gutierrez",
            timestamp: "4 days ago",
            type: ContentType.EVENT,
            title: "Career Workshop by Career services and MOSAIC center",
            date: "1/22",
            location: "FLOYD 140",
            time: "1PM"
        },
        {
            area: ContentArea.CARRER,
            description: "Come join our resume workshop with Alisa Thompson.",
            date: "4/15",
            icon: "~/imgs/oliva.jpg",
            image: "~/imgs/resume.jpg",
            location: "FLOYD 251",
            staff: "Oliva Primera",
            time: "2:15 PM",
            timestamp: "1 hour ago",
            type: ContentType.EVENT,
            title: "Resume Workshop with Alisa Thompson",
        },
        {
            area: ContentArea.LIFE,
            description: "Free cookies provided by Richland High's Home Education class! Stop by the office!",
            icon: "~/imgs/jennifer.jpg",
            image: "~/imgs/cookies.jpg",
            staff: "Jennifer Silva-Gutierrez ",
            type: ContentType.NEWS,
            title: "FREE COOKIES!",
            link: "Ee",
            timestamp: "1 hour ago"
        },
    ])*/


}