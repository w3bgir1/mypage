// ************* Facts
const factClass = document.querySelector('.facts');
const facts = ['I lived in Vietnam for 5.5 years', 'I love my family', 'I have a dog, his name is Ritter and he is a minischnauzer', 'I wrote my first line of code when I was 11 y.o.', 'You can find me in a movie at Netflix', 'My modeling career began when I was 25', 'I learnt 8 languages (but I can speak only three)', 'I love travelling and photography', 'I am a big fan of birds', 'I have a son, his name is Myroslav and he is 9 years old.', 'I am a foodie', 'I had black wedding dress', 'As a teenager, I was a big fan of Emo subculture', 'I worked as arts and crafts teacher', 'I love scrapbooking', 'I have degree in law', 'I am addicted to coffee', 'I can ride a motorbike', 'I like to play board games'];
const getRandomFact = fact => {
    return Math.floor(Math.random() * fact.length);
};

const arr = Array.from(Array(facts.length).keys());

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const addFact = () => {
    shuffle(arr);
    const index1 = arr[0];    
    const fact1 = facts[index1];
    const index2 = arr[1];
    const fact2 = facts[index2];
    const index3 = arr[2];
    const fact3 = facts[index3];
    let markup = `
    <div class="fact">
        <img src="./img/facts/fact${index1}.jpg" alt="fact">
        <p>${fact1}</p>
    </div>
    <div class="fact">
        <img src="./img/facts/fact${index2}.jpg" alt="fact">
        <p>${fact2}</p>
    </div>
    <div class="fact">
        <img src="./img/facts/fact${index3}.jpg" alt="fact">
        <p>${fact3}</p>
    </div>
    `;
    factClass.insertAdjacentHTML('afterbegin', markup)
};

const clearFact = () => factClass.innerHTML = ' ';

addFact();
document.querySelector('.getFact-btn').addEventListener('click', () => {
    clearFact();
    addFact();
    
});


// ************* Weather
const key = '3d98176fd468198e469f95239d240a82';

async function getWeather() {
    try {
        let rain = '';
        const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Amsterdam&units=metric&APPID=${key}`);
        const data = await result.json();
        const icon = data.list[0].weather[0].icon;
        if (data.list[0].weather[0].main.includes('rain') || data.list[0].weather[0].main.includes('Rain')) {
            rain = `Don't forget your umbrella!`;
        }
        const markup = `
        <img src="./img/weather_icons/${icon}.png" alt="">
        <p>The weather in ${data.city.name} today:</p>
        <p> ${data.list[0].weather[0].main}, temperature would be from ${data.list[0].main.temp_min} to ${data.list[0].main.temp_max} degrees Celcius.</p>
        <p>${rain}</p>
        
        <h4>${new Date().toDateString()}<h4>
        `; 
        document.querySelector('.weather').insertAdjacentHTML("beforeend", markup);
        
    } catch(error) {
        console.log(error);
    }
}
getWeather();









