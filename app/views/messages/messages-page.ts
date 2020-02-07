import { EventData, Page, Color } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { ListView, ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { Frame } from "tns-core-modules/ui/frame/frame";

export function onLoaded(args: EventData): void {
    let page = <Page>args.object;
    page.bindingContext = fromObject({
        messages: [
            {
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/20"
            },
            {
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/20"
            },
            {
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/20"
            },
            {
            name: "Stassia Feltes",
            recentMessage: "Hello, I am contacting you for your Semester Visit",
            date: "2/3/20"
            },
        ],
        onItemTap: function(args: ItemEventData) {
            Frame.topmost().navigate("~/views/messages/direct-message-page/direct-message-page")
        }
    });

    let feed = <ListView>page.getViewById("feed");
    feed.separatorColor = new Color('#eff0f2');
}