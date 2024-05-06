import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbXtDfzdoJIPqCP3VnGuRlprcbzRARexc",
  authDomain: "freepath-91fb9.firebaseapp.com",
  projectId: "freepath-91fb9",
  storageBucket: "freepath-91fb9.appspot.com",
  messagingSenderId: "694879015543",
  appId: "1:694879015543:web:984e3f57a64a67b6a7ac72",
  measurementId: "G-JMH0HN8VS7",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
