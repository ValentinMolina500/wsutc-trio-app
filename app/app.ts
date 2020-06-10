import * as app from "tns-core-modules/application";
import Firebase from "./utils/firebase";
Firebase.init();
app.run({ moduleName: "app-root" });
