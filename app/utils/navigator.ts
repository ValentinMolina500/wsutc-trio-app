import { Frame, Page, getFrameById } from "tns-core-modules/ui/frame";
import pages, { Pages } from "~/utils/pages";
import Authentication from "./authentication";
import { NavigationEntry } from "tns-core-modules/ui/frame";
/**
 * Handles navigating between pages
 */
export class Navigator {
    private frame: Frame;
    public navigateFrame(to: Pages) {
        let frame = Frame.topmost();
        frame.navigate(pages.get(to).path);
    }

    public async navigate(to: Pages, page: Page) {
        let targetPage = pages.get(to);
        if (to == Pages.LOGIN) {
            this.navigateToLogin();
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
    public navigateToLogin() {
        let frame = Frame.getFrameById("top-frame");
        const navigationEntry: NavigationEntry = {
            moduleName: pages.get(Pages.LOGIN).path,
            clearHistory: true
        };
        frame.navigate(navigationEntry);
    }
    public navigateToHome() {
        const frame = getFrameById("top-frame");
        const navigationEntry: NavigationEntry = {
            moduleName: pages.get(Pages.HOME).path,
            clearHistory: true
        };
        frame.navigate(navigationEntry);
    }
    
    public requestNavigateToBack() {
        let frame = Frame.topmost();
        frame.goBack();
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

    public navigateFrameWithContext(to: Pages, context: any): void {
        Frame.topmost().navigate({
            moduleName: pages.get(to).path,
            context: context,
        })
    }
}



const singleton = new Navigator();

export default singleton;