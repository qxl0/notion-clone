import exp from 'constants';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHAkDLIDStEgiZrz9SmT_g-AaN0WOzcC4",
  authDomain: "notion-clone-44ed6.firebaseapp.com",
  projectId: "notion-clone-44ed6",
  storageBucket: "notion-clone-44ed6.appspot.com",
  messagingSenderId: "724781042679",
  appId: "1:724781042679:web:1e0573858e66d138c1bcf2",
  measurementId: "G-Q4W44D3017"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };