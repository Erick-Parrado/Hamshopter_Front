import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbuVRtDT8ewKGl_Bbc5q9SeibfMHmsub4",
    authDomain: "hamshopter.firebaseapp.com",
    projectId: "hamshopter",
    storageBucket: "hamshopter.firebasestorage.app",
    messagingSenderId: "482589018973",
    appId: "1:482589018973:web:fc74118d14a49ababe36b4"
}

const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

export default db