import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    location.replace("welcome.html")
  }
});


function login(){

  const userEmail = document.getElementById("email").value;
  const userPass = document.getElementById("password").value;

  firebase.auth().signInWIthEmailAndPassword()
  

}
