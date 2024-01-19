import { setDoc, doc } from "@firebase/firestore";
import { database } from '../firebase';
// import 'firebase/firestore';

export class FirestoreService {
    constructor(userId) {
        this.userDoc = doc(database, 'WebUsers/' + userId);
    }
    async creatUser(newData) {
        const resVal = { isSuccess: false, failed: '' };
        try {
            await setDoc(this.userDoc, newData);
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