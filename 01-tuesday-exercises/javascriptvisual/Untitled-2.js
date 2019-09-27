var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "inger", "lis", "andreas", "anders" ];

function contrainsA(word){
    for (var i = 0; i < word.length; i++) {
        ans = false;
    if(word.charAt(i) === "a")
    {
        return true;
    }
}
return false;
}

function reverse(name){

    var splitString = name.split("");
    
    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join("");

    return joinArray; 
    
}

var aNames = names.filter(function(word) {
  return contrainsA(word) });

console.log(names.join(" "));

console.log(aNames.join(" "))


var reversed = names.map(name => reverse(name));

console.log(reversed.join(" "));






function myFilter(array, callback)
{
    var newArray =[] 
    array.forEach(word => { 
        if(callback(word))
        {

            newArray.push(word);
        }
       
    });
    return newArray;
    
}

function myMap(array, callback)
{
    var newArray =[] 
    array.forEach(word => { 
            newArray.push(callback(word));
    });
    return newArray;
    
}




console.log(myFilter(names, contrainsA).join("NEW "));

console.log(myMap(names, reverse).join("NEW "));

Array.prototype.myFilter = function(callback) 
    
    {
        var newArray =[] 
        this.forEach(word => { 
            if(callback(word))
            {
    
                newArray.push(word);
            }
           
        });
        return newArray;
        
    }
  ;

  Array.prototype.myMap = function(callback) 
    
    {
        var newArray =[] 
        this.forEach(word => { 
            newArray.push(callback(word));
           
        });
        return newArray;
        
    }
  ;

  console.log(names.myFilter(contrainsA));
  console.log(names.myMap(reverse));

  var numbers = [1, 3, 5, 10, 11];

var result = numbers.map((number, index, numbers) => {
    
    return addNext(number, index, numbers)
});

function addNext(number, index, numbers){
    if(index < numbers.length-1)
    {
        return number+ numbers[index+1]
    }
    return number;

}

console.log(result);

var taggedNames = names.map((name, index, names) => {
    
    return addTag(name, index, names.length)
    
    });

    function addTag(name, index, nameslength)
    {
        if(index === 0)
        return "<nav> <a href=””>"+name
        else if(index === nameslength-1)
        {
            return name+"</a> </nav>"
            
        }
     //   else{
      //      return "<a href=””>"+name+"</a>"
     //   }
     else
     {
         return name
     }

    }

    console.log(taggedNames.join("\n </a> <a href=””>"))








    var objnames = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

    var tabletaggedNames = objnames.map((person, index, objnames) => {
    
        return addtableTag(person, index, objnames.length)
        
        });

        function addtableTag(person, index, nameslength)
        {
            if(index === 0)
            return "<table> <tr> <th>name</th> <th>phone</th> </tr> <tr>  <td>"+person.name +"</td><td>" + person.phone
            else if(index === nameslength-1)
            {
                return person.name + "</td><td>" + person.phone+"</td> </tr></table>"
                
            }
      
         else
         {
             return  person.name + "</td> <td>" + person.phone 
         }
    
        }

        document.getElementById("first").innerHTML = tabletaggedNames.join("\n </td> </tr> <tr> <td>")

        document.getElementById("second").innerHTML = names.join();
        
        function setAnames(){
            document.getElementById("second").innerHTML = names.myFilter(contrainsA);
        }

        document.getElementById("but").onclick = setAnames
        


        // ----------------- reduce
        //a) Use join to create a single string from all, with names: comma-, space. and  # - separated.

        var all= ["Lars", "Peter", "Jan", "Bo"];

        //a) Use join to create a single string from all, with names: comma-, space. and  # - separated.

        document.getElementById("fourth").innerHTML = all.join(" said hi to ")

        //b) Given this array: 
        
        var numbers = [2, 3, 67, 33]; 

        //Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers
        function reduce(accumulator, currentValue){
           return accumulator + currentValue;
        }

        document.getElementById("fifth").innerHTML = numbers.reduce(reduce);


        var other = [1, 1, 1, 1]; 

        
        function average (accumulator, currentValue, array){
          
           return array.length;
        }

        document.getElementById("six").innerHTML = other.reduce(average);

// here
      
        var other = [30, 30, 30, 25]; 

      function add(total, amount, index, array) 
    
        {
            total += amount;
            if( index === array.length-1) { 
              return total/array.length;
            }else { 
              return total;
            }

        }
        function avg(total, amount, index, array)
        {
            total += amount;
            if( index === array.length-1) { 
              return total/array.length;
            }else { 
              return total;
            }
          }

          function personnAvg(total, amount, index, array)
          {
              total += amount.age;
              if( index === array.length-1) { 
                return total/array.length;
              }else { 
                return total;
              }
            }

        
        document.getElementById("six").innerHTML =  other.reduce((total, amount, index, array) => avg(total, amount, index, array))
            
        var members = [
            {name : "Peter", age: 18},
            {name : "Jan", age: 35},
            {name : "Janne", age: 25},
            {name : "Martin", age: 22}]

         

            
                  
            var reducers = function(accumulator, member,index,array ){
                accumulator += array[0].age;
                if( index === arr.length-1) { 
                  return accumulator/arr.length;
                }else { 
                  return accumulator;
                }
              }

             // document.getElementById("sev").innerHTML = members.reduce((accumulator, member,index,array) => reducers((accumulator, member,index,array)));

           // document.getElementById("sev").innerHTML =  members.reduce((total, amount, index, array) => personnAvg(total, amount, index, array))

           document.getElementById("sev").innerHTML = hoistMe();

           
 function hoistMe(){
return "will do!"
 }
           //What hoisting is
           //ans = når man laver metoder og deklererer variabler bliver de "løftet" op til toppen af dokumentet, det vil i praksis sige at 
           // metoder og variabel deklerationer kan bruges eller asignes højrer oppe i koden end man deklerer dem 

// A design rule we could follow, now we know about hoisting
// det koster tid at hoiste så prøv som udgangspunkt at holde variabler inde i de funktioner de skal bruges og brug unasigned metoder da de ikke bliver hoisted
       

//What is the difference between the keyword var and the ES6 keyword let?
//var is hoisted LET variable is not

var obj = {num : 3}

function howThisWorks(digit, digit2, digit3){

    return this.num + digit+ digit2 +digit3
}
// når man har en funktion referer this til window så hvis vi vil have fat i et objekt via this kan vi bruge call til midlertidigt at 
// tilknytte funktionen "howThisWorks" til objektet, nu kan vi kalde funktionen som er tilknyttet objektet og bruge this til at få fat i objektet
console.log(howThisWorks.call(obj, 3, 2,1))
nums = [2,4,5]

// call og apply virker meget ens men med apply kan vi pakke funktionen parameter ind i et array og skrive sådan:
console.log(howThisWorks.apply(obj, nums))

var bound = howThisWorks.bind(obj)
// hvor call og apply midlertidigt binder funktionen til objektet man man med bound binde funktionen til objektet og senere kalde den: 
console.log(bound(1,2,3))