// Punk API - https://punkapi.com/documentation/v2 
// 1. Hämta info om ett random öl och presentera beskrivningen och ‘food pairing’ i html-element.


const beerJson = '[{"id":93,"name":"Mango Gose - B-Sides","tagline":"Hoppy Mango Gose.","first_brewed":"07/2015","description":"Kettle soured hoppy mango gose. A delicate balance of sweet, juicy mango, sour lime and salinity.","image_url":"https://images.punkapi.com/v2/keg.png","abv":6.4,"ibu":40,"target_fg":1000,"target_og":1057,"ebc":10,"srm":5,"ph":3.5,"attenuation_level":87,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":60,"unit":"celsius"},"duration":10},{"temp":{"value":65,"unit":"celsius"},"duration":30},{"temp":{"value":72,"unit":"celsius"},"duration":10},{"temp":{"value":78,"unit":"celsius"},"duration":5}],"fermentation":{"temp":{"value":20,"unit":"celsius"}},"twist":"Kettle Soured, 5 Mangoes pureed at FV"},"ingredients":{"malt":[{"name":"Extra Pale","amount":{"value":5.25,"unit":"kilograms"}},{"name":"Wheat Malt","amount":{"value":1.88,"unit":"kilograms"}},{"name":"Dark Crystal","amount":{"value":0.13,"unit":"kilograms"}}],"hops":[{"name":"Sorachi Ace","amount":{"value":7.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Amarillo","amount":{"value":7.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Sorachi Ace","amount":{"value":15,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Amarillo","amount":{"value":15,"unit":"grams"},"add":"end","attribute":"flavour"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Okra fries","Sea bass ceviche","Sea salt fudge"],"brewers_tips":"Try to use the juiciest, ripest mangoes possible.","contributed_by":"Sam Mason <samjbmason>"}]'


const beerJsonObj = JSON.parse(beerJson);


const foodPairings = beerJsonObj[0].food_pairing;

foodPairings.forEach(
    function(pairing){
        const p = document.createElement('p');
        document.body.appendChild(p);
        p.innerText = pairing;
    }
)

console.log(beerJsonObj[0].food_pairing);

// 2. Hämta info om ett random öl och visa namnet på ölen och en bild på ölen i HTML-element.

const imgEl = document.createElement('img');
document.body.appendChild(imgEl);
imgEl.src = beerJsonObj[0].image_url;


// 3. Hämta info om ett random öl och visa namnen på alla ingredienser i HTML-element.


// 4. Hämta info om ett öl som passar till Caramel toffee cake och presentera namn, tagline och image.