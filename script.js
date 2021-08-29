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
  var newCard = generateCard(12, 0, 63); // SPOT IT! HAS 8 SYMBOLS PER CARD, 57 SYMBOLS IN LIBRARY
  // var cardObject = {}; // FOR DATA SET RECORDING
  // cardObject.card = newCard; // FOR DATA SET RECORDING
  // createRecord("Spot It Deck", cardObject, function(record) {console.log("card added to data set")}); // FOR DATA SET RECORDING
  cardDeck.push(newCard);
  // console.log("new card added: " + newCard);
  
  // START WITH EXISTING DECK INSTEAD
  
  var cardDeck =  [ [ 2, 4, 14, 59, 13, 30, 29, 55, 47, 50, 26, 43 ],
  [ 10, 27, 25, 55, 16, 57, 50, 31, 35, 58, 32, 8 ],
  [ 34, 2, 60, 38, 48, 25, 1, 29, 57, 7, 62, 21 ],
  [ 56, 57, 44, 23, 46, 2, 6, 33, 35, 12, 47, 39 ],
  [ 30, 10, 22, 19, 12, 51, 56, 26, 7, 16, 60, 52 ],
  [ 11, 27, 33, 29, 28, 0, 12, 26, 24, 58, 37, 21 ],
  [ 19, 57, 4, 17, 18, 1, 9, 22, 11, 55, 33, 20 ],
  [ 27, 34, 15, 39, 8, 43, 19, 3, 20, 62, 6, 26 ],
  [ 7, 50, 6, 5, 22, 17, 34, 13, 31, 37, 46, 28 ],
  [ 6, 4, 0, 59, 54, 48, 25, 52, 27, 56, 17, 45 ],
  [ 10, 41, 28, 45, 36, 62, 9, 5, 57, 59, 44, 26 ],
  [ 45, 35, 22, 27, 40, 44, 42, 51, 29, 13, 1, 15 ],
  [ 55, 31, 4, 21, 56, 40, 53, 23, 28, 51, 62, 3 ],
  [ 9, 53, 56, 15, 37, 34, 59, 14, 60, 35, 58, 18 ],
  [ 34, 32, 33, 16, 5, 30, 4, 49, 15, 21, 44, 54 ],
  [ 0, 34, 51, 61, 14, 13, 33, 10, 36, 25, 20, 23 ],
  [ 29, 18, 40, 25, 5, 17, 30, 39, 53, 8, 36, 12 ],
  [ 54, 31, 0, 12, 50, 53, 60, 44, 41, 20, 43, 1 ],
  [ 41, 27, 51, 55, 14, 60, 5, 39, 48, 49, 46, 11 ],
  [ 10, 12, 48, 46, 4, 18, 61, 42, 24, 50, 15, 62 ] ];
  
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
    newCard = generateCard(12, 0, 63); // SPOT IT! HAS 8 SYMBOLS PER CARD, 57 SYMBOLS IN LIBRARY
    newCardIsGood = false;
  }
  console.log("Failed attempts: " + failedAttempts);
  return cardDeck;
}

var myDeck = buildDeck(21); // SPOT IT! HAS 55 CARDS

console.log(myDeck);