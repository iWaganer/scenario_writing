import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEFZ5g8tyn9fvYmtLNt5_X8od6Aa-5Vzs",
  authDomain: "senarioshelf.firebaseapp.com",
  projectId: "senarioshelf",
  storageBucket: "senarioshelf.firebasestorage.app",
  messagingSenderId: "5039457704",
  appId: "1:5039457704:web:45345d69c89c1091d4899d",
  measurementId: "G-LVXL4PKJKJ"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);