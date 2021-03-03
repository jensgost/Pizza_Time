"use strict";

   document.querySelector("#choose-button").onclick = async function (getPizza) {
     let url = new URL('https://foodish-api.herokuapp.com/api/images/pizza');
   
     let response = await fetch(url);
     console.log("we have an answer from the server");
     let URLData = await response.json();
     console.log("we have an image of a pizza");
      let hej = "hejsan";
     console.log(URLData.image);
     console.log(hej)


     // ändra i dom när man tycker på knappen
      let parent = document.querySelector("#fetch-target");
      parent.insertAdjacentHTML("beforeend", `<img src=${URLData.image} style="width:300px;height:200px;"></img>`);
   
   }

   console.log("script.js has finished running");