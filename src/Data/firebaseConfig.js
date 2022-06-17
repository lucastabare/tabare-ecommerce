import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDP_TwQrTB_vcyD6dwteMJuwy3YTdfxzck",
  authDomain: "productcoder-469b8.firebaseapp.com",
  projectId: "productcoder-469b8",
  storageBucket: "productcoder-469b8.appspot.com",
  messagingSenderId: "628871648708",
  appId: "1:628871648708:web:a2ad269b73f4787f25c091",
  measurementId: "G-SM3QFFYF15",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
