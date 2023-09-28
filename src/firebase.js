import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAT8zRwBVvGlAakyMCSpX3olh2JVTBcj2k",
  authDomain: "chat-52c34.firebaseapp.com",
  projectId: "chat-52c34",
  storageBucket: "chat-52c34.appspot.com",
  messagingSenderId: "903416770059",
  appId: "1:903416770059:web:570f8203aac2ef7cf0a10e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
