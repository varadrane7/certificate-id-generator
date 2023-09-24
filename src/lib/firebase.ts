import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(/* your firebase config */);
export const db = getFirestore(app);
export const auth = getAuth(app);
