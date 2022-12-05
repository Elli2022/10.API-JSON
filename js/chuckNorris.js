// Chuck Norris jokes - https://api.chucknorris.io/ 
// 1. Hämta ett random skämt och visa det i ett HTML-element

const randomJoke = '{"categories":[],"created_at":"2020-01-05 13:42:20.568859","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"zKc3iU1RTeGleo7660lXhg","updated_at":"2020-01-05 13:42:20.568859","url":"https://api.chucknorris.io/jokes/zKc3iU1RTeGleo7660lXhg","value":"Women line up just for the thrill of giving Chuck Norris a hickey on his hemorrhoids."}'

const randomJokeObj = JSON.parse(randomJoke);
console.log(randomJokeObj);

const p = document.createElement('p');
document.body.appendChild(p);
p.innerText = randomJokeObj.value;

//----------------------------------------------------------------------------
// 2. Hämta ett random skämt i kategorin food och visa det i ett html-element

const randomJokeFood = '{"categories":["food"],"created_at":"2020-01-05 13:42:20.262289","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"GzQ6j6hQRQOGL-Uj0doXwQ","updated_at":"2020-01-05 13:42:20.262289","url":"https://api.chucknorris.io/jokes/GzQ6j6hQRQOGL-Uj0doXwQ","value":"Atomic bombs are Chuck Norris favourite food. They are so crisply and spicy."}'

const randomJokeFoodObj = JSON.parse(randomJokeFood);
console.log(randomJokeFoodObj);


const h3 = document. createElement('h3');
document.body.appendChild(h3);
h3.innerText = randomJokeFoodObj.value;


// 3. Hämta ett random skämt i kategorin sport och visa det i ett html-element

const randomJokeSport = '{"categories":["sport"],"created_at":"2020-01-05 13:42:19.576875","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"qbfnqa0pstsl00i2he3g7w","updated_at":"2020-01-05 13:42:19.576875","url":"https://api.chucknorris.io/jokes/qbfnqa0pstsl00i2he3g7w","value":"Chuck Norris once went skydiving, but promised never to do it again. One Grand Canyon is enough."}'

console.log(randomJokeSport);

const randomJokeSportObj = JSON.parse(randomJokeSport);
console.log(randomJokeSportObj);

const h2 = document.createElement('h2');
document.body.appendChild(h2);
h2.innerText = randomJokeSportObj.value;


