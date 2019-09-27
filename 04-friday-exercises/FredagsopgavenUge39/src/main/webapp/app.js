/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var Alldata

function fetchAll()
{
   
    amount = document.getElementById("amount").value;
    region = document.getElementById("region").value;
    gender = document.getElementById("gender").value;
    fetch("http://uinames.com/api/?amount="+amount+"&region="+region+"&gender="+gender)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                error = data.error

if(error != null)
{
  document.getElementById("testId").innerHTML = error  
}
        else{        
                // Inside this callback, and only here, the response data is available
                Alldata = data;
                var people = data.map(person => "<tr><td>" + person.name
                            + "</td><td>" + person.surname + "</td>"
                            + "<td>" + person.gender + "</td><td>"
                            );
                document.getElementById("tblbody").innerHTML = people.join("\n");

        }

            
            
            });
            
 
}

document.getElementById("btnsend").onclick = fetchAll

document.getElementById("btnsql").onclick = makeSQL

function makeSQL(){
    var sql = Alldata.map(person => "insert into people.person (firstname,lastname,gender) values (\""+ person.name+"\",\""+person.surname +"\",\""+ person.gender+"\");\n").join("")
document.getElementById("sql").value = sql;
}

