import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

const logOut = document.querySelector("#signOut");


onAuthStateChanged(auth, (user) => {
    if (user) {

        const uid = user.uid;
        console.log("User ID ====> ", uid)

    } else {
        window.location = "login.html"
    }
});

logOut.addEventListener("click", () => {

    signOut(auth).then(() => {
        console.log("Sign out successfully");
        window.location = "login.html"
    }).catch((error) => {
        console.log(error)
    });

})
