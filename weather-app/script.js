const apikey = "69c705dcb2f4447eb72181420213101";

const main = document.getElementById("main");

const addbtn = document.getElementById("add");
const savebtn = document.getElementById("save");
const cancelbtn = document.getElementById("cancel");
const inputdiv= document.getElementById("input");
const grid=document.getElementById("grid");

addbtn.addEventListener("click", ()=>{
    inputdiv.classList.remove('hidden');
})

savebtn.addEventListener("click", ()=>{
    inputdiv.classList.add('hidden');
    const searchel = document.getElementById("search");
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${searchel.value}`;
    search(url);
})

cancelbtn.addEventListener("click", ()=>{
    inputdiv.classList.add('hidden');
})

function del(item){
    item.remove();
}

async function search(url){


    function Recipe(url) {
        return fetch(url)
            .then(response => response.json())
    }
    const response =await Recipe(url);

    addweather(response);

}

function addweather(response){
    var temp=response.current.temp_c;
    var name=response.location.name;

    var main=document.createElement('div');
    main.classList.add('weatherwrapper');

    main.innerHTML= `
       <span onclick="del(${main})" style="color: red">X</span>
       <h5 class="weather" >${temp}°C ${name}</h5>
    `

    grid.appendChild(main);
    updateLS()
}

function localaddweather(text){
    console.log(text)

    var main=document.createElement('div')
    main.innerHTML= `
       <span onclick="del(${main})" style="color: red">X</span>
       <h5 class="weather">${text.text}</h5>
    `
    grid.appendChild(main);
}


const weathers = JSON.parse(localStorage.getItem("weather"));

if (weathers) {
    weathers.forEach((weather) => {
        localaddweather(weather);
    });
}

function updateLS() {
    const weatherEls =Array.from(document.getElementsByClassName("weather"));

    const weather = [];


    weatherEls.forEach((weatherEl) => {
        weather.push({
            text: weatherEl.innerText,
        });
    });

    console.log(weather)

    localStorage.setItem("weather", JSON.stringify(weather));
}