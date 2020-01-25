export interface Content {
    type: ContentType;
}

export enum ContentType {
    NEWS = "NEWS",
    EVENTS = "EVENTS"
}

export interface News extends Content {
    title: string;
    image: string;
}


