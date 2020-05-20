import { Cache } from "tns-core-modules/ui/image-cache";
import { fromNativeSource } from "tns-core-modules/image-source";
const cache = new Cache();
export class ImageCache {

    public async getImageByUrl(url) {
        let image = await this.cacheGetImage(url);
        return image;
    }

    public cacheGetImage(url: string): Promise<string> {
        cache.maxRequests = 5;
      
        return new Promise(function(resolve, reject) {
            cache.enableDownload();
            let cachedImageSource;
            const myImage = cache.get(url);
            if (myImage) {
                cachedImageSource = fromNativeSource(myImage);
                resolve(cachedImageSource);
            } else {
                cache.push({
                    key: url,
                    url: url,
                    completed: (image, key) => {
                        if (url === key) {
                            cachedImageSource = fromNativeSource(image);
                            resolve(cachedImageSource);
                        }
                    }
                });
            }
            cache.disableDownload();
        });
    }
}

let singleton = new ImageCache();

export default singleton;