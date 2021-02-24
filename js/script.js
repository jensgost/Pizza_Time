"strict mode";
/*
let choose = document.getElementById("choose-button");

choose.addEventListener("submit", () => {
   let currentVal = choose.nodeValue;
} )
*/

try{
   async function getPizza() {
     const response = await fetch('https://foodish-api.herokuapp.com/api/images/pizza');
   
     if (response.ok) {
      console.log(response);
     } else {
      console.log("Did not work")
     }
  } 
}
  catch(error) {
     console.log("Did not work2")
}

/*
fetch('https://foodish-api.herokuapp.com/api/images/pizza').then(res => {
     if (res.ok){
        console.log("Success")
     }
     else{
        console.log("No success")
     }
    })
    .then(data => console.log(data));
    */