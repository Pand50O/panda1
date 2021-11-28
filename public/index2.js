// import firebase from "firebase/app";
// import "firebase/auth";
firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      window.alert("alert มาจาก signed in")
      // var uid = user.uid;
    // ...
   } else {
      // User is signed out
      // ...
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      window.alert("alert มาจาก signed out");
  }
});



function login(){

   var userEmail = document.getElementById("email_field").value;
   var userPass = document.getElementById("password_field").value;

   window.alert(userEmail + " " + userPass);

}
