const beerJson = '[{"id":12,"name":"Arcade Nation","tagline":"Seasonal Black IPA.","first_brewed":"12/2015","description":"Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.","image_url":"https://images.punkapi.com/v2/12.png","abv":5.3,"ibu":60,"target_fg":1012,"target_og":1052,"ebc":200,"srm":100,"ph":4.2,"attenuation_level":77,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":65,"unit":"celsius"},"duration":null}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":null},"ingredients":{"malt":[{"name":"Pale Ale","amount":{"value":3.13,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.25,"unit":"kilograms"}},{"name":"Crystal 150","amount":{"value":0.18,"unit":"kilograms"}},{"name":"Carafa Special Malt Type 1","amount":{"value":0.25,"unit":"kilograms"}}],"hops":[{"name":"Simcoe","amount":{"value":12.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Simcoe","amount":{"value":19,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Simcoe","amount":{"value":12.5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Amarillo","amount":{"value":12.5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Citra","amount":{"value":12.5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Simcoe","amount":{"value":62.5,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Amarillo","amount":{"value":62.5,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Citra","amount":{"value":62.5,"unit":"grams"},"add":"dry hop","attribute":"aroma"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["King prawn kebabs","Halibut with a mango and tomato salad","Mint chocloate ice cream"],"brewers_tips":"Be as accurate as possible when weighing out your malts to ensure you strike the right balance.","contributed_by":"Sam Mason <samjbmason>"}]'

//Gör om till JS objekt

//Visa bilden på webbsidan

// const beerJsonObj = JSON.parse(beerJson);

// //Logga och lokalisera image url
// console.log(beerJsonObj[0].image_url);

// //Visa bilden på webbsidan
// const imgEl = document.createElement('img');
// document.body.appendChild(imgEl);
// imgEl.src = beerJsonObj[0].image_url;


//-------------------------


const beerJsonObj = JSON.parse(beerJson);


console.log(beerJsonObj[0].food_pairing);


const imgEl = document.createElement('img');
document.body.appendChild(imgEl);
imgEl.src = beerJsonObj[0].image_url;


const foodPairings = beerJsonObj[0].food_pairing;


foodPairings.forEach(
    function(pairing){
        const p = document.createElement('p');
        document.body.appendChild(p);
        p.innerText = pairing;
    }
)