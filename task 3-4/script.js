async function search(){
    let sum=0;

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

        if(user.company==="Apple" && user.cpuntry==="USA" ){

            sum=user.sasalary + sum
        }
        if(user.company==="Apple" && user.cpuntry==="USA" ){

            console.log(`HR 500 000:`)
            console.log(JSON.stringify(user))
        }
    })
    console.log("apple usa salary")
    console.log(sum)
}

search()