import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
   if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      document.getElementById("user_div ").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      window.alert("ถูกละมั้ง")
      const uid = user.uid;
    // ...
  }else {
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      // User is signed out
      // ...
      window.alert("ถูกละมั้ง")
  }
});

function login() {

  let userEmail = document.getElementById("email_field").value;
  let userPass = document.getElementById("password_field").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

    window.alert("Error : " + errorMessage)
  });

}