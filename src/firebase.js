import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
console.log("************");
const firebaseConfig = {

    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "e- commerce - 5d6b7",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
}
export { db }

