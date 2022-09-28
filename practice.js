// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT6caAwRNxPE0906zkkHa0BIIb7J89VNw",
    authDomain: "c94practice-d2423.firebaseapp.com",
    databaseURL: "https://c94practice-d2423-default-rtdb.firebaseio.com",
    projectId: "c94practice-d2423",
    storageBucket: "c94practice-d2423.appspot.com",
    messagingSenderId: "798866375596",
    appId: "1:798866375596:web:b65bf068b9a39fbb4d7009"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}