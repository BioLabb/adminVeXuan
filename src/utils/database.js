// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import 'firebase/auth';
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: "https://danh-sach-ve-xuan-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: "G-G74J67EYX1",
// };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB48iWUbd1YRfVkcvYYuNcnHy_oDV_Bn-4",
//   authDomain: "data-95e83.firebaseapp.com",
//   databaseURL: "https://data-95e83-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "data-95e83",
//   storageBucket: "data-95e83.appspot.com",
//   messagingSenderId: "180085195221",
//   appId: "1:180085195221:web:ff1f1ecaec226e948f7d5c",
//   measurementId: "G-NS4KJLRTN5"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const store = getFirestore(app);
// export const database = getDatabase(app);
// export const storage = getStorage(app);
// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3A5svGlF_2GHE475DLVtvtAupQHruYGU",
  authDomain: "danh-sach-ve-xuan.firebaseapp.com",
  databaseURL: "https://danh-sach-ve-xuan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "danh-sach-ve-xuan",
  storageBucket: "danh-sach-ve-xuan.appspot.com",
  messagingSenderId: "584641686956",
  appId: "1:584641686956:web:24b4692da000cc92f75e09",
  measurementId: "G-G74J67EYX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const store = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);