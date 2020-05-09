import { RegisterPage } from "./register-page-vm";

export function onLoaded(args) {
	let page = args.object;

	page.bindingContext = new RegisterPage();
}