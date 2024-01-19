import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from '../firebase';
import { FirestoreService, fService } from "./user_service";

class CurrentUser {
    constructor(email, username, imageUrl, uid) {
        this.email = email;
        this.username = username;
        this.imageUrl = imageUrl;
        this.uid = uid;
    }
}

class AuthService {
    async sigin(email, password) {
        const resVal = { isSuccess: false, failed: '' };
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password);
            let user = userCredential.user;
            const newUser = new CurrentUser(user.email, user.displayName, user.photoURL, user.uid);
            console.log(newUser);
            resVal.isSuccess = true;
            resVal.failed = '';
            return resVal;
        } catch (error) {
            alert(error);
            resVal.isSuccess = false;
            resVal.failed = error;
            return resVal;
        }
    }
    
    async signup(email, password, newData) {
        const resVal = { isSuccess: false, failed: '' };
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            let user = userCredential.user;
            const newUser = new CurrentUser(user.email, user.displayName, user.photoURL, user.uid);
            const firestore = new FirestoreService(newUser.uid);
            await firestore.creatUser(newData);
            // console.log(newUser);
            // console.log("User data props"+newData);
            resVal.isSuccess = true;
            resVal.failed = '';
            return resVal;
        } catch (error) {
            alert(error);
            resVal.isSuccess = false;
            resVal.failed = error;
            return resVal;
        }
    }

    // async googleSignin() {
    //     try {
    //         let userCredential = await (googleSignin);
    //         let user = userCredential.user;
    //         new CurrentUser(user.email, user.displayName, user.photoURL, user.uid);
    //         return true;
    //     } catch (error) {
    //         alert();
    //         return false;
    //     }
    // }
    async signout() {
        try {
            await signOut(auth);
        } catch (error) {
            alert("Failed to sign out");
        }
    }
}

const currentUser = new CurrentUser();
const authService = new AuthService();

// export const user = {...currentUser};
export { currentUser, authService }