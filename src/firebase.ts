import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8HwpgLBS-kGrG27wZuFyEKuDrB-qMsaw",
  authDomain: "ieeene.firebaseapp.com",
  projectId: "ieeene",
  storageBucket: "ieeene.appspot.com",
  messagingSenderId: "1072927120068",
  appId: "1:1072927120068:web:745ec57934857bc3e98791",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
