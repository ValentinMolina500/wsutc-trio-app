import { Observable } from "tns-core-modules/ui/page";
import { fromObject } from "tns-core-modules/data/observable";

export function onLoaded(args) {
    const page = args.object;

    page.bindingContext = fromObject({
        videos: [
            {
                thumbnail: "~/imgs/wsutc-campus.jpg",
                title: "Take a Virtual Tour of WSUTC!",
                timestamp: "Posted on 6/01/2020 @ 7:58AM"
                
            },
            {
                thumbnail: "~/imgs/college.jpg",       
                title: "Essential Career Tips & Tricks",
                timestamp: "Posted on 6/07/2020 @ 12:00PM"   
            },
            {
                thumbnail: "~/imgs/career.jpg",         
                title: "Common Courtesy at Networking Events",
                timestamp: "Posted on 6/11/2020 @ 3:50PM"    
            },
           

        ]
    })
}