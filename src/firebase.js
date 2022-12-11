import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIWJ5Kfy8FLsTKBbViTUN_S-SkwJsjrIM",
  authDomain: "crypto-app-d30db.firebaseapp.com",
  projectId: "crypto-app-d30db",
  storageBucket: "crypto-app-d30db.appspot.com",
  messagingSenderId: "413788288590",
  appId: "1:413788288590:web:a79004a283d6ce4399f51f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;