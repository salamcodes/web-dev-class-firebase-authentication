// Import the functions you need from the SDKs you need
  import { initializeApp  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import {getAuth ,GoogleAuthProvider ,GithubAuthProvider} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js"

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAPYJqIKnAckJUUgEGHcQW_fFRux505NJU",
    authDomain: "login-authentication-8dbb6.firebaseapp.com",
    projectId: "login-authentication-8dbb6",
    storageBucket: "login-authentication-8dbb6.firebasestorage.app",
    messagingSenderId: "624359064731",
    appId: "1:624359064731:web:26c71e2541efe53880b23e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const provider = new GoogleAuthProvider();
  export const gitHubProvider = new GithubAuthProvider();
