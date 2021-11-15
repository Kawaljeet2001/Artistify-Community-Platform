import { initializeApp } from "firebase/app";
import { getStorage , ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA6WJNjBeS1XMN9jxzOULqxAA5MXkfIRf8",
    authDomain: "artistifycommunity.firebaseapp.com",
    projectId: "artistifycommunity",
    storageBucket: "artistifycommunity.appspot.com",
    messagingSenderId: "1028549383732",
    appId: "1:1028549383732:web:08ffe6132e01a8c6779c61"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);
  export const avatarStorageRef = ref(storage , 'avatar');
