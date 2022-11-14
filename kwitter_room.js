
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAp6TpkGLjaahuCinr9ghFZdwDhhInwxbM",
      authDomain: "kwitter-21303.firebaseapp.com",
      databaseURL: "https://kwitter-21303-default-rtdb.firebaseio.com",
      projectId: "kwitter-21303",
      storageBucket: "kwitter-21303.appspot.com",
      messagingSenderId: "825412571325",
      appId: "1:825412571325:web:120b515081c0799ca727d4"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome "+username+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names)
row = "<div class='room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)' >#" + Room_names +" </div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("inputroom").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}