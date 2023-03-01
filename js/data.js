//in game currency to pull
let primocatnipCount = 0;

//money spent without taking taxes into account
let moneySpent = 0;

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
    name: "Kiddy Cat",
    type: "fiveStar",
  },
  {
    name: "Cyneko",
    type: "fiveStar",
  },
  {
    name: "Rex Lapurr",
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
    name: "Katveh",
    type: "fourStar",
  },
  {
    name: "Not a Cat", //Razor
    type: "fourStar",
  },
  {
    name: "Thomatocat",
    type: "fourStar",
  },
  {
    name: "Miss Hinya~",
    type: "fourStar",
  },
  {
    name: "Actually a Birb", //Kujou Sara
    type: "fourStar",
  },
];

//crap you get when you don't get four or five stars
const litterBox = [
  {
    name: "Anemo Litter Box",
    type: "threeStar",
  },
  {
    name: "Geo Litter Box",
    type: "threeStar",
  },
  {
    name: "Electro Litter Box",
    type: "threeStar",
  },
  {
    name: "Dendro Litter Box",
    type: "threeStar",
  },
  {
    name: "Hydro Litter Box",
    type: "threeStar",
  },
  {
    name: "Pyro Litter Box",
    type: "threeStar",
  },
  {
    name: "Cryo Litter Box",
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

//buttons for top-up
const primoOption1 = document.getElementById("primooption1");
const primoOption2 = document.getElementById("primooption2");
const primoOption3 = document.getElementById("primooption3");
const primoOption4 = document.getElementById("primooption4");
const primoOption5 = document.getElementById("primooption5");
const primoOption6 = document.getElementById("primooption6");

//displays
const primocatnipDisplay = document.getElementById("primocatnip-count");
const moneySpentDisplay = document.getElementById("money-spent");
const gachaResultsDisplay = document.getElementById("gacha-results");
