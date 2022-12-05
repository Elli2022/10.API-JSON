const json =  `{"name": "Jason Derulo", "age":33, "songs": ["love", "party", "talk dirty"]}`;

console.log(json);

//---------------------------------------
//(om jag försöker göra så här så kommer jag få ett error eftersom jag kan inte göra det på strings. Jag måste göra om det till ett objekt):
// console.log(json.songs[2]);

//------------------------------------

//Ex. 2.)
const obj = JSON.parse(json);

console.log(obj);
console.log(obj.songs[2]);

//Random dog json

const dogJson =  `{"message": "https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_122350.jpg", "status": "success"}`;

const dogObj = JSON.parse(dogJson);
console.log(dogObj.message);

const imgEl = document.createElement('img');
document.body.appendChild(imgEl);
imgEl.src = dogObj.message;

//------------------------------------------

//Ex.3).

//3 random images
const threeBulldogs = '{"message":["https:\/\/images.dog.ceo\/breeds\/bulldog-boston\/n02096585_1207.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_5087.jpg","https:\/\/images.dog.ceo\/breeds\/bulldog-french\/n02108915_618.jpg"],"status":"success"}'

const threeBulldogsObj = JSON.parse(threeBulldogs);
console.log(threeBulldogsObj.message);

//----------------------------------------------

//Visa alla tre bulldogbilder på webbsidan
for(let i=0; i<threeBulldogsObj.message.length; i++){
    const img = document.createElement('img');
    document.body.append(img);
    img.src = threeBulldogsObj.message[i];
}


// //Alternativ 2:
// threeBulldogsObj.message.forEach(
//     function(bulldogUrl){
//             const img = document.createElement('img');
//             document.body.append(img);
//             img.src = bulldogUrl;
//         }
    
// )

//----------------------------------------------


// //Annat exempel:

// https://api.punkapi.com/v2/beers?beer_name=Arcade_Nation