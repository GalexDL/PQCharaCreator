window.onload = () => {
  const changeEyeButton = document.getElementById('changeEyeButton');
  changeEyeButton.addEventListener('click', changeEyeImage);

  const changeMouthButton = document.getElementById('changeMouthButton');
  changeMouthButton.addEventListener('click', changeMouthImage);

  const changeAccesoriesButton = document.getElementById('changeAccesoriesButton');
  changeAccesoriesButton.addEventListener('click', changeAccesoriesImage);

  const changeClothesButton = document.getElementById('changeClothesButton');
  changeClothesButton.addEventListener('click', changeClothesImage);

  const changeBodyButton = document.getElementById('changeBodyButton');
  changeBodyButton.addEventListener('click', changeBodyImage);

  const changeHairButton = document.getElementById('changeHairButton');
  changeHairButton.addEventListener('click', changeHairComplete);

  const changeHatFButton = document.getElementById('changeHatFButton');
  changeHatFButton.addEventListener('click', changeHatComple);

};

////////             ////////
//////////EYES//////////
////////             ////////
let currentEyeNumber = 1; ////////////////////

function changeEyeImage() {
    currentEyeNumber = (currentEyeNumber % 16) + 1; ////////////////////

    document.getElementById('eye-image').src = `images/Eyes/eyes_${currentEyeNumber}.png`;
}
////////             ////////

////////             ////////
//////////MOUTH//////////
////////             ////////
let currentMouthNumber = 1; ////////////////////

function changeMouthImage() {
  currentMouthNumber = (currentMouthNumber % 16) + 1; ////////////////////

  document.getElementById('mouth-image').src = `images/Mouth/mouth_${currentMouthNumber}.png`;
}
////////             ////////

////////             ////////
//////////Accesories//////////
////////             ////////
let currentAccesoriesNumber = 0; ////////////////////

function changeAccesoriesImage() {
  currentAccesoriesNumber = (currentAccesoriesNumber % 39) + 1; ////////////////////

  document.getElementById('Accesories-image').src = `images/Accesories/acc_${currentAccesoriesNumber}.png`;
}
////////             ////////

////////             ////////
//////////Clothes//////////
////////             ////////
let currentClothesNumber = 1; ////////////////////

function changeClothesImage() {
  currentClothesNumber = (currentClothesNumber % 164) + 1; ////////////////////

  document.getElementById('Clothes-image').src = `images/Clothes/clothes_${currentClothesNumber}.png`;
}
////////             ////////

////////             ////////
//////////Body//////////
////////             ////////
let currentBodyNumber = 1; //////////////////////

function changeBodyImage() {
  currentBodyNumber = (currentBodyNumber % 8) + 1; ////////////////////

  document.getElementById('Body-image').src = `images/Body/body_${currentBodyNumber}.png`;
}
////////             ////////

////////             ////////
//////////Hair//////////
////////             ////////
let currentHairNumber = 1; //////////////////////
let currentHairFNumber = 1; //////////////////////
let currentHairBNumber = 1; //////////////////////



function changeHairImage() {
  currentHairNumber = (currentHairNumber % 62) + 1; ////////////////////

  document.getElementById('HairMid-image').src = `images/Hair/Hair_${currentHairNumber}.png`;

}
function changeHairFrontImage() {

  currentHairFNumber = (currentHairFNumber % 62) + 1; ////////////////////

  document.getElementById('HairFront-image').src = `images/Hair/HairFront/HairFront_${currentHairFNumber}.png`;
}
function changeHairBackImage() {

  currentHairBNumber = (currentHairBNumber % 62) + 1; ////////////////////

  document.getElementById('HairBack-image').src = `images/Hair/HairBack/HairB_${currentHairBNumber}.png`;
}

function changeHairComplete() {

  changeHairImage()

  changeHairFrontImage()

  changeHairBackImage()
}

////////             ////////

////////             ////////
//////////Hat//////////
////////             ////////

let currentHatNumber = 1; ///////////
let currentHatFNumber = 1; //////////


function changeHatImage() {
  currentHatNumber = (currentHatNumber % 103) + 1; ////////////////////

  document.getElementById('Hat-image').src = `images/Hat/Hat_${currentHatNumber}.png`;

}
function changeHatFrontImage() {

  currentHatFNumber = (currentHatFNumber % 103) + 1; ////////////////////

  document.getElementById('HatBack-image').src = `images/Hat/back/Hatf_${currentHatFNumber}.png`;
}

function changeHatComple() {

  changeHatImage()

  changeHatFrontImage()
}
////////             ////////