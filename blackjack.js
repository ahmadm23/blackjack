
var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var canHit = true; //allows player to draw while yourSum <=21

window.onload = function(){
    buildDeck();
    shuffleDeck();
}

function buildDeck(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i <types.length; i++){
        for (let j = 0; j <values.length; j++){
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, then A-D -> K-D, etc
        }
    }
    //console.log(deck);
}

function shuffleDeck(){
    for (let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length); //math.floor gets rid of decimal
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}