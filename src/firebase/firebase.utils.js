import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBj56nTjteeofJSeQTS83BrI5EPCLCkj9E",
    authDomain: "crwn-clothing-602da.firebaseapp.com",
    projectId: "crwn-clothing-602da",
    storageBucket: "crwn-clothing-602da.appspot.com",
    messagingSenderId: "745362219552",
    appId: "1:745362219552:web:534f2b5180c47a7f021245"
  };

export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();


    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
        console.log('error creating user', error.message);
    }
   }

   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
