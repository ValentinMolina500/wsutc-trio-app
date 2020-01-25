export interface PageEntry {
    path: string;
}

export enum Pages {
    LOGIN = "LOGIN",
    HOME = "HOME",
    FEED = "FEED",
    SETTINGS = "SETTINGS",
    STAFF_DETAILS = "STAFF_DETAILS"
}

const pages: Map<Pages, PageEntry> = new Map();

pages.set(Pages.LOGIN, { path: "~/views/login/login-page" });
pages.set(Pages.HOME, { path: "~/views/home/home-page "});
pages.set(Pages.FEED, { path: "~/views/feed/feed-page "});
pages.set(Pages.SETTINGS, { path: "~/views/settings/settings-page "});
pages.set(Pages.STAFF_DETAILS, { path: "~/views/staff/staff-details/staff-details-page"});


export default pages;

