// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {addDoc, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4EwR0Un-EqFO4ejlFqZgp1z961-NgRfg",
  authDomain: "artsy-291ef.firebaseapp.com",
  projectId: "artsy-291ef",
  storageBucket: "artsy-291ef.appspot.com",
  messagingSenderId: "463656415337",
  appId: "1:463656415337:web:fc42370f873cdff0c0b2f8",
  measurementId: "G-YBVRB9BT28"
};

const colRef = collection(db, 'shipping')

const addShippingDetails = document.querySelector('.add')
addShippingDetails.addEventListener('submit', (e)=>{
    e.preventDefault()
    addDoc(colRef, {
        email: addShippingDetails.email.value,
        fullname: addShippingDetails.fullname.value,
        wallet: addShippingDetails.wallet.value,
        number: addShippingDetails.number.value,
        code: addShippingDetails.code.value

    })
    .then(()=>{
        addShippingDetails.reset()
    })
})
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()