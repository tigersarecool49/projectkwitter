
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCgFAPjdrVwF0qxCVHfLj0by0b368suCTA",
      authDomain: "kwitter-460d0.firebaseapp.com",
      projectId: "kwitter-460d0",
      storageBucket: "kwitter-460d0.appspot.com",
      messagingSenderId: "599702901611",
      appId: "1:599702901611:web:dd213adfb5022f50e0322e"
    };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
      function addroom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });
             
            localStorage.setItem("room_name", room_name)
             
            window.location = "kwitter_page.html"
      }
  
      function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
  getData();
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name",name)
        window.location = "kwitter_page.html";
  }