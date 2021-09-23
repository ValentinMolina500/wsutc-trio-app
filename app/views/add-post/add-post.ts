import { AddPostViewModel } from "./add-post-vm";

/* Code behind function referenced in xml */
export function onLoaded(args) {
    const page = args.object;
    page.bindingContext = new AddPostViewModel();
}