// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvxglXs_MKBfzLPB4pquuqUrRDlhd8Eyo',
  authDomain: 'netflix-6d700.firebaseapp.com',
  projectId: 'netflix-6d700',
  storageBucket: 'netflix-6d700.appspot.com',
  messagingSenderId: '961039138000',
  appId: '1:961039138000:web:a10d9b74f3f352338332d5',
  measurementId: 'G-M9XF93SEQP'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
