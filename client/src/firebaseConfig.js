import { initializeApp } from "firebase/app";
import { getStorage , ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "artistifycommunity.firebaseapp.com",
    projectId: "artistifycommunity",
    storageBucket: "artistifycommunity.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);
  export const avatarStorageRef = ref(storage , 'avatar');
  