import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
jokes.addJoke("here is a new joke"); 
jokes.addJoke("here is a even newer joke"); 

function jokegetter(){
    document.getElementById("hold").
    innerHTML =  
    jokes.
    getJokeById(
        document.
        getElementById("inp").value
        )
}
document.getElementById("but").onclick = jokegetter

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


function initAddOne(num){
var counter = 0;
    return function(){
        return counter += num;
    }
}

var add = initAddOne(3);

console.log(add());
console.log(add());
console.log(add());

//Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
//setAge
//setName
//getInfo (should return a string like Peter, 45)

function makePerson(aName, aAge){
    var name = aName;
    var age = aAge;
    function setAge(newAge){
        age = newAge;
    }
    function setName(newName){
        name = newName;
    }
    function getInfo(){
        return name +", " +  age;
    }
    return {
        setAge: setAge,
        setName: setName,
        getInfo: getInfo
    }
}

var person = makePerson("peter", 80);

console.log(person.getInfo())

person.setName("newName");

person.setAge("11");

console.log(person.getInfo())
