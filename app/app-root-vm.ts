import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Auth from "~/utils/authentication";
import Nav from "~/utils/navigator";
import { ObservableProperty } from "~/observable-property-decorator";
import UserSubject from "~/logic/UserSubject";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { Frame } from "tns-core-modules/ui/frame";
import * as app from "tns-core-modules/application";

export default class AppRootViewModel extends Observable {
    @ObservableProperty() listLoad: Promise<boolean> | boolean = false;
    public currentIndex: number;
    public role;

    private static previousMenu: StackLayout;
    public static hideBottomBar(): void {
        let rootView = <GridLayout>app.getRootView();
        let pageContainer = <GridLayout>rootView.getChildAt(1);
        pageContainer.style.visibility = "collapse";
    }

    public static showBottomBar(): void {
        let rootView = <GridLayout>app.getRootView();
        let pageContainer = <GridLayout>rootView.getChildAt(1);
        pageContainer.style.visibility = "visible";
    }
    constructor() {
        super();
        this.currentIndex = 0;
        this.listLoad = true;
        this.validateAuthentication();
    }

    public async validateAuthentication() {
        let auth = await Auth.isAuthenticated();
        console.log("auth", auth);
        this.listLoad = auth;
        if (!auth) {
            Nav.navigateToLogin();
        }

        this.set("role", UserSubject.getRole());
        return auth;
    }

    public setIndex(index: number) {
        this.set("currentIndex", index);
    }

    /**
     * Controls the primary navigation of the application
     * @param args Tapped menu context
     */
    public navigate(args: EventData) {
        let tappedMenu = <StackLayout>args.object;
        let rootView = <GridLayout>app.getRootView();
        let pageContainer = <GridLayout>rootView.getChildAt(1);

        // prevent consecutive navigation to the same page
        if (tappedMenu == AppRootViewModel.previousMenu) {
            return;
        } else {
            AppRootViewModel.previousMenu = tappedMenu;
        }

        // reset formatting
        pageContainer.eachChildView((view) => {
            view.set("class", "bottom-nav-btn");
            return true;
        });

        Frame.topmost().navigate({
            moduleName: `~/views/${tappedMenu.id}/${tappedMenu.id}-page`,
            clearHistory: true,
            animated: true,
            // Set up a transition property on page navigation.
            transition: {
                name: "slide",
                duration: 180,
                curve: "easeIn",
            },
        });
        tappedMenu.set("class", "bottom-nav-btn bottom-nav-btn-active");
    }
}

// const s = new AppRootViewModel();

// export default s;
