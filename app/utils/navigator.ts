import { Frame, Page, getFrameById } from "tns-core-modules/ui/frame";
import pages, { Pages } from "~/utils/pages";
/**
 * Handles navigating between pages
 */
export class Navigator {
    private frame: Frame;

    public navigate(to: Pages, page: Page): void {
        if (to == Pages.LOGIN) {
            let frame = Frame.getFrameById("top-frame");
            frame.navigate(pages.get(to).path);
        } else {
            page.frame.navigate(pages.get(to).path);
        }
    }

    public navigateContext(to: Pages, page: Page, context: any): void {
        page.frame.navigate({
            moduleName: pages.get(to).path,
            context: context,
            transition: {
                name: "slideTop"
            }
        })
    }
}



const singleton = new Navigator();

export default singleton;