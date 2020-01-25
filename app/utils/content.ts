export interface Content {
    type: ContentType;
    title: string;
    description: string;
    icon: string;
    image?: string;
    timestamp: string;
    area: ContentArea;
    staff: string;
}

export enum ContentType {
    NEWS = "NEWS",
    EVENT = "EVENT"
}

export enum ContentArea {
    CARRER = "Career",
    LIFE = "Life"
}

export interface News extends Content {
    link?: string;
}

export interface Event extends Content {
    date: string;
    location: string;
    time: string;
}


