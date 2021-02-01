const apikey = "69c705dcb2f4447eb72181420213101";
let id=0;
const main = document.getElementById("main");

const addbtn = document.getElementById("add");
const savebtn = document.getElementById("save");
const cancelbtn = document.getElementById("cancel");
const inputdiv= document.getElementById("input");
const grid=document.getElementById("grid");

console.log(inputdiv)

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
    main.id=id;

    main.innerHTML= `
       <span class="hidden" id="span-${id}" onclick="del(${id})" style="color: red">X</span>
       <h5 class="weather" >${temp}°C ${name}</h5>
    `

    grid.appendChild(main);
    updateLS()
    id++
}

function localaddweather(text){
    var main=document.createElement('div')
    main.id=text.id;
    main.classList.add('weatherwrapper');
    main.innerHTML= `
       <span class="hidden" id="span-${text.id}"  onclick="del(${text.id})" style="color: red">X</span>
       <h5 class="weather">${text.text}</h5>
    `
    grid.appendChild(main);
    id++
}


let weathers = JSON.parse(localStorage.getItem("weather"));

if (weathers) {
    weathers.forEach((weather) => {
        localaddweather(weather);
    });
    console.log(weathers)
}

function del(id){
    var delitem=document.getElementById(id)
    weathers.splice(id, 1);
    delitem.remove();
    console.log(weathers)
}

function updateLS() {
    const weatherEls =Array.from(document.getElementsByClassName("weather"));

    const weather = [];


    weatherEls.forEach((weatherEl) => {
        weather.push({
            text: weatherEl.innerText,
            id: id
        });
    });

    console.log(weather)

    localStorage.setItem("weather", JSON.stringify(weather));
}

function weatherhover(){
    var weatherwrapper=Array.from(document.getElementsByClassName("weatherwrapper")) ;
    weatherwrapper.forEach(wrapper =>{
        wrapper.addEventListener("mouseover",()=>{
            let span= document.getElementById(`span-${wrapper.id}`)
            span.classList.remove('hidden');
        })
    })
}

weatherhover()
