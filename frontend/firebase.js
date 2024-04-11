import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmfKK6YbAnh3LIHcEPc3WrLePd4xzne2Q",
  authDomain: "chatterbox-4fc61.firebaseapp.com",
  projectId: "chatterbox-4fc61",
  storageBucket: "chatterbox-4fc61.appspot.com",
  messagingSenderId: "133615862970",
  appId: "1:133615862970:web:f50bc0cb625fe0aeb7ee83",
  measurementId: "G-SYQS7FW1CF"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)