import { Frame, Page } from "tns-core-modules/ui/frame";
import pages, { Pages } from "~/utils/pages";
/**
 * Handles navigating between pages
 */
export class Navigator {
    private frame: Frame;

    public navigate(to: Pages, page: Page) {
        page.frame.navigate(pages.get(to).path);
    }
}



const singleton = new Navigator();

export default singleton;