import { Observable } from "tns-core-modules/ui/page";
import { fromObject } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";

const vids = [
    {
        thumbnail: "~/imgs/wsutc-campus.jpg",
        title: "Take a Virtual Tour of WSUTC!",
        timestamp: "Posted on 6/01/2020 @ 7:58AM",
        bookmarked: true,
    },
    {
        thumbnail: "~/imgs/college.jpg",       
        title: "Essential Career Tips & Tricks",
        timestamp: "Posted on 6/07/2020 @ 12:00PM",
        bookmarked: false,  
    },
    {
        thumbnail: "~/imgs/career.jpg",         
        title: "Common Courtesy at Networking Events",
        timestamp: "Posted on 6/11/2020 @ 3:50PM",
        bookmarked: true   
    },
]
export function onLoaded(args) {
    const page = args.object;

    page.bindingContext = fromObject({
        videos: vids,
        onVideoTap: (args) => {
            console.log(args.index);
            console.log(vids[args.index]);
            Frame.topmost().navigate({
                moduleName: "~/views/videos/video-viewer-page/video-viewer-page",
                context: {
                    video: vids[args.index]
                }
            });
        }
    })
}