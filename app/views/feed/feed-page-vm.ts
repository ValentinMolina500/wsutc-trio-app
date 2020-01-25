import { Observable } from "tns-core-modules/ui/page/page";
import { Content, ContentType } from "~/utils/content";

export default class FeedPage extends Observable {
    constructor() {
        super();
    }

    public content: Array<any> = [
        { title: "Come join our graduate student paper workshop", image: "~/imgs/college.jpg" },
        { title: "Testing" },
        { title: "Testing" },
        { title: "Testing" },
        { title: "Testing" },
        { title: "Testing" },
    ]
}