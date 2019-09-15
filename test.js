
fetch('https://api.randomuser.me')
.then(response=>{
    return response.json()
})
.then(myJson=>{
    console.log(JSON.stringify(myJson))
})
