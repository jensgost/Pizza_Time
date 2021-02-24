"use strict";
/*
let choose = document.getElementById("choose-button");

choose.addEventListener("submit", () => {
   let currentVal = choose.nodeValue;
} )
*/


   async function getPizza() {
     let url = new URL('https://foodish-api.herokuapp.com/api/images/pizza');
   
     let response = await fetch(url);
     let URLData = await response.json();

     console.log(URLData);

     return URLData;
     
   }

getPizza().then((URLData) =>{
   let objectURL = URL.createObjectURL(URLData);
   let image = document.createElement('img');
   image.src = objectURL;
   document.body.appendChild(image);
}).catch(e => console.log(e));

/*
      if (response.ok) {
         return await response.json();
        } else {
         console.log("Did not work")
        }  
     }

     getPizza().then((pizzaImage) => {
      let objectURL = URL.createObjectURL(pizzaImage);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
     }).catch(e => console.log(e));

     */

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