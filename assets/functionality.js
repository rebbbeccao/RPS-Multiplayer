var config = {
  apiKey: 'AIzaSyCqfjPVbP9lwNmQExbDoAL9IGBTLIFMO3g',
  authDomain: 'rock-paper-scissors-f18ce.firebaseapp.com',
  databaseURL: 'https://rock-paper-scissors-f18ce.firebaseio.com',
  projectId: 'rock-paper-scissors-f18ce',
  storageBucket: 'rock-paper-scissors-f18ce.appspot.com',
  messagingSenderId: '1026016375905'
};
firebase.initializeApp(config);

//========Global Variables =============================================

var database = firebase.database();
var chatData = database.ref('/chat');
var playersRef = database.ref('players');
var currentTurnRef = database.ref('turn');
var username = 'Guest';
var currentPlayers = null;
var currentTurn = null;
var playerNum = false;
var playerOneExists = false;
var playerTwoExists = false;
var playerOneData = null;
var playerTwoData = null;

// firebase.database().ref().on("value", function(snapshot){
//   console.log("snapshot.val()" + snapshot.val());
// });

//=======Start game (username listeners) click function ==========================

$('#start-button').click(function() {
  if ($('#player-name').val() !== '') {
    username = capitalize($('#player-name').val());
    gamePrep();
  }
});

//=======Start game (username listeners) enter keypress function ==========================
$('#player-name').keypress(function(event) {
  if (event.keycode == 13 && $('#player-name').val() !== '') {
    username = capitalize($('#player-name').val());
    gamePrep();
  }
});

// Function to capitalize usernames
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Chat send button listener, grabs input and pushes to firebase. (Firebase's push automatically creates a unique key)
$('#chat-button').on('click', function() {
  if ($('#chat-input').val() !== '') {
    var message = $('#chat-input').val();
    chatData.push({
      name: username,
      message: message,
      time: firebase.database.ServerValue.TIMESTAMP,
      idNum: playerNum
    });

    $('#chat-input').val('');
  }
});

// Chatbox input enter keypress listener
$('#chat-button').keypress(function(event) {
  if (event.keycode == 13 && $('#chat-button') !== '') {
    var message = $('#chat-input').val();
    chatData.push({
      name: username,
      message: message,
      time: firebase.database.ServerValue.TIMESTAMP,
      idNum: playerNum
    });

    $('#chat-input').val('');
  }
});
