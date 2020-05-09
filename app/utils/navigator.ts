import { Frame, Page, getFrameById } from "tns-core-modules/ui/frame";
import pages, { Pages } from "~/utils/pages";
import Authentication from "./authentication";
/**
 * Handles navigating between pages
 */
export class Navigator {
    private frame: Frame;
    // private currentPage: Page;
    public navigateFrame(to: Pages) {
        let frame = Frame.topmost();
        frame.navigate(pages.get(to).path);
    }

    public async navigate(to: Pages, page: Page) {
        let targetPage = pages.get(to);
        if (to == Pages.LOGIN) {
            let frame = Frame.getFrameById("top-frame");
            frame.navigate(targetPage.path);
        } else if (targetPage.secure) {
            {
                let authenticated = await Authentication.isAuthenticated();
                if (authenticated) {
                    page.frame.navigate(targetPage.path);
                }
            }
        } else {
            page.frame.navigate(targetPage.path);
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

    // public setCurrentPage(page: Page) {
    //     this.currentPage = page;
    // }

    // public getCurrentPage(page: Page) {
    //     return this.currentPage;
    // }
}



const singleton = new Navigator();

export default singleton;