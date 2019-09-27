import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");



//In index.js remove all code meant for the initial joke-sample,
// add an event listener to the button’s click event and pass a 
//callback that will update the div tag in the index.html with a new quote.

document.getElementById("button").onclick = changeJokes;



//Initially, fetch the quote from a remote API: https://studypoints.info/jokes/api/jokes/period/hour 
//Use fetch() to get the quote

function changeJokes(){

    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
            .then(res => res.json()) //in flow1, just do it
            .then(data => { 
                // Inside this callback, and only here, the response data is available
               
                document.getElementById("div").innerHTML = data.joke
            });
              

    
}

setInterval(function(){ changeJokes(); }, 3600000);

function setDirection(id){
    document.getElementById("div").innerHTML = id;
}

document.getElementById("north").onclick = function(){
    setDirection(this.id)
   
}
document.getElementById("south").onclick = function(){
    setDirection(this.id)
    document.getElementById("east").onclick = function(){
        setDirection(this.id)
       
    }
    document.getElementById("west").onclick = function(){
        setDirection(this.id)
       
    }
   
}