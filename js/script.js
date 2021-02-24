fetch('https://foodish-api.herokuapp.com/api/images/pizza').then(res => {
     if (res.ok){
        console.log("Success")
     }
     else{
        console.log("No success")
     }
    })
    .then(data => console.log(data));