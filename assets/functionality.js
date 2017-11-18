$(document).ready(function(){
    var config = {
    apiKey: "AIzaSyCuhkTPfcloQ_ou6IpkUzI21JoQNvTgQRU",
    authDomain: "rps-multiplayer-7c646.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-7c646.firebaseio.com",
    projectId: "rps-multiplayer-7c646",
    storageBucket: "rps-multiplayer-7c646.appspot.com",
    messagingSenderId: "643186278795"
    };
    firebase.initializeApp(config);

//========Global Variables =============================================

var Players = "";
var player = {
  name: "",
  number: ""
};
var playerArray = [];

  
// firebase.database().ref().on("value", function(snapshot){
//   console.log("snapshot.val()" + snapshot.val());
// });   

//=======Start game (add name) click function ==========================

  $('#start-button').click(function() {
      console.log("click");

  //===========capture player name input =============================

    var playerName = document.getElementById("player-name").value;
      console.log(playerName);

  //push player name into the player array;
    
      playerArray.push(playerName);
      console.log(playerArray);


  //===update player object w inputted player name/index ===================

    // var index = playerArray.indexof();

     player['name'] = playerName; 

     // player['number'] = index;
    console.log(player);

    firebase.database().ref().set({
      Players:playerName


    });



  });

});
