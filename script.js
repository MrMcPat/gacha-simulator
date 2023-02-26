let primocatnipCount = 0;

//array that stores all the results
let resultArray = [];

//last five star acquired
let lastFiveStar;

//promotional five star scarameowch
const promotionalFiveStar = {
  name: "Scarameowch",
  type: "fiveStar",
};

//sample five stars
const fiveStar = [
  {
    name: "Nyanderer",
    type: "fiveStar",
  },
  {
    name: "Meowluc",
    type: "fiveStar",
  },
  {
    name: "Nyal Haitham",
    type: "fiveStar",
  },
  {
    name: "Cymeow",
    type: "fiveStar",
  },
  {
    name: "Cyneko",
    type: "fiveStar",
  },
  {
    name: "Shen Nya",
    type: "fiveStar",
  },
  {
    name: "Tighnyari",
    type: "fiveStar",
  },
];

//sample four stars
const fourStar = [
  {
    name: "Cat-eya",
    type: "fourStar",
  },
  {
    name: "Dionya",
    type: "fourStar",
  },
  {
    name: "Placeholder1",
    type: "fourStar",
  },
  {
    name: "Placeholder2",
    type: "fourStar",
  },
  {
    name: "Placeholder3",
    type: "fourStar",
  },
  {
    name: "Placeholder4",
    type: "fourStar",
  },
  {
    name: "Placeholder5",
    type: "fourStar",
  },
];

//crap you get when you don't get four or five stars
const litterBox = [
  {
    name: "Crap1",
    type: "threeStar",
  },
  {
    name: "Crap2",
    type: "threeStar",
  },
  {
    name: "Crap3",
    type: "threeStar",
  },
];

//counts the number of pulls you've failed to get a five star.
let pityCounter = 0;

//percent chance increase after you've reached 70 pulls.
let pityAfterSeventy = 0.2;

//button for a one pull attempt
const gachaButton = document.getElementById("gacha");

//button for a ten pull attempt
const gachaTenButton = document.getElementById("gachaTenRoll");

//click event for the one pull button
gachaButton.addEventListener("click", () => {
  gachaTime();
});

//click event for the ten pull button
gachaTenButton.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    gachaTime();
  }
});

//main gacha function, bread and butter for this to work
function gachaTime() {
  let lastTenpulls = resultArray.slice(-9);
  let lastNinetypulls = resultArray.slice(-89);

  pityCounter++;

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
    // pityCounter < 70
    //   ? guaranteedFiveStarRandomOutcome()
    //   : guaranteedFiveStarSoftPity()
    if (pityCounter < 70) {
      lastFiveStar != "Scarameowch"
        ? guaranteedFiveStarRandomOutcome()
        : fiftyFiftyRandomOutcome();
    } else {
      lastFiveStar != "Scarameowch"
        ? guaranteedFiveStarSoftPity()
        : fiftyFiftySoftPity();
    }
  }

  //outputs the result array of your pulls
  console.log(resultArray);
}

//probability function of the fifty fifty five star before the 70th pull
function fiftyFiftyRandomOutcome() {
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    resultArray.push(fourStar[Math.floor(Math.random() * 7)]);
  } else if (randomNumber > 0.1 && randomNumber <= 0.106) {
    randomNumber >= 0.103
      ? resultArray.push(fiveStar[Math.floor(Math.random() * 7)])
      : resultArray.push(promotionalFiveStar);
    randomNumber >= 0.103
      ? (lastFiveStar = fiveStar[Math.floor(Math.random() * 7)].name)
      : (lastFiveStar = promotionalFiveStar.name);
    pityCounter = 0;
    lastFiveStar = promotionalFiveStar.name;
  } else {
    resultArray.push(litterBox[Math.floor(Math.random() * 3)]);
  }
}

//soft pity probability function of the fifty fifty five star before the 70th pull
function fiftyFiftySoftPity() {
  pityAfterSeventy = pityAfterSeventy + 0.0001;
  let randomNumber = Math.random();

  if (randomNumber <= 0.1) {
    resultArray.push(fourStar[Math.floor(Math.random() * 7)]);
  } else if (randomNumber > 0.1 && randomNumber <= pityAfterSeventy) {
    randomNumber >= (pityAfterSeventy - 0.1) / 2 + 0.1
      ? resultArray.push(fiveStar[Math.floor(Math.random() * 7)])
      : (lastFiveStar = promotionalFiveStar.name);
    randomNumber >= (pityAfterSeventy - 0.1) / 2 + 0.1
      ? (lastFiveStar = fiveStar[Math.floor(Math.random() * 7)].name)
      : (lastFiveStar = promotionalFiveStar.name);
    pityCounter = 0;
    pityAfterSeventy = 0.2;
  } else {
    resultArray.push(litterBox[Math.floor(Math.random() * 3)]);
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
    resultArray.push(litterBox[Math.floor(Math.random() * 3)]);
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
    resultArray.push(litterBox[Math.floor(Math.random() * 3)]);
  }
}
