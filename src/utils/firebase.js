import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ1IzNZ-HoQMwqSQOJSfUelMtOagSJVCQ",
  authDomain: "netflixgpt-1d057.firebaseapp.com",
  projectId: "netflixgpt-1d057",
  storageBucket: "netflixgpt-1d057.appspot.com",
  messagingSenderId: "490436340033",
  appId: "1:490436340033:web:c9d7c25bef855b711299c0",
  measurementId: "G-01G7SYKR0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

