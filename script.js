// RETURNS A RANDOM NUMBER BETWEEN MIN (INCLUSIVE) AND MAX (EXCLUSIVE)
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//console.log(randNum(50, 100)); // generates a random number between 50-100


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
  var newCard = generateCard(9, 0, 63); // SPOT IT! HAS 8 SYMBOLS PER CARD, 57 SYMBOLS IN LIBRARY
  var cardDeck =  [];
  cardDeck.push(newCard);
  // console.log("new card added: " + newCard);
  
  // START WITH EXISTING DECK INSTEAD
  
// TWO MATCHES PER CARD, 12 SYMBOLS PER CARD, 21 CARDS
  // var cardDeck =  [ [ 2, 4, 14, 59, 13, 30, 29, 55, 47, 50, 26, 43 ],
  // [ 10, 27, 25, 55, 16, 57, 50, 31, 35, 58, 32, 8 ],
  // [ 34, 2, 60, 38, 48, 25, 1, 29, 57, 7, 62, 21 ],
  // [ 56, 57, 44, 23, 46, 2, 6, 33, 35, 12, 47, 39 ],
  // [ 30, 10, 22, 19, 12, 51, 56, 26, 7, 16, 60, 52 ],
  // [ 11, 27, 33, 29, 28, 0, 12, 26, 24, 58, 37, 21 ],
  // [ 19, 57, 4, 17, 18, 1, 9, 22, 11, 55, 33, 20 ],
  // [ 27, 34, 15, 39, 8, 43, 19, 3, 20, 62, 6, 26 ],
  // [ 7, 50, 6, 5, 22, 17, 34, 13, 31, 37, 46, 28 ],
  // [ 6, 4, 0, 59, 54, 48, 25, 52, 27, 56, 17, 45 ],
  // [ 10, 41, 28, 45, 36, 62, 9, 5, 57, 59, 44, 26 ],
  // [ 45, 35, 22, 27, 40, 44, 42, 51, 29, 13, 1, 15 ],
  // [ 55, 31, 4, 21, 56, 40, 53, 23, 28, 51, 62, 3 ],
  // [ 9, 53, 56, 15, 37, 34, 59, 14, 60, 35, 58, 18 ],
  // [ 34, 32, 33, 16, 5, 30, 4, 49, 15, 21, 44, 54 ],
  // [ 0, 34, 51, 61, 14, 13, 33, 10, 36, 25, 20, 23 ],
  // [ 29, 18, 40, 25, 5, 17, 30, 39, 53, 8, 36, 12 ],
  // [ 54, 31, 0, 12, 50, 53, 60, 44, 41, 20, 43, 1 ],
  // [ 41, 27, 51, 55, 14, 60, 5, 39, 48, 49, 46, 11 ],
  // [ 10, 12, 48, 46, 4, 18, 61, 42, 24, 50, 15, 62 ],
  // [ 54, 29, 22, 23, 3, 16, 43, 9, 48, 58, 36, 46 ] ];
  
  var cardDeck =  [ [ 26, 27, 25, 61, 36, 5, 48, 7, 12 ],
  [ 56, 27, 17, 31, 62, 41, 53, 38, 34 ],
  [ 58, 61, 60, 16, 46, 17, 30, 9, 20 ],
  [ 24, 23, 56, 5, 55, 9, 21, 45, 19 ],
  [ 28, 16, 14, 55, 43, 1, 49, 4, 27 ],
  [ 11, 25, 54, 60, 55, 53, 50, 51, 32 ],
  [ 1, 11, 37, 34, 40, 21, 46, 36, 52 ],
  [ 5, 42, 17, 13, 18, 50, 44, 1, 15 ],
  [ 33, 34, 12, 14, 23, 44, 57, 60, 59 ],
  [ 43, 39, 62, 23, 7, 13, 40, 20, 32 ],
  [ 24, 30, 42, 2, 4, 62, 12, 54, 37 ],
  [ 47, 6, 56, 54, 44, 16, 3, 39, 36 ],
  [ 47, 18, 26, 14, 38, 24, 46, 32, 10 ],
  [ 22, 52, 51, 48, 62, 28, 44, 9, 10 ],
  [ 34, 24, 25, 6, 49, 58, 13, 35, 22 ],
  [ 23, 29, 38, 15, 51, 0, 4, 58, 36 ],
  [ 31, 3, 52, 18, 2, 58, 33, 55, 7 ],
  [ 49, 37, 50, 7, 9, 29, 47, 59, 41 ],
  [ 11, 45, 0, 18, 41, 12, 28, 20, 6 ],
  [ 15, 48, 41, 35, 19, 33, 54, 46, 43 ],
  [ 8, 30, 39, 35, 27, 21, 59, 51, 18 ],
  [ 20, 8, 24, 57, 29, 48, 1, 3, 53 ] ]
  
  var newCardIsGood = false;
  while (cardDeck.length < numOfCards) {
    for (var i = 0; i < cardDeck.length; i++) {
      if (checkArrayDupes(cardDeck[i], newCard) == 1) {
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
      // console.log("new card added: " + newCard);
    }
    newCard = generateCard(9, 0, 63); // SPOT IT! HAS 8 SYMBOLS PER CARD, 57 SYMBOLS IN LIBRARY
    newCardIsGood = false;
  }
  console.log("Failed attempts: " + failedAttempts);
  return cardDeck;
}

var myDeck = buildDeck(22); // SPOT IT! HAS 55 CARDS

console.log(myDeck);