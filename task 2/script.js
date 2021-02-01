const grid=document.getElementById('grid');
var id=0;
var users=[];


async function search(){

    var url = `https://randomuser.me/api/?results=2`;


    function Recipe(url) {
        return fetch(url)
            .then(response => response.json())
    }
    const response =await Recipe(url);

    response.results.forEach(results=>{
        createUserCard(results)
    });

}


function createUserCard(user) {
    var main= document.createElement('div')
    const cardHTML = `
        <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${user.picture.large} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-text">${user.name.first}</h5>
                    <h5 class="card-text">${user.name.last}</h5>
                    <h5 class="card-text">${user.phone}</h5>
                    <h5 class="card-text">${user.location.state}</h5>
                    <h5 class="card-text">${user.location.street.name}</h5>
                    <a onclick="copyjs(${id})" href="#" class="btn btn-primary">copy json</a>
                </div>
            </div>
    `;
    users.push(user)
    id++
    main.innerHTML = cardHTML;
    grid.appendChild(main);
}

function copyjs(id){
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = JSON.stringify(users[id]);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

search()