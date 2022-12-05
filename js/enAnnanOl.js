const beerJson = https://api.punkapi.com/v2/beers?food=chicken

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