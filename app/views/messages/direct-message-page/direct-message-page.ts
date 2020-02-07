import { Page, EventData, Color } from "tns-core-modules/ui/page/page";
import { fromObject } from "tns-core-modules/data/observable/observable";
import { ListView } from "tns-core-modules/ui/list-view/list-view";
import { Frame } from "tns-core-modules/ui/frame/frame";

export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = fromObject({
        messages: [
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
            {
                message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
            },
        ]
    });

    let feed = <ListView>page.getViewById("feed");
    feed.separatorColor = new Color('#eff0f2');
}

export function goBack() {
    Frame.topmost().goBack();
}