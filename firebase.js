import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyAYd1cWRvihyDoyOI_cCFJ6tRYU8H2a3o0",
        authDomain: "artsy1-ffcec.firebaseapp.com",
        projectId: "artsy1-ffcec",
        storageBucket: "artsy1-ffcec.appspot.com",
        messagingSenderId: "248285558077",
        appId: "1:248285558077:web:635c088bd11991ec4c0154"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);