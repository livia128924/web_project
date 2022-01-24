import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCysa1xFs8KYmtJ5hHlKoUSiClzfxLYR7E",
    authDomain: "landingpage-c56e7.firebaseapp.com",
    projectId: "landingpage-c56e7",
    storageBucket: "landingpage-c56e7.appspot.com",
    messagingSenderId: "978039557826",
    appId: "1:978039557826:web:aa68e3c3d20b267525355b",
    measurementId: "G-2H5GY58GXM"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);