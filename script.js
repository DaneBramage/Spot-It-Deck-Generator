// RETURNS A RANDOM NUMBER BETWEEN MIN (INCLUSIVE) AND MAX (EXCLUSIVE)
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//console.log(randNum(50, 100)); // generates a random number between 50-100

// CHECK A SINGLE ARRAY FOR EXISTENCE OF AN INPUT NUMBER WITHIN IT
function checkDupes(inputArray, inputNumber) {
  var dupesPresent = false;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == inputNumber) {
      dupesPresent = true;
    }
  }
  return dupesPresent;
}

// COMPARE TWO ARRAYS AND CHECK FOR NUMBER OF DUPLICATES
function checkArrayDupes(inputArray1, inputArray2) {
  var dupesPresent = 0;
  for (var i = 0; i < inputArray1.length; i++) {
    for (var j = 0; j < inputArray1.length; j++) {
      if (inputArray1[i] == inputArray2[j]) {
        dupesPresent++;
      }
    }
  }
  return dupesPresent;
}

// CREATE A NEW ARRAY OF UNIQUE NUMBERS WITH SPECIFIED LENGTH AND NUMBER RANGE
function generateCard(numItems, minVal, maxVal) {
  if ((maxVal - minVal) < numItems - 1) {
    console.log("Error, value range insufficient");
    return "Error, value range insufficient";
  }
  var newCard = [];
  var newItem = randNum(minVal, maxVal);
  while (newCard.length < numItems) {
    if ((checkDupes(newCard, newItem)) == false) {
      newCard.push(newItem);
      // console.log("New item added: " + newItem);
    }
    newItem = randNum(minVal, maxVal);
  }
  return newCard;
}

// BUILD A DECK OF CARDS
function buildDeck(numOfCards) {
  var failedAttempts = 0;
  var cardDeck = [];
  var newCard = generateCard(12, 0, 60); // SPOT IT! HAS 8 SYMBOLS PER CARD, 57 SYMBOLS IN LIBRARY
  // var cardObject = {}; // FOR DATA SET RECORDING
  // cardObject.card = newCard; // FOR DATA SET RECORDING
  // createRecord("Spot It Deck", cardObject, function(record) {console.log("card added to data set")}); // FOR DATA SET RECORDING
  cardDeck.push(newCard);
  console.log("new card added: " + newCard);
  var newCardIsGood = false;
  while (cardDeck.length < numOfCards) {
    for (var i = 0; i < cardDeck.length; i++) {
      if (checkArrayDupes(cardDeck[i], newCard) == 2) {
        newCardIsGood = true;
      }
      else {
        newCardIsGood = false;
        //console.log("bad card, breaking");
        failedAttempts++;
        break;
      }
    }
    if (newCardIsGood == true) {
      cardDeck.push(newCard);
      console.log("new card added: " + newCard);
      // var cardObject = {}; // FOR DATA SET RECORDING
      // cardObject.card = newCard; // FOR DATA SET RECORDING
    }
    newCard = generateCard(12, 0, 60); // SPOT IT! HAS 8 SYMBOLS PER CARD, 57 SYMBOLS IN LIBRARY
    newCardIsGood = false;
  }
  console.log("Failed attempts: " + failedAttempts);
  return cardDeck;
}

var myDeck = buildDeck(14); // SPOT IT! HAS 55 CARDS

console.log(myDeck);