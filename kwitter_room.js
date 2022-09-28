
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAT6caAwRNxPE0906zkkHa0BIIb7J89VNw",
      authDomain: "c94practice-d2423.firebaseapp.com",
      databaseURL: "https://c94practice-d2423-default-rtdb.firebaseio.com",
      projectId: "c94practice-d2423",
      storageBucket: "c94practice-d2423.appspot.com",
      messagingSenderId: "798866375596",
      appId: "1:798866375596:web:b65bf068b9a39fbb4d7009"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
