import { LoadingIndicator, Mode } from "@nstudio/nativescript-loading-indicator";

class Dialogs {
	private loader: LoadingIndicator;
	private loaderOptions;

	constructor() {
		this.loader = new LoadingIndicator();
		this.loaderOptions = {
			message: 'Loading...',
   			progress: 0.99,
   			margin: 10,
   			dimBackground: true,
   			color: '#981e32', // color of indicator and labels
   			// background box around indicator
   			// hideBezel will override this if true
   			backgroundColor: 'yellow',
   			userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
   			hideBezel: true, // default false, can hide the surrounding bezel
   			mode: Mode.Indeterminate, // see options below
		}
	}

	public showLoader(): void {
		this.loader.show(this.loaderOptions);
	}

	public hideLoader(): void {
		this.loader.hide();
	}
};

const dialogs = new Dialogs();

export default dialogs;