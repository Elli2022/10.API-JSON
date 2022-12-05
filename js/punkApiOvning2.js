const beerJson2 = '[{"id":52,"name":"Paradox Islay","tagline":"Ubiquitous Imperial Stout.","first_brewed":"04/2007","description":"In 2006 James and Martin hijacked a beer dinner run by Michael Jackson, the acclaimed beer and whisky writer, and convinced him to taste one of their home brews. This was a defining moment in BrewDog prehistory, and that beer was the first incarnation of the ubiquitous Paradox. Aged in a variety of casks over the years, Paradox is dark, decadent and encapsulating. Can be enjoyed fresh; phenomenal when aged.","image_url":"https://images.punkapi.com/v2/52.png","abv":10,"ibu":55,"target_fg":1014,"target_og":1090,"ebc":300,"srm":152,"ph":4.4,"attenuation_level":84.4,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":65,"unit":"celsius"},"duration":90}],"fermentation":{"temp":{"value":21,"unit":"celsius"}},"twist":"Try ageing on oak chips, infusing with rum raisins, or vanilla pods"},"ingredients":{"malt":[{"name":"Extra Pale","amount":{"value":4.5,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.55,"unit":"kilograms"}},{"name":"Munich","amount":{"value":0.33,"unit":"kilograms"}},{"name":"Flaked Oats","amount":{"value":1.35,"unit":"kilograms"}},{"name":"Dark Crystal","amount":{"value":0.55,"unit":"kilograms"}},{"name":"Carafa Special Malt Type 1","amount":{"value":0.18,"unit":"kilograms"}},{"name":"Carafa Special Malt Type 3","amount":{"value":0.33,"unit":"kilograms"}}],"hops":[{"name":"Columbus","amount":{"value":75,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Columbus","amount":{"value":25,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Saaz","amount":{"value":25,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"First Gold","amount":{"value":25,"unit":"grams"},"add":"end","attribute":"flavour"}],"yeast":"Wyeast 1272 - American Ale II™"},"food_pairing":["Ancho chilli beef taco","Chocolate gateaux","Rum poached pears with dark chocolate sauce"],"brewers_tips":"The beauty of this beer is in how brilliantly it lends itself to infusing or ageing. Experiment with different additions when the beer is ageing, taste it regularly to gauge its progress, and make sure you package it at its peak.","contributed_by":"Sam Mason <samjbmason>"}]'

const beerJson2Obj = JSON.parse(beerJson2);


console.log(beerJson2Obj[0].ingredients.hops[0].name);
console.log(beerJson2Obj[0].ingredients.malt[0].name);
console.log(beerJson2Obj[0].ingredients.yeast);


const hops = beerJson2Obj[0].ingredients.hops;
const malt = (beerJson2Obj[0].ingredients.malt);
console.log(malt);


for(let i = 0; i<hops.length; i++){
    // console.log(hops[i].name);
    const p = document.createElement('p');
    document.body.appendChild(p);
    p.innerText = hops[i].name;
}

malt.forEach(
    function(maltObj){
        console.log(maltObj.name);
        const h4 = document.createElement('h4');
        document.body.appendChild(h4);
        h4.innerText = maltObj.name;
    }
);




//detta funkade inte eftersom den inte var en array. Det var ett objekt!

// const ingredients = beerJson2Obj[0].ingredients;

// ingredients.forEach(
//     function(ingredients){
//         const p = document.createElement('p');
//         document.body.appendChild(p);
//         p.innerText = ingredients;
//     }
// )
