import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDBY2g_mX0v19aobMyVBSpL3iPplS_cQ4I",
    authDomain: "crwn-db-74.firebaseapp.com",
    projectId: "crwn-db-74",
    storageBucket: "crwn-db-74.appspot.com",
    messagingSenderId: "985988243972",
    appId: "1:985988243972:web:e358fc86622227c8b30b51",
    measurementId: "G-J9SK09BNN3"
};

export const createUserProfileDocument = async(userAuth, data) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
        } catch (error) {
            console.log('error creating users', error.message)
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;