// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe_059iDsKxdiE2f6mt-IGsSbMf2F02UE",
  authDomain: "let-chat-web-app-cda5d.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-cda5d-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-cda5d",
  storageBucket: "let-chat-web-app-cda5d.appspot.com",
  messagingSenderId: "154661682185",
  appId: "1:154661682185:web:0fe4b71151241391c2ccd8"
};
  
  firebase.initializeApp(firebaseConfig);

  User_name =localStorage.getItem("User_name");
document.getElementById("User_name").innerHTML="Welcome " + User_name + "!";

function add_room(){
     room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"Adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - "+ Room_names);
row="<div class='room_name' id="+Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
});});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_room.html";
}
function logout(){
  localStorage.removeItem("User_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}