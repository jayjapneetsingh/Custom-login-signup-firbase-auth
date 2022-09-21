import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkMrEQXlE6w1YWqDHgZCMFGmlIZSbU_bU",
  authDomain: "vue-fire-auth-yt-e0ed3.firebaseapp.com",
  projectId: "vue-fire-auth-yt-e0ed3",
  storageBucket: "vue-fire-auth-yt-e0ed3.appspot.com",
  messagingSenderId: "1002695116303",
  appId: "1:1002695116303:web:af8748fb3c6fad8c75857a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }