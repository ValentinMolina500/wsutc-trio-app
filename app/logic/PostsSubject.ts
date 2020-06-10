import firebase from "~/utils/firebase";
import { BaseArray } from '~/models/base-array';
import { newImageCacheFeedFactory } from "~/models/feed";

class PostsSubject {
    public observers = [];
    public posts = new BaseArray<any>();
    public listeners = []; 
    public isSet = false;
    public wsuId = "";

    public register(observer) {
		this.observers.push(observer);
    }
    
    public notifyObservers(): void {
        this.observers.forEach((o) => {

            o.updatePosts(this.posts);
        })
    }

    public setPosts() {
        if (this.isSet) return;

        this.isSet = true;
        let callback = async (result) => {
            let post = await newImageCacheFeedFactory(result, this.wsuId);

            if (result.type == "ChildChanged") {
                for (let i = 0; i < this.posts.length; i++) {
                    if (this.posts.getItem(i).postId == post.postId) {
                        this.posts.getItem(i).update(post, this.wsuId);
                    }
                }
            } else {
                this.posts.push(post);
            }
            console.log(result.type);
        
            
            this.notifyObservers();
        }

        firebase.addChildEventListener(callback, "/posts/");

    }

    public updateCurrentUser(user) {
        this.wsuId = user.wsuId;
    }
}

const s = new PostsSubject();

export default s;