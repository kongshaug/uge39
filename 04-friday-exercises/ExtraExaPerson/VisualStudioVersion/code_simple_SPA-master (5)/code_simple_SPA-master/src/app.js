import 'bootstrap/dist/css/bootstrap.css'
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function fetchAll()
{
    amount = document.getElementById("amount").value;
    region = document.getElementById("region").value;
    gender = document.getElementById("gender").value;
    fetch("http://uinames.com/api/?amount=4&All=England&gender=female")
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                var people = data.map(person => "<tr><td>" + person.id
                            + "</td><td>" + person.make_year + "</td>"
                            + "<td>" + person.make + "</td><td>"
                            );
                document.getElementById("tblbody").innerHTML = person.join("\n");
            });
            
            document.getElementById("testId").innerHTML = gender;
}

document.getElementById("btnsend").onclick = fetchAll


