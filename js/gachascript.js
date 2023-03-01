//click event for the one pull button
gachaButton.addEventListener("click", () => {
  primocatnipCount >= 160
    ? gachaTime()
    : alert("You need to spend your life away, go buy more!");
});

//click event for the ten pull button
gachaTenButton.addEventListener("click", () => {
  if (primocatnipCount >= 1600) {
    for (let i = 0; i < 10; i++) {
      gachaTime();
    }
  } else {
    alert("You need to spend your life away, go buy more!");
  }
});

//main gacha function, bread and butter for this to work
function gachaTime() {
  let lastTenpulls = resultArray.slice(-9);
  let lastNinetypulls = resultArray.slice(-89);

  pityCounter++;
  primocatnipCount = primocatnipCount - 160;
  primocatnipDisplay.innerText = `Primocatnips: ${primocatnipCount}`;

  //creates an array of the last ten pull types
  let containsFourStar = lastTenpulls.map((element) => {
    return element.type;
  });

  //creates an array of the last ninety pull types
  let containsFiveStar = lastNinetypulls.map((element) => {
    return element.type;
  });

  //check if the last ten pulls contain a 4 star, if not guarantee a four star
  if (!containsFourStar.includes("fourStar") && containsFourStar.length === 9) {
    resultArray.push(fourStar[Math.floor(Math.random() * 7)]);
  }
  //check if the last ninety pulls contain a 5 star, if not guarantee a five star
  else if (
    !containsFiveStar.includes("fiveStar") &&
    containsFiveStar.length === 89
  ) {
    resultArray.push(fiveStar[Math.floor(Math.random() * 7)]);
    pityCounter = 0;
  }
  //run the probability functions depending if you hit the 70th pull or not
  else {
    if (pityCounter < 70) {
      lastFiveStar != "Scarameowch"
        ? fiftyFiftyRandomOutcome()
        : guaranteedFiveStarRandomOutcome();
    } else {
      lastFiveStar != "Scarameowch"
        ? fiftyFiftySoftPity()
        : guaranteedFiveStarSoftPity();
    }
  }

  //outputs the result array of your pulls
  const resultListItem = document.createElement("li");

  resultArray.forEach((element) => {
    gachaResultsDisplay.appendChild(
      resultListItem
    ).innerText = `${element.name}, ${element.type}`;
  });
}

//probability function of the fifty fifty five star before the 70th pull
function fiftyFiftyRandomOutcome() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    resultArray.push(fourStar[Math.floor(Math.random() * 7)]);
  } else if (randomNumber > 0.1 && randomNumber <= 0.106) {
    fiveStarFiftyFiftyProbability(randomNumber);
    pityCounter = 0;
  } else {
    resultArray.push(litterBox[Math.floor(Math.random() * 7)]);
  }
}

//soft pity probability function of the fifty fifty five star before the 70th pull
function fiftyFiftySoftPity() {
  pityAfterSeventy = pityAfterSeventy + 0.0001;
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    resultArray.push(fourStar[Math.floor(Math.random() * 7)]);
  } else if (randomNumber > 0.1 && randomNumber <= pityAfterSeventy) {
    fiveStarFiftyFiftyProbability(randomNumber);
    pityCounter = 0;
    pityAfterSeventy = 0.2;
  } else {
    resultArray.push(litterBox[Math.floor(Math.random() * 7)]);
  }
}

//five star fifty fifty probability conditionals for the above two functions
function fiveStarFiftyFiftyProbability(randomNumber) {
  if (randomNumber >= (pityAfterSeventy - 0.1) / 2 + 0.1) {
    resultArray.push(fiveStar[Math.floor(Math.random() * 7)]);
    lastFiveStar = fiveStar[Math.floor(Math.random() * 7)].name;
  } else {
    resultArray.push(promotionalFiveStar);
    lastFiveStar = promotionalFiveStar.name;
  }
}

//probability function of the guaranteed promotional character before the 70th pull
function guaranteedFiveStarRandomOutcome() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    resultArray.push(fourStar[Math.floor(Math.random() * 7)]);
  } else if (randomNumber > 0.1 && randomNumber <= 0.106) {
    resultArray.push(promotionalFiveStar);
    pityCounter = 0;
    lastFiveStar = promotionalFiveStar.name;
  } else {
    resultArray.push(litterBox[Math.floor(Math.random() * 7)]);
  }
}

//soft pity probability function of the guaranteed promotional character after the 70th pull
function guaranteedFiveStarSoftPity() {
  pityAfterSeventy = pityAfterSeventy + 0.0001;
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    resultArray.push(fourStar[Math.floor(Math.random() * 7)]);
  } else if (randomNumber > 0.1 && randomNumber <= pityAfterSeventy) {
    resultArray.push(promotionalFiveStar);
    pityCounter = 0;
    pityAfterSeventy = 0.2;
    lastFiveStar = promotionalFiveStar.name;
  } else {
    resultArray.push(litterBox[Math.floor(Math.random() * 7)]);
  }
}
