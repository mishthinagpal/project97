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

User_name=localStorage.getItem("User_name");
    room_name=localStorage.getItem("room_name");

    function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:User_name,
      message:msg,
    
});
document.getElementById("msg").value="";


    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
name_with_tag ="<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
span_with_tag = "<span></span><hr>";




row=name_with_tag + message_with_tag + span_with_tag;
document.getElementById("output").innerHTML=row;
     } });  }); }
getData();



function logout(){
     localStorage.removeItem("User_name");
     localStorage.removeItem("room_name");
     window.location="index.html";
   }

