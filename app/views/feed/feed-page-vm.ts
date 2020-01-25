import { Observable } from "tns-core-modules/ui/page/page";
import { Content, ContentType, News, Event, ContentArea } from "~/utils/content";


export default class FeedPage extends Observable {
    constructor() {
        super();
    }

    public content: Array<News | Event> = [
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
            staff: "Jennifer Silva-Guiterrez ",
            type: ContentType.NEWS,
            title: "FREE COOKIES!",
            link: "Ee",
            timestamp: "1 hour ago"
        },
    ]
}