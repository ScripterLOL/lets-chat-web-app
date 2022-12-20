//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCI5bgwH_BGWywYhYvTKKcSchxKlgNXXYc",
      authDomain: "kwitter-58f92.firebaseapp.com",
      databaseURL: "https://kwitter-58f92-default-rtdb.firebaseio.com",
      projectId: "kwitter-58f92",
      storageBucket: "kwitter-58f92.appspot.com",
      messagingSenderId: "143370110252",
      appId: "1:143370110252:web:9da453839b3193093c5889"
    };
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{

      msg = document.getElementById('msg').value;
      firebase.database().ref(room_name).push({
name: user_name,
message:msg,
like:0
 });
document.getElementById('msg').value = "";
}
//End code
      } });  }); }
getData();
