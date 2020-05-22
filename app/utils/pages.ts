export interface PageEntry {
    path: string;
    secure: boolean;
}
export enum Pages {
    LOGIN = "LOGIN",
    HOME = "HOME",
    FEED = "FEED",
    SETTINGS = "SETTINGS",
    STAFF_DETAILS = "STAFF_DETAILS",
    DIRECT_MESSAGES = "DIRECT_MESSAGES"
}

const pages: Map<Pages, PageEntry> = new Map();

pages.set(Pages.LOGIN, { path: "~/views/login/login-page", secure: false });
pages.set(Pages.HOME, { path: "~/views/home/home-page", secure: true });
pages.set(Pages.FEED, { path: "~/views/feed/feed-page", secure: true });
pages.set(Pages.SETTINGS, { path: "~/views/settings/settings-page", secure: true});
pages.set(Pages.STAFF_DETAILS, { path: "~/views/staff/staff-details/staff-details-page", secure: true });
pages.set(Pages.DIRECT_MESSAGES, { path: "~/views/messages/direct-message-page/direct-message-page", secure: true });

export default pages;

