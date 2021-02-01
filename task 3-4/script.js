async function search(){

    var url = `https://next.json-generator.com/api/json/get/VkBw8XP2d`;


    function Recipe(url) {
        return fetch(url)
            .then(response => response.json())
    }
    const response =await Recipe(url);



    response.forEach(user =>{
       if(user.company==="FaceBook" && user.department==="IT"){
            console.log(`face IT:`)
            console.log(JSON.stringify(user))
       }

        if(user.salary>"500 000" && user.department==="HR"){
            console.log(`HR 500 000:`)
            console.log(JSON.stringify(user))
        }

        if(user.company==="Google" && user.cpuntry==="UK" && user.department==="sales"){
            console.log(`google uk sales:`)
            console.log(user.email)
            console.log(user.name.first)
            console.log(user.dob)
        }
    })
}

search()