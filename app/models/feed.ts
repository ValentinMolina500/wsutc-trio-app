import { Observable } from "tns-core-modules/ui/page/page";
import Navigator from "~/utils/navigator";
import { Menu } from "nativescript-menu";
import * as app from "tns-core-modules/application";
import { ContentItem } from "./content";
import { ObservableProperty } from '~/observable-property-decorator';
import Cache from "~/utils/image-cache";

declare let android;

export enum PostType {
    NEWS = "NEWS",
    EVENT = "EVENT",
    INSTAGRAM = "INSTAGRAM",
    FACEBOOK = "FACEBOOK"
};

export function postFactory(post: any): any {
    switch (post.type) {
        case PostType.NEWS:
            return new NewsPost(post);
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

        /* TODO: Add format for timestamp */
        this.visibleTimestamp = formatPostTimestamp(feedItem.timestamp);
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

    public smileCount: number;

    public surprisedCount: number;

    public hasSmiled: boolean = false;

    public hasSurprised: boolean = false;

    constructor(newsItem: any) {
        super(newsItem);

        this.update(newsItem);
    }

    public update(newsItem: any) {
        this.area = newsItem.area;
        this.iconImage = newsItem.iconImage;
        this.staffName = newsItem.staffName;
        this.title = newsItem.title;

        this.smileCount = newsItem.smileCount;
        this.surprisedCount = newsItem.surprisedCount;
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
}

// export class Feed extends ContentItem {
//     public link: string;
//     @ObservableProperty() smileCount: number;
//     @ObservableProperty() surprisedCount: number;
//     @ObservableProperty() hasSmiled: boolean;
//     @ObservableProperty() hasSurprised: boolean;
//     public updateTs: number;
//     public index: string = "postId";

//     constructor(item: any) {
//         super(item);
//         this.update(item);
//     }
    
//     public update(item: any) {
//         this.link = item.link;
//         this.smileCount = item.smileCount;
//         this.surprisedCount=item.surprisedCount;
//         this.hasSmiled = item.hasSmiled || false;
//         this.hasSurprised = item.hasSurpried || false;
//         this.updateTs = item.updateTs;
//     }
//     public doSmile() {
//                 if (app.android) {
//             let view = app.android.startActivity.getWindow().getDecorView();
//             view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
//         }
//         if (!this.hasSmiled) {
//             this.set("smileCount", this.get("smileCount") + 1);
//             this.set("hasSmiled", true);
//         } else {
//             this.set("smileCount", this.get("smileCount") - 1);
//             this.set("hasSmiled", false);
//         }//directly to firebase , call clud function
//     }

//     public doSurprise() {
//         if (app.android) {
//             let view = app.android.startActivity.getWindow().getDecorView();
//             view.playSoundEffect(android.view.SoundEffectConstants.CLICK);
//         }

//         if (!this.hasSurprised) {
//             this.set("surprisedCount", this.get("surprisedCount") + 1);
//             this.set("hasSurprised", true);
//         } else {
//             this.set("surprisedCount", this.get("surprisedCount") - 1);
//             this.set("hasSurprised", false);
//         }
//     }

// }
export async function newImageCacheFeedFactory(result: any) {
    let tempFeed = result.value;
    tempFeed.postId = result.key;
    tempFeed.key = result.key;
    tempFeed.iconImage = await Cache.getImageByUrl(tempFeed.iconImage);
    tempFeed.image = await Cache.getImageByUrl(tempFeed.image);

   
    return postFactory(tempFeed);
};

export function formatPostTimestamp(ts: string): string {
    const timestamp: Date = new Date(ts);
    const currentDate: Date = new Date();

    if (currentDate.getTime() - timestamp.getTime() < 86400000) {
        return `${timestamp.getHours()}:${timestamp.getMinutes() < 10 ? '0' : ''}${timestamp.getMinutes()}`;
    }

    return `debug`;
}

// export function Order(a: Feed, b: Feed) {
//      if (a.updateTs < b.updateTs) {
//         return 1;
//     } else if (a.updateTs > b.updateTs) {
//         return -1;
//     }
//      return 0;
//  }



