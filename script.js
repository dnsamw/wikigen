//paragraphs
let intro_para = document.getElementById("intro");
let short_d_para = document.getElementById("short-description");
let networth_d_para = document.getElementById("networt-description");
let family_d_para = document.getElementById("family-description");

//full name
let fullName_F = document.getElementById("full-name");
fullName_F.addEventListener("input", writeFullName);

function writeFullName() {
  let fullName_A = document.getElementById("celeb-name");
  let paraName = document.getElementById("para-name");
  fullName_A.innerText = fullName_F.value;
  paraName.innerText = fullName_F.value;

  //para
  let firstNames = document.getElementsByClassName("celeb_f_name");
  for (const fn of firstNames) {
    fn.innerText = fullName_F.value;
  }

  //galleries
  let galleries_A = document.getElementById("galleries");
  galleries_A.innerText = `${fullName_F.value} galleries`;
}

//nick name
let nickName_F = document.getElementById("nick-name");
nickName_F.addEventListener("input", writeNickName);

function writeNickName() {
  console.log(nickName_F.value);
  let nickName_A = document.getElementById("celeb-nick-name");
  nickName_A.innerText = nickName_F.value;

  let names = document.getElementsByClassName("celebname");
  for (let name of names) {
    name.innerText = nickName_F.value;
  }

  //para
  let nickNames = document.getElementsByClassName("celeb_n_name");
  for (const fn of nickNames) {
    fn.innerText = nickName_F.value;
  }
}

//profession
let profession_F = document.getElementById("profession");
profession_F.addEventListener("input", writeProfession);

function writeProfession() {
  console.log(profession_F.value);
  let profession_A = document.getElementById("celeb-profession");
  profession_A.innerText = profession_F.value;

  //para
  let celebProfessions = document.getElementsByClassName("celeb_profession");
  for (const fn of celebProfessions) {
    fn.innerText = profession_F.value;
  }
}

//networth
let networth_F = document.getElementById("networth");
networth_F.addEventListener("input", writeNetworth);

function writeNetworth() {
  let networth_A = document.getElementById("celeb-networth");
  networth_A.innerText = `$${networth_F.value} Million (.approx)`;

  //para
  let celebNetworths = document.getElementsByClassName("celeb_networth");
  for (const fn of celebNetworths) {
    fn.innerText = networth_F.value;
  }
}

//awards
let awards_F = document.getElementById("awards-add-input");

let fact_F = document.getElementById("fact-add-input");

document.getElementById("awards-add-btn").addEventListener("click", addAward);
document.getElementById("awards-rmv-btn").addEventListener("click", rmvAward);

document.getElementById("fact-add-btn").addEventListener("click", addFact);
document.getElementById("fact-rmv-btn").addEventListener("click", rmvFact);

function addFact() {
  let facts_L = document.getElementById("facts-list");

  //let list = Array.from(facts_L.getElementsByTagName("li"));

  if (fact_F.value != "") {
    facts_L.innerHTML += `<li>${fact_F.value}</li>`;
  }
  fact_F.value = "";
}

function rmvFact() {
  let facts_L = document.getElementById("facts-list");
  let list = Array.from(facts_L.getElementsByTagName("li"));
  list.pop();
  console.log(list);
  let tempNode = document.createElement("div");
  for (const l of list) {
    tempNode.appendChild(l);
  }
  facts_L.innerHTML = tempNode.innerHTML;
}

//==============================================================
function addAward() {
  let awards_L = document.getElementById("awards-list");
  let list = Array.from(awards_L.getElementsByTagName("li"));
  let award_Para = document.getElementById("award-para");
  award_Para.innerHTML = `<span class="celeb_gender_active">${
    fullName_F.value
  }</span> currently have
  ${list.length + 1} awards.`;

  if (awards_F.value != "") {
    awards_L.innerHTML += `<li>${awards_F.value}</li>`;
  }
  awards_F.value = "";
}

function rmvAward() {
  let awards_L = document.getElementById("awards-list");
  let list = Array.from(awards_L.getElementsByTagName("li"));
  list.pop();
  //console.log(list);
  let tempNode = document.createElement("div");
  for (const l of list) {
    tempNode.appendChild(l);
  }
  awards_L.innerHTML = tempNode.innerHTML;

  let award_Para = document.getElementById("award-para");
  if (list.length != 0) {
    award_Para.innerHTML = `<span class="celeb_gender_active">${fullName_F.value}</span> currently have
    ${list.length} awards.`;
  } else {
    award_Para.innerHTML = `<span class="celeb_gender_active">${fullName_F.value}</span> currently doesn't have
    any awards.`;
  }
}

//gender
let gender_F = document.getElementById("gender");
gender_F.addEventListener("change", writeGender);

function writeGender() {
  let paraGender = document.getElementById("para-gender");
  if (gender_F.checked) {
    console.log("She");
    paraGender.innerText = "She";

    //para
    let celebGendersAct = document.getElementsByClassName(
      "celeb_gender_active"
    );
    let celebGendersPas = document.getElementsByClassName(
      "celeb_gender_passive"
    );
    let celebGendersPasCap = document.getElementsByClassName(
      "celeb_gender_passive_cap"
    );
    for (const fn of celebGendersAct) {
      fn.innerText = "She";
    }
    for (const fn of celebGendersPas) {
      fn.innerText = "her";
    }
    for (const fn of celebGendersPasCap) {
      fn.innerText = "Her";
    }
  } else {
    console.log("He");
    paraGender.innerText = "He";

    let celebGendersAct = document.getElementsByClassName(
      "celeb_gender_active"
    );
    let celebGendersAPas = document.getElementsByClassName(
      "celeb_gender_passive"
    );
    let celebGendersPasCap = document.getElementsByClassName(
      "celeb_gender_passive_cap"
    );
    for (const fn of celebGendersAct) {
      fn.innerText = "He";
    }
    for (const fn of celebGendersAPas) {
      fn.innerText = "his";
    }
    for (const fn of celebGendersPasCap) {
      fn.innerText = "His";
    }
  }
}

//known facts
let smoke_F = document.getElementById("smoke");
smoke_F.addEventListener("change", writeSmoke);
let drink_alc_F = document.getElementById("alc-drink");
drink_alc_F.addEventListener("change", writeAlcDrink);

function writeSmoke() {
  let celebSmoke = document.getElementById("celeb-smoke");
  if (smoke_F.checked) {
    celebSmoke.innerText = "Yes";
  } else {
    celebSmoke.innerText = "No";
  }
}

function writeAlcDrink() {
  let celebAlcDrink = document.getElementById("celeb-alc-drink");
  if (drink_alc_F.checked) {
    celebAlcDrink.innerText = "Yes";
  } else {
    celebAlcDrink.innerText = "No";
  }
}

//birthday
let birthday_F = document.getElementById("birthday");
birthday_F.addEventListener("change", writeBirthday);

function writeBirthday() {
  let str = birthday_F.value;
  let bdate = new Date(str);
  let now = new Date();
  let age = Math.abs(bdate.getFullYear() - now.getFullYear());
  console.log(age);
  let res = str.split("-"); // turn the date into a list format (Split by / if needed)
  console.log(res);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(months[parseInt(res[1], 10) - 1]); // month name
  formattedDate = `${res[0]}-${months[res[1] - 1]}-${res[2]}`;
  // formattedDateX = `${res[0]}-${months[res[1] - 1]}-${res[2]}`;
  console.log("DATE", formattedDate);
  let birthday_A = document.getElementById("celeb-dob");
  let paraBirthday = document.getElementById("para-date");
  let age_A = document.getElementById("celeb-age");
  let paraAge = document.getElementById("para-age");
  birthday_A.innerText = formattedDate;
  paraBirthday.innerText = formattedDate;

  //celeb_b_day
  let birthDates = document.getElementsByClassName("celeb_b_day");
  for (const fn of birthDates) {
    fn.innerText = formattedDate;
  }

  age_A.innerText = `${age} Years`;
  paraAge.innerText = `${age}`;
}

//location
let location_F = document.getElementById("location");
location_F.addEventListener("input", writeLocation);

function writeLocation() {
  console.log(location_F.value);
  let location_A = document.getElementById("celeb-location");
  location_A.innerText = location_F.value;

  let celebLocations = document.getElementsByClassName("celeb_location");
  for (const fn of celebLocations) {
    fn.innerText = location_F.value;
  }

  let birthloc_A = document.getElementById("celeb-birthplace");
  birthloc_A.innerText = `${location_F.value} `;
}

//debut year
let debut_F = document.getElementById("debut");
debut_F.addEventListener("input", writeDebutYear);

function writeDebutYear() {
  //console.log(location_F.value);
  let debut_A = document.getElementById("celeb-debut");
  debut_A.innerText = debut_F.value;
}

//state
let state_F = document.getElementById("state");
state_F.addEventListener("input", writeState);

function writeState() {
  //console.log(state_F.value);
  // let state_A = document.getElementById("celeb-state");
  // state_A.innerText = state_F.value;
  let celebStates = document.getElementsByClassName("celeb_state");
  for (const fn of celebStates) {
    fn.innerText = state_F.value;
  }

  let birtstate_A = document.getElementById("celeb-birthstate");
  birtstate_A.innerText = `${state_F.value} `;
}

//country
let country_F = document.getElementById("country");
country_F.addEventListener("input", writeCountry);

function writeCountry() {
  // console.log(country_F.value);
  // let country_A = document.getElementById("celeb-country");
  // country_A.innerText = country_A.value;

  let celebCoubtries = document.getElementsByClassName("celeb_country");
  for (const fn of celebCoubtries) {
    fn.innerText = country_F.value;
  }

  let celebctry_A = document.getElementById("celeb-birthcountry");
  celebctry_A.innerText = `${country_F.value}`;
}

//nationality
let nationality_F = document.getElementById("nationality");
nationality_F.addEventListener("input", writeNationality);

function writeNationality() {
  //console.log(nationality_F.value);
  let nationality_A = document.getElementById("celeb-nationality");
  nationality_A.innerText = nationality_F.value;

  let celebNationalities = document.getElementsByClassName("celeb_nationality");
  for (const fn of celebNationalities) {
    fn.innerText = nationality_F.value;
  }

  if (
    nationality_F.value[0].toLowerCase() == "a" ||
    nationality_F.value[0].toLowerCase() == "e" ||
    nationality_F.value[0].toLowerCase() == "i" ||
    nationality_F.value[0].toLowerCase() == "o" ||
    nationality_F.value[0].toLowerCase() == "u"
  ) {
    document.getElementById("grmr-a-an").innerText = "an";
  } else {
    document.getElementById("grmr-a-an").innerText = "a";
  }
}

//ethnicity
let ethnicity_F = document.getElementById("ethnicity");
ethnicity_F.addEventListener("input", writeEthnicity);

function writeEthnicity() {
  console.log(ethnicity_F.value);
  let ethnicity_A = document.getElementById("celeb-ethnicity");
  ethnicity_A.innerText = ethnicity_F.value;
}

//religion
let religion_F = document.getElementById("religion");
religion_F.addEventListener("input", writeReligion);

function writeReligion() {
  console.log(religion_F.value);
  let religion_A = document.getElementById("celeb-religion");
  religion_A.innerText = religion_F.value;

  let celebReligions = document.getElementsByClassName("celeb_religion");
  for (const fn of celebReligions) {
    fn.innerText = religion_F.value;
  }
}

//zodiac sign
let zodiacsign_F = document.getElementById("zodiac-sign");
zodiacsign_F.addEventListener("input", writeZodiacSign);

function writeZodiacSign() {
  console.log(zodiacsign_F.value);
  let zodiacsign_A = document.getElementById("celeb-zodiacsign");
  zodiacsign_A.innerText = zodiacsign_F.value;

  let celebZodiacSigns = document.getElementsByClassName("celeb_zodiac_sign");
  for (const fn of celebZodiacSigns) {
    fn.innerText = zodiacsign_F.value;
  }
}

// randomize zodiac sign
document
  .getElementById("zodiac-add-btn")
  .addEventListener("click", randomZodiacSign);
function randomZodiacSign() {
  let signArr = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  let randomSign = signArr[Math.floor(Math.random() * signArr.length)];
  console.log(randomSign);
  let celebZodiacSigns = document.getElementsByClassName("celeb_zodiac_sign");
  let zodiacsign_A = document.getElementById("celeb-zodiacsign");
  zodiacsign_F.value = randomSign;
  zodiacsign_A.innerText = randomSign;
  for (const fn of celebZodiacSigns) {
    fn.innerText = randomSign;
  }
}

//random color,food
document
  .getElementById("rand-color-btn")
  .addEventListener("click", randomColor);

function randomColor() {
  let colors = [
    "Amber",
    "Amethyst",
    "Azure",
    "Lavender",
    "Magenta",
    "Lilak",
    "Cyan",
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "White",
    "Purple",
    "Honey Orange",
    "Pink",
    "Ivory",
    "Crimson",
    "Aqua Blue",
    "Rose Gold",
    "Gold",
    "Steel Gray",
    "Peach",
    "Baby Blue",
    "Olive Green",
    "Mint Green",
    "Creamy Pink",
    "Royal Blue",
    "Prussian Blue",
    "Chocolate Brown",
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  color_F.value = randomColor;
  document.getElementById("celeb-color").innerText = randomColor;
}

//random food
document.getElementById("rand-food-btn").addEventListener("click", randomFood);

function randomFood() {
  let foods = [
    "Cake",
    "Chocolate",
    "Pizza",
    "Ice-Cream",
    "Cookies",
    "Pasta",
    "Veggie Burger",
    "Chinese Fried Rice",
    "Nasi Goreng",
    "Pudding",
    "Fruit Salad",
    "Chicken Burger",
    "Pizza Burger",
    "Ramen Noodles",
    "Cheese Pasta",
    "Kottu",
    "Rotti and Lunu Miris",
    "Lump Rice",
    "Milk Rice",
    "Egg Hoppers",
    "Pol Rotti and Seeni Sambal",
    "String Hoppers",
    "Yellow Rice",
    "Muffins",
    "Pan Cakes",
    "Mac and Cheese",
    "Waffles",
    "Tacos",
    "Cheese Cake",
  ];
  let randomFood = foods[Math.floor(Math.random() * foods.length)];
  food_F.value = randomFood;
  document.getElementById("celeb-food").innerText = randomFood;
}

//random food
document
  .getElementById("rand-drink-btn")
  .addEventListener("click", randomDrink);

function randomDrink() {
  let drinks = [
    "Mojito",
    "Apple Juice",
    "Beet Juice",
    "Blueberry Juice",
    "Orange Juice",
    "Pomegranate Juice",
    "Pineapple Juice",
    "Alovera Juice",
    "Coconut water",
    "Lemon Juice",
    "Mango Juice",
    "Papaya Juice",
    "Avocado Juice",
    "Coffee",
    "Ice tea",
    "Milk",
    "Milk tea",
    "Black coffee",
    "Espresso",
    "Latte",
    "Cappuccino",
    "Chocolate Milkshake",
    "Woodapple juice",
    "Falooda",
    "Ice Coffee",
  ];
  let randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
  drink_F.value = randomDrink;
  document.getElementById("celeb-drink").innerText = randomDrink;
}

//random animal
document
  .getElementById("rand-animal-btn")
  .addEventListener("click", randomAnimal);

function randomAnimal() {
  let animals = [
    "German Shepherd",
    "Rottweiler",
    "Labrador Retriever",
    "Pomeranian Dog",
    "Persian Cat",
    "Cat",
    "Dog",
    "Bunny",
  ];
  let random_animal = animals[Math.floor(Math.random() * animals.length)];
  animal_F.value = random_animal;
  document.getElementById("celeb-animal").innerText = random_animal;
}

//random cars
document.getElementById("rand-car-btn").addEventListener("click", randomCar);

function randomCar() {
  let cars = [
    "Hyundai Accent",
    "Honda Civic Sedan",
    "Mazda Miata",
    "Toyota Vezel",
    "Range Rover",
  ];
  let randomCar = cars[Math.floor(Math.random() * cars.length)];
  car_F.value = randomCar;
  document.getElementById("celeb-car").innerText = randomCar;
}

//random hobbies
document
  .getElementById("rand-hobby-btn")
  .addEventListener("click", randomHobby);

function randomHobby() {
  let hobbies = [
    "Tick toking",
    "Watching Movies",
    "Cooking",
    "Nail Art",
    "Photography",
    "Yoga",
    "Gardening",
    "Dancing",
    "Singing",
    "Listening to music",
    "Vlogging",
    "Shopping",
    "Traveling",
  ];

  let randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  hobby_F.value = randomHobby;
  document.getElementById("celeb-hobby").innerText = randomHobby;
}

//change ^ maritial status
document
  .getElementById("rel-status-btn")
  .addEventListener("click", changeMaritialStatus);
let MARITIAL_STATUS_INDEX = 5;
function changeMaritialStatus() {
  const relStatus = ["Single", "Engaged", "Married", "Widowed", "Divorced"];
  MARITIAL_STATUS_INDEX = (MARITIAL_STATUS_INDEX + 1) % 5;
  console.log(relStatus[MARITIAL_STATUS_INDEX]);
  document.getElementById("maritial-status").value =
    relStatus[MARITIAL_STATUS_INDEX];
  writeStatus();
}

//height
let height_F = document.getElementById("height");
height_F.addEventListener("input", writeHeight);

function writeHeight() {
  console.log(height_F.value);
  let height_A = document.getElementById("celeb-height");

  let height_Cm = document.getElementById("celeb-height-cm");
  let height_M = document.getElementById("celeb-height-m");
  let height_FI = document.getElementById("celeb-height-fi");

  let heightFI = height_F.value.split(".");
  let heightCm1 = heightFI[0] * 30.48;
  let heightCm2 = heightFI[1] ? heightFI[1] * 2.54 : 0;

  console.log(heightFI);
  console.log(heightCm1 + heightCm2);

  let heightInFtIn = `${heightFI[0]} ft ${heightFI[1] ? heightFI[1] : 0} in`;
  let heightInCm = Math.floor(heightCm1 + heightCm2);
  let heightInM = (heightInCm / 100).toFixed(2);

  height_A.innerText = `${heightInCm} cm`;
  height_Cm.innerText = `${heightInCm} cm`;
  height_M.innerText = `${heightInM} m`;
  height_FI.innerText = `${heightInFtIn}`;

  let celebHeightsFt = document.getElementsByClassName("celeb_height_ft");
  for (const fn of celebHeightsFt) {
    fn.innerText = heightInFtIn;
  }

  let celebHeightsCm = document.getElementsByClassName("celeb_height_cm");
  for (const fn of celebHeightsCm) {
    fn.innerText = heightInCm;
  }
}

//weight
let weight_F = document.getElementById("weight");
weight_F.addEventListener("input", writeWeight);

function writeWeight() {
  console.log(weight_F.value);
  let weight_A = document.getElementById("celeb-weight");
  weight_A.innerText = `${weight_F.value} kg (${(
    weight_F.value * 2.20462
  ).toFixed(2)} lbs)`;

  let celebWeightsKg = document.getElementsByClassName("celeb_weight_kg");
  for (const fn of celebWeightsKg) {
    fn.innerText = weight_F.value;
  }

  let celebWeightsLbs = document.getElementsByClassName("celeb_weight_lbs");
  for (const fn of celebWeightsLbs) {
    fn.innerText = `${(weight_F.value * 2.20462).toFixed(2)}`;
  }
}

//measurements
let breast_F = document.getElementById("breast");
let waist_F = document.getElementById("waist");
let hips_F = document.getElementById("hips");

breast_F.addEventListener("input", writeBreast);
waist_F.addEventListener("input", writeWaist);
hips_F.addEventListener("input", writeHips);

function writeBreast() {
  console.log(breast_F.value);
  let breast_A_in = document.getElementById("celeb-breasts-in");
  let breast_A_cm = document.getElementById("celeb-breasts-cm");
  breast_A_in.innerText = breast_F.value;
  breast_A_cm.innerText = (breast_F.value * 2.54).toFixed(2);

  let breast = document.getElementById("br");
  breast.innerText = `${breast_F.value}`;

  let celebBreasts = document.getElementsByClassName("celeb_breast");
  for (const fn of celebBreasts) {
    fn.innerText = breast_F.value;
  }
}
function writeWaist() {
  console.log(waist_F.value);
  let waist_A_in = document.getElementById("celeb-waist-in");
  let waist_A_cm = document.getElementById("celeb-waist-cm");
  waist_A_in.innerText = waist_F.value;
  waist_A_cm.innerText = (waist_F.value * 2.54).toFixed(2); //FIXXXXXXXXX
  let waist = document.getElementById("ws");
  waist.innerText = `${waist_F.value}`;

  let celebWaists = document.getElementsByClassName("celeb_waist");
  for (const fn of celebWaists) {
    fn.innerText = waist_F.value;
  }
}
function writeHips() {
  console.log(hips_F.value);
  let hips_A_in = document.getElementById("celeb-hips-in");
  let hips_A_cm = document.getElementById("celeb-hips-cm");
  hips_A_in.innerText = hips_F.value;
  hips_A_cm.innerText = (hips_F.value * 2.54).toFixed(2);

  let hip = document.getElementById("hp");
  hip.innerText = `${hips_F.value}`;

  let celebHips = document.getElementsByClassName("celeb_hip");
  for (const fn of celebHips) {
    fn.innerText = hips_F.value;
  }
}

//cup size
let cup_F = document.getElementById("cup");
cup_F.addEventListener("input", writeCup);

function writeCup() {
  let cup_A = document.getElementById("celeb-cup");
  cup_A.innerText = cup_F.value;
}

//hair,eyes,skin
let hair_F = document.getElementById("hair");
hair_F.addEventListener("input", writeHair);

let eyes_F = document.getElementById("eyes");
eyes_F.addEventListener("input", writeEyes);

let skin_F = document.getElementById("skin");
skin_F.addEventListener("input", writeSkin);

function writeHair() {
  let hair_A = document.getElementById("celeb-hair");
  console.log(hair_F);
  hair_A.innerText = hair_F.value;

  let celebHairs = document.getElementsByClassName("celeb_hair_color");
  for (const fn of celebHairs) {
    fn.innerText = hair_F.value;
  }
}
function writeEyes() {
  let eyes_A = document.getElementById("celeb-eyes");
  console.log(eyes_F);
  eyes_A.innerText = eyes_F.value;

  let celebEyes = document.getElementsByClassName("celeb_eye_color");
  for (const fn of celebEyes) {
    fn.innerText = eyes_F.value;
  }
}
function writeSkin() {
  let skin_A = document.getElementById("celeb-skin");
  console.log(skin_F);
  skin_A.innerText = skin_F.value;

  let celebSkins = document.getElementsByClassName("celeb_skin_color");
  for (const fn of celebSkins) {
    fn.innerText = skin_F.value;
  }
}

//relationship
let status_F = document.getElementById("maritial-status");
status_F.addEventListener("input", writeStatus);

let marriedYear_F = document.getElementById("married-year");
marriedYear_F.addEventListener("input", writeMarriedYear);

let spouse_F = document.getElementById("spouse-namex");
spouse_F.addEventListener("input", writeSpouse);

let affairs_F = document.getElementById("affairs");
affairs_F.addEventListener("input", writeAffairs);

let exAffairs_F = document.getElementById("ex-affairs");
exAffairs_F.addEventListener("input", writeExAffairs);

let children_F = document.getElementById("children");
children_F.addEventListener("input", writeChildren);

function writeStatus() {
  let status_A = document.getElementById("celeb-maritial-status");
  status_A.innerText = status_F.value;

  let celebMStatus = document.getElementsByClassName("celeb_maritial_state");
  for (const fn of celebMStatus) {
    fn.innerText = status_F.value.toLowerCase();
  }
}

function writeMarriedYear() {
  let marriedYear_A = document.getElementById("celeb-married-year");
  marriedYear_A.innerText = marriedYear_F.value;
}

function writeAffairs() {
  let affairs_A = document.getElementById("celeb-affairs");
  let spouse_A = document.getElementById("celeb-spouse");
  affairs_A.innerText = affairs_F.value;
  spouse_A.innerText = affairs_F.value;
}

function writeSpouse() {
  let spouse_A = document.getElementById("celeb-spousex");
  console.log(spouse_F.value);
  spouse_A.innerText = spouse_F.value;

  let firstSpouses = document.getElementsByClassName("celeb_relationship");
  for (const fn of firstSpouses) {
    fn.innerText = spouse_F.value;
  }

  let ifSpouse = document.getElementById("if-spouse");
  if (spouse_F.value != "") {
    ifSpouse.innerHTML = `and
    <span class="celeb_gender_passive">${
      gender_F.checked ? "her" : "his"
    }</span> spouse name
    is <span class="celeb_relationship">${[spouse_F.value]}</span>`;
  } else {
    ifSpouse.innerHTML = "";
  }
}

function writeExAffairs() {
  let exAffairs_A = document.getElementById("celeb-ex");
  exAffairs_A.innerText = exAffairs_F.value;
}

function writeChildren() {
  let children_A = document.getElementById("celeb-children");
  children_A.innerText = children_F.value;
}

//socialmedia
let instaID_F = document.getElementById("insta-id");
instaID_F.addEventListener("input", writeInstaID);

let instaFollowers_F = document.getElementById("insta-followers");
instaFollowers_F.addEventListener("input", writeInstaFollowers);

let twitterID_F = document.getElementById("twitter-id");
twitterID_F.addEventListener("input", writeTwitterID);

let twitterFollowers_F = document.getElementById("twitter-followers");
twitterFollowers_F.addEventListener("input", writeTwitterFollowers);

function writeInstaID() {
  let instaID_A = document.getElementById("celeb-insta-id");
  instaID_A.innerHTML = `<a href="https://www.instagram.com/${instaID_F.value}" rel="nofollow" target="_blank">@${instaID_F.value}</a>`;
}
function writeInstaFollowers() {
  let instaFollowers_A = document.getElementById("celeb-insta-followers");
  instaFollowers_A.innerText = instaFollowers_F.value;
}
function writeTwitterID() {
  let twitterID_A = document.getElementById("celeb-twitter-id");
  if (twitterID_F.value != "") {
    twitterID_A.innerHTML = `<a href="https://www.twitter.com/${twitterID_F.value}" rel="nofollow" target="_blank">@${twitterID_F.value}</a>`;
  } else {
    twitterID_A.innerHTML = "N/A";
  }
}
function writeTwitterFollowers() {
  let twitterFollowers_A = document.getElementById("celeb-twitter-followers");
  twitterFollowers_A.innerText = twitterFollowers_F.value;
}

//qualifications
let school_F = document.getElementById("school");
school_F.addEventListener("input", writeSchool);

let collage_F = document.getElementById("collage");
collage_F.addEventListener("input", writeCollage);

let qualifications_F = document.getElementById("qualifications");
qualifications_F.addEventListener("input", writeQualifications);

function writeSchool() {
  let school_A = document.getElementById("celeb-school");
  school_A.innerText = school_F.value;
}

function writeCollage() {
  let collage_A = document.getElementById("celeb-collage");
  collage_A.innerText = collage_F.value;
}

function writeQualifications() {
  let qualifications_A = document.getElementById("celeb-qualifications");
  qualifications_A.innerText = qualifications_F.value;
}

//favourites
let color_F = document.getElementById("color");
color_F.addEventListener("input", writeColor);

let food_F = document.getElementById("food");
food_F.addEventListener("input", writeFood);

let drink_F = document.getElementById("drink");
drink_F.addEventListener("input", writeDrink);

let animal_F = document.getElementById("animal");
animal_F.addEventListener("input", writeAnimal);

let car_F = document.getElementById("car");
car_F.addEventListener("input", writeCar);

let hobby_F = document.getElementById("hobby");
hobby_F.addEventListener("input", writeHobby);

function writeColor() {
  let color_A = document.getElementById("celeb-color");
  color_A.innerText = color_F.value;
}

function writeFood() {
  let food_A = document.getElementById("celeb-food");
  food_A.innerText = food_F.value;
}

function writeDrink() {
  let drink_A = document.getElementById("celeb-drink");
  drink_A.innerText = drink_F.value;
}

function writeAnimal() {
  let animal_A = document.getElementById("celeb-animal");
  animal_A.innerText = animal_F.value;
}

function writeCar() {
  let car_A = document.getElementById("celeb-car");
  car_A.innerText = car_F.value;
}

function writeHobby() {
  let hobby_A = document.getElementById("celeb-hobby");
  hobby_A.innerText = hobby_F.value;
}

//family
let father_F = document.getElementById("father");
father_F.addEventListener("input", writeFather);

let mother_F = document.getElementById("mother");
mother_F.addEventListener("input", writeMother);

let brother_F = document.getElementById("brother");
brother_F.addEventListener("input", writeBrother);

let sister_F = document.getElementById("sister");
sister_F.addEventListener("input", writeSister);

function writeFather() {
  let father_A = document.getElementById("celeb-father");
  father_A.innerText = father_F.value;
  let family_info = document.getElementById("family-info-para");
  if (father_F.value != "") {
    family_info.innerHTML = "as follows";
  } else {
    family_info.innerHTML = `currently unavailable. Like many other celebs, <span class="hl">${
      nickName_F.value
    }</span> also keeps <span class="hl">${
      gender_F.checked ? "her" : "his"
    }</span> personal life
    private. We will update it soon.`;
    father_A.innerText = "Not Known";
  }
}

function writeMother() {
  let mother_A = document.getElementById("celeb-mother");
  mother_A.innerText = mother_F.value;
  let family_info = document.getElementById("family-info-para");
  if (mother_F.value != "") {
    family_info.innerHTML = "as follows";
  } else {
    family_info.innerHTML = `currently unavailable. Like many other celebs, <span class="hl">${
      nickName_F.value
    }</span> also keeps <span class="hl">${
      gender_F.checked ? "her" : "his"
    }</span> personal life
    private. We will update it soon.`;
    mother_A.innerText = "Not Known";
  }
}

function writeBrother() {
  let brother_A = document.getElementById("celeb-brother");
  brother_A.innerText = brother_F.value;

  let family_info = document.getElementById("family-info-para");
  if (brother_F.value != "") {
    family_info.innerHTML = "as follows";
  } else {
    family_info.innerHTML = `currently unavailable. Like many other celebs, <span class="hl">${
      nickName_F.value
    }</span> also keeps <span class="hl">${
      gender_F.checked ? "her" : "his"
    }</span> personal life
    private. We will update it soon.`;
    brother_A.innerText = "Not Known";
  }
}

function writeSister() {
  let sister_A = document.getElementById("celeb-sister");
  sister_A.innerText = sister_F.value;

  let family_info = document.getElementById("family-info-para");
  if (sister_F.value != "") {
    family_info.innerHTML = "as follows";
  } else {
    family_info.innerHTML = `currently unavailable. Like many other celebs, <span class="hl">${
      nickName_F.value
    }</span> also keeps <span class="hl">${
      gender_F.checked ? "her" : "his"
    }</span> personal life
    private. We will update it soon.`;
    sister_A.innerText = "Not Known";
  }
}

//features
let f1 = document.getElementById("delightful-smile");
f1.addEventListener("change", handleF1);

function handleF1() {
  let celebF1 = document.getElementById("celeb_f1");
  if (f1.checked) {
    celebF1.innerText = "delightful smile";
  } else {
    celebF1.innerText = "cute smile";
  }
}

let f2 = document.getElementById("undeniable-looks");
f2.addEventListener("change", handleF2);

function handleF2() {
  let celebF2 = document.getElementById("celeb_f2");
  if (f2.checked) {
    celebF2.innerText = "undeniable looks";
  } else {
    celebF2.innerText = "beautiful looks";
  }
}

let f3 = document.getElementById("cat-eyes");
f3.addEventListener("change", handleF3);

function handleF3() {
  let celebF3 = document.getElementById("celeb_f3");
  if (f3.checked) {
    celebF3.innerText = "cute cat eyes, ";
  } else {
    celebF3.innerText = "";
  }
}

let f4 = document.getElementById("curvy-body");
f4.addEventListener("change", handleF4);

function handleF4() {
  let celebF4 = document.getElementById("celeb_f4");
  if (f4.checked) {
    celebF4.innerText = "curvy body, ";
  } else {
    celebF4.innerText = "";
  }
}

let f5 = document.getElementById("puffy-cheeks");
f5.addEventListener("change", handleF5);

function handleF5() {
  let celebF5 = document.getElementById("celeb_f5");
  if (f5.checked) {
    celebF5.innerText = "puffy cheeks, ";
  } else {
    celebF5.innerText = "";
  }
}

let f6 = document.getElementById("elegant-beauty");
f6.addEventListener("change", handleF6);

function handleF6() {
  let celebF6 = document.getElementById("celeb_f6");
  if (f6.checked) {
    celebF6.innerText = "elegant beauty, ";
  } else {
    celebF6.innerText = "";
  }
}

let f7 = document.getElementById("charming-narrow-eyes");
f7.addEventListener("change", handleF7);

function handleF7() {
  let celebF7 = document.getElementById("celeb_f7");
  if (f7.checked) {
    celebF7.innerText = "charming narrow eyes, ";
  } else {
    celebF7.innerText = "";
  }
}

let f8 = document.getElementById("stunning-thick-lips");
f8.addEventListener("change", handleF8);

function handleF8() {
  let celebF8 = document.getElementById("celeb_f8");
  if (f8.checked) {
    celebF8.innerText = "stunning thick lips, ";
  } else {
    celebF8.innerText = "";
  }
}

let f9 = document.getElementById("attractive-lips");
f9.addEventListener("change", handleF9);

function handleF9() {
  let celebF9 = document.getElementById("celeb_f9");
  if (f9.checked) {
    celebF9.innerText = "attractive lips";
  } else {
    celebF9.innerText = "style";
  }
}

function copyTitle() {
  let articleTitle = `${fullName_F.value} - Biography, Age, Height, Nethworth, Relationships, Wiki and More.`;
  navigator.clipboard.writeText(articleTitle);
}

function copyArticle() {
  let p1 = document.getElementById("paragraph-1");
  let p2 = document.getElementById("paragraph-2");
  let toc = document.getElementById("contents");
  let wiki_info = document.getElementById("wiki-info");
  let dob_info = document.getElementById("dob-info");
  let body_info = document.getElementById("body-info");
  let netWorthInfoh4 = document.getElementById("networt-info-title");
  let p3 = document.getElementById("networt-info");
  let personal_info = document.getElementById("personal-info");
  let edu_info = document.getElementById("edu-info");
  let award_info = document.getElementById("award-info");
  let fav_info = document.getElementById("fav-info");
  let familyInfoh4 = document.getElementById("family-info-title");
  let p4 = document.getElementById("family-info");
  let family_info = document.getElementById("family-info-tbl");
  let relationship_info = document.getElementById("relationship-info");
  let facts_info = document.getElementById("facts-info");

  let fullaArticleHTML = `<div id="wiki-article"><div><p id='celeb-intro'>${
    p1.innerText
  }</p><div id="celeb-img"><!--REPLACE IMAGE HERE--><img src="https://via.placeholder.com/150"><!--REPLACE IMAGE HERE--></div><p>${
    p2.innerText
  }</p> </div>${
    toc.innerHTML +
    wiki_info.innerHTML +
    dob_info.innerHTML +
    body_info.innerHTML +
    netWorthInfoh4.innerHTML
  }<p>${p3.innerText}</p>${
    personal_info.innerHTML +
    edu_info.innerHTML +
    award_info.innerHTML +
    fav_info.innerHTML +
    familyInfoh4.innerHTML
  }<p>${p4.innerText}</p>${
    family_info.innerHTML + relationship_info.innerHTML + facts_info.innerHTML
  }</div>`;

  navigator.clipboard.writeText(fullaArticleHTML);
}

function copyTags() {
  let tags = `${fullName_F.value},${nickName_F.value},Biography,Wiki`;
  navigator.clipboard.writeText(tags);
}
