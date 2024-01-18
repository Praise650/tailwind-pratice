import { setDoc, doc} from "@firebase/firestore";
import { database } from '../firebase';
// import 'firebase/firestore';

export class FirestoreService {
    constructor(userId) {
        this.userDoc = doc(database, 'Users/'+userId);
    }
    async creatUser({userData}) {
        // const {fullName, email, country, state, phoneNumber} = userData;
        const resVal = { isSuccess: false, failed: '' };
        console.log("UserData to be pushed: " + userData)
        // const userData = {
        //     'fullName': fullName,
        //     'email': email,
        //     'country': country,
        //     'state': state,
        //     'phoneNumber': phoneNumber,
        // };
        try {
            await setDoc(this.userDoc, userData);
            database.collection.doc()
            // const newUser = new CurrentUser(user.email, user.displayName, user.photoURL, user.uid);
            // console.log(newUser);
            resVal.isSuccess = true;
            resVal.failed = '';
            return resVal;
        } catch (error) {
            resVal.isSuccess = false;
            resVal.failed = error;
            alert(error);
            return resVal;
        }
    }

}

// const fService = new FirestoreService();

// // export const user = {...currentUser};
// export { fService }