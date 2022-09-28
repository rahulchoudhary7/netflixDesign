import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ebiEVYP5YkhWY9wcKEzawd0CraAx178",
  authDomain: "netflixredesign-b264a.firebaseapp.com",
  projectId: "netflixredesign-b264a",
  storageBucket: "netflixredesign-b264a.appspot.com",
  messagingSenderId: "741234225617",
  appId: "1:741234225617:web:0593e2fc4b67a0d9d170f0"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }