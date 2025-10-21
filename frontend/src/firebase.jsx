import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { signInWithPopup } from "firebase/auth"; 
import { GoogleAuthProvider } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyACU6qzo6IheSDPQBKzYLzqNo0jF3rPJmI",
  authDomain: "foodler-6e549.firebaseapp.com",
  projectId: "foodler-6e549",
  storageBucket: "foodler-6e549.firebasestorage.app",
  messagingSenderId: "897932079039",
  appId: "1:897932079039:web:9d76b1458a89a893d5fb0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider()

function GOO(){
  function sign(){
    signInWithPopup(auth,provider).then((res)=>{
      console.log(res.user)
    })

  }
  return(
    <button onClick={sign}>SIGN</button>
  )
}
export default GOO