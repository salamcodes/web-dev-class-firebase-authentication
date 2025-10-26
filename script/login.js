import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import { auth, provider, gitHubProvider } from "./firebaseconfig.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log(user);
            window.location = "index.html"
        })
        .catch((error) => {

            const errorMessage = error.message;
            console.log(errorMessage)
        });
})

const fgtBtn = document.querySelector("#fgt-btn");

fgtBtn.addEventListener("click", () => {
    sendPasswordResetEmail(auth, prompt("Enter Your Email"))
        .then(() => {
            alert("Password Sent successfully");
        })
        .catch((error) => {

            const errorMessage = error.message;
            console.log(errorMessage)
        });
});

const googleBtn = document.querySelector(".google");
googleBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;
            window.location = "index.html"
            console.log(user, token)

        }).catch((error) => {


            const errorMessage = error.message;

            const email = error.customData.email;
            console.log(errorMessage, email)

        });
})

const gitHub = document.querySelector(".github");
gitHub.addEventListener("click", () => {
    signInWithPopup(auth, gitHubProvider)
        .then((result) => {
            
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user, token);
            window.location = "index.html";
        }).catch((error) => {

            const errorMessage = error.message;
           
            const email = error.customData.email;
            console.log(errorMessage, email)

        });
})



