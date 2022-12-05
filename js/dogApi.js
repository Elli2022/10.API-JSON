

// API & JSON - övningsuppgifter

// För varje övning ska du:
// 1. Gör förfrågningarna i browsern, lista ut hur url:en ska vara utformad
// 2. Kopiera JSON-datan (raw data) och klistra in i din JS-kod.
// 3. Gör om Stringen till ett JS objekt
// 4. Logga objektet för att förstå strukturen i det så att du kan hitta rätt data. 
// 5. Presentera infon i HTML

// Dog API - https://dog.ceo/dog-api/

// 1. Hämta en random hundbildsurl av en dalmatiner och visa bilden på Webbsidan.

// const randomDog = '{"message":"https:\/\/images.dog.ceo\/breeds\/dalmatian\/cooper2.jpg","status":"success"}'

// const randomDogObj = JSON.parse(randomDog);

// console.log(randomDogObj);

// const imgEl = document.createElement('img');
// document.body.appendChild(imgEl);
// imgEl.src = randomDogObj.message;

//--------------------------------

// 2. Hämta 10 random bilder av pomeranians och visa på webbsidan.
const tenRandomDogs = '{"message":["https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_13691.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_2691.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_3742.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_4245.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_4456.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_5089.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_5329.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_6182.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_8246.jpg","https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_8351.jpg"],"status":"success"}'

const tenRandomDogsObj = JSON.parse(tenRandomDogs);
console.log(tenRandomDogsObj.message);


//Visa alla 10 pomeranianbilder på webbsidan
for(let i=0; i<tenRandomDogsObj.message.length; i++){
const imgEl = document.createElement('img');
document.body.appendChild(imgEl);
imgEl.src = tenRandomDogsObj.message[i];
}
