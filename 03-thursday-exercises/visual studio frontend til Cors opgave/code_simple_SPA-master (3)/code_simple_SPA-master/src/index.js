import 'bootstrap/dist/css/bootstrap.css'


fetch("http://localhost:8080/jpareststarter/api/xxx/")
.then(res => res.json()) //in flow1, just do it
.then(data => {
    // Inside this callback, and only here, the response data is available
    var person = data.map(person => person.name + " is there!");

    document.getElementById("con").innerHTML = person
});

