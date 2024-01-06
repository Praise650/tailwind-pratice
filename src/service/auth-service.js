import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from '../firebase';

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
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password);
            let user = userCredential.user;
            new CurrentUser(user.email, user.displayName, user.photoURL, user.uid);
            return true;
        } catch (error) {
            alert();
            return false;
        }
    }
    async signup(email, password) {
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            let user = userCredential.user;
            new CurrentUser(user.email, user.displayName, user.photoURL, user.uid);
            return true;
        } catch (error) {
            alert();
            return false;
        }
    }

    async googleSignin() {
        try {
            let userCredential = await googleSignin();
            let user = userCredential.user;
            new CurrentUser(user.email, user.displayName, user.photoURL, user.uid);
            return true;
        } catch (error) {
            alert();
            return false;
        }
    }
    async signout() {
        try {
            await signOut(auth);
        } catch (error) {
            alert("Failed to sign out");
        }
    }
}

const currentUser = CurrentUser();
const authService = AuthService();

// export const user = {...currentUser};
export { currentUser, authService }