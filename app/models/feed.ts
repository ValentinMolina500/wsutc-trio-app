import { Observable } from "tns-core-modules/ui/page/page";
import Navigator from "~/utils/navigator";
import { Menu } from "nativescript-menu";
import * as app from "tns-core-modules/application";
import { ContentItem } from "./content";
import { ObservableProperty } from '~/observable-property-decorator';
import Cache from "~/utils/image-cache";
import * as utils from "tns-core-modules/utils/utils";
import { formatPostTimestamp } from "~/utils/time";
import firebase from "~/utils/firebase";
// import moment from "moment";

declare let android;

export enum PostType {
    NEWS = "NEWS",
    EVENT = "EVENT",
    INSTAGRAM = "INSTAGRAM",
    FACEBOOK = "FACEBOOK"
};

export function postFactory(post: any, wsuId): any {
    switch (post.type) {
        case PostType.NEWS:
            return new NewsPost(post, wsuId);
            break;
        
        case PostType.EVENT:
            return new EventPost(post);
            break;

        case PostType.INSTAGRAM:
            return new InstagramPost(post);
            break;

        default:
            return new FeedItem(post);
            break;
    }
}

/* Base feed item class */
export class FeedItem extends Observable {

    /* Description of the post */
    public description: string

    /* Image url, remote or absoulute. Optional */
    public image: string;

    /* Raw timestamp string */
    public timestamp: string;

    /* The type of post */
    public type: PostType

    /* Formatted timestamp for front end */
    public visibleTimestamp: string;

    public index: string = "postId";

    public postId: string;

    constructor(feedItem: any) {
        super();

        this.updateBase(feedItem);
    }

    /* Initializes properties according to passed in object */
    public updateBase(feedItem: any) {
        this.description = feedItem.description;
        this.image = feedItem.image;
        this.timestamp = feedItem.timestamp;
        this.type = feedItem.type;
        this.postId = feedItem.postId;

        /* TODO: Add format for timestamp */
        this.visibleTimestamp = this.timestamp;
        let timestamp = new Date(this.timestamp);

        if (this.type == "INSTAGRAM")
        {
            this.timestamp = this.timestamp.slice(0, this.timestamp.indexOf("+"))
            this.visibleTimestamp = new Date(this.timestamp).toDateString();
        } else {
            this.visibleTimestamp = timestamp.toDateString();
        }

    }
}

/* Posts thats are of type news */
export class NewsPost extends FeedItem {

    /* The area this post falls into i.e. finance, self-care */
    public area: string;

    /* A remote URL of an image of the staff making the post */
    public iconImage: string;

    /* Staff name */
    public staffName: string;

    public title: string;
    public smiles: any;
    public smileCount: number;

    public surprisedCount: number;

    public hasSmiled: boolean = false;

    public hasSurprised: boolean = false;

    constructor(newsItem: any, wsuId) {
        super(newsItem);

        this.update(newsItem, wsuId);
    }

    // public update(newsItem: any) {
    //     this.area = newsItem.area;
    //     this.iconImage = newsItem.iconImage;
    //     this.staffName = newsItem.staffName;
    //     this.title = newsItem.title;
    //     this.smiles = newsItem.smiles;
    //     this.set("smileCount", newsItem.smileCount);
    //     this.surprisedCount = newsItem.surprisedCount;
    // }

    public update(newsItem: any, wsuId: string) {
        this.area = newsItem.area;
        this.iconImage = newsItem.iconImage;
        this.smiles = newsItem.smiles;
        this.staffName = newsItem.staffName;
        this.title = newsItem.title;

        if (newsItem.smiles && newsItem.smiles[wsuId]) {
            console.log("smiles!");
            this.set("hasSmiled", true);
        } else {
            this.set("hasSmiled", false);
        }
        this.set("smileCount", newsItem.smileCount);
        this.surprisedCount = newsItem.surprisedCount;
    }

    public doSmile() {
        if (app.android) {
            let view = app.android.startActivity.getWindow().getDecorView();
            view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
        }

        console.log("This is post id: ");
        console.log(this.postId);
        firebase.toggleSmile(this.postId);
        // if (!this.hasSmiled) {
        //     this.set("smileCount", this.get("smileCount") + 1);
        //     this.set("hasSmiled", true);
        // } else {
        //     this.set("smileCount", this.get("smileCount") - 1);
        //     this.set("hasSmiled", false);
        // }
    }

    
}

export class EventPost extends FeedItem {
    /* The area this post falls into i.e. finance, self-care */
    public area: string;

    /* A remote URL of an image of the staff making the post */
    public iconImage: string;

    /* Staff name */
    public staffName: string;

    public title: string;

    public date: string;

    public location: string;

    public time: string;

    public visibleDate: string;

    public visibleLocation: string;

    public visibleTime: string;

    constructor(eventItem: any) {
        super(eventItem);
        this.update(eventItem);
    }

    public update(eventItem: any) {
        this.area = eventItem.area;
        this.iconImage = eventItem.iconImage;
        this.staffName = eventItem.staffName;
        this.title = eventItem.title;
        this.date = eventItem.date;
        this.location = eventItem.location;
        this.time = eventItem.time;

        this.visibleDate = eventItem.date;
        this.visibleLocation = eventItem.location;
        this.visibleTime = eventItem.time;
    }
}

export class InstagramPost extends FeedItem {
    /* Link to the Instagram Post */
    public link: string;

    constructor(instagramPost: any) {
        super(instagramPost);
        this.update(instagramPost);
    }

    public update(instagramPost: any)  {
        this.link = instagramPost.link;
    }

    public openLink() {
        utils.openUrl(this.link);
    }
}

export async function newImageCacheFeedFactory(result: any, wsuId) {
    let tempFeed = result.value;
    tempFeed.postId = result.key;
    tempFeed.key = result.key;

    console.log(result.key);
    if (tempFeed.iconImage) {
        tempFeed.iconImage = await Cache.getImageByUrl(tempFeed.iconImage);
    }
    tempFeed.image = await Cache.getImageByUrl(tempFeed.image);
   
    return postFactory(tempFeed, wsuId);
};

