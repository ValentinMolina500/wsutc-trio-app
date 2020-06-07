import { Observable, EventData, Page } from "tns-core-modules/ui/page/page";
import Nav from "~/utils/navigator";
import { Pages } from "~/utils/pages";
import Auth from "~/utils/authentication";
import Store from '~/store/store';//store adapter
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as imagepicker from "nativescript-imagepicker";
import * as camera from "nativescript-camera";
import firebase from "../../utils/firebase";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";

class SettingsPage extends Observable {
	private homeViewModel;
    public currentUser = {};

    constructor() {
        super();
		this.homeViewModel = Store.getHomeViewModel();
    }

    public logout(args: EventData) {
        let button = <Page>args.object;
        let page = button.page;
        Auth.logout();

        //setTimeout(()=>{
           // this.homeViewModel.setIndex(0); 
        //},50)
		Nav.navigateToLogin();
    }

    public updateCurrentUser(user) {
        this.set("name", user.name);
        this.set("email", user.email);
        this.set("wsuId", user.wsuId);
        this.set("role", user.role);
        this.set("image", user.image);
    }

    public changeProfilePicture() {
        dialogs.action({
            title: "Change Profile Picture",
            message: "Choose from camera roll or take a new one",
            actions: ["Take a Photo", "Camera Roll"],
            cancelButtonText: "Cancel",
            cancelable: true
        })
        .then((result) => {
            if (result == "Take a Photo") {
               this.handleTakePhoto();
            } else if (result == "Camera Roll") {
                this.handleChooseImage();
            } else {
                return;
            }
        });
    }

    private handleTakePhoto() {
        camera.requestCameraPermissions()
            .then(
                () => {
                    camera.takePicture({
                        keepAspectRatio: true,
                        width: 100,
                        height: 100
                    })
                        .then((imageAsset) => {
                            firebase.uploadProfilePicture(imageAsset)
                                .then((url) => {
                                    this.set("image", url);
                                    firebase.updateProfilePicture(url);
                                })
                        })
                }
            )
    }

    private handleChooseImage() {
        let context = imagepicker.create({ mode: "single", mediaType: imagepicker.ImagePickerMediaType.Image})

        context.authorize()
            .then(() => {
                return context.present();
            })
            .then((selection: ImageAsset[]) => {
                firebase.uploadProfilePicture(selection[0])
                    .then((url) => {
                        this.set("image", url);
                        firebase.updateProfilePicture(url);
                    })
            })
            
    }
}
let s = new SettingsPage();

export default s;