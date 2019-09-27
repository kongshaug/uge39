import 'bootstrap/dist/css/bootstrap.css'





function fetchAll()
{
    fetch("http://localhost:3333/api/users/")
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                var usertable = data.map( user =>"<tr><td>" + user.name +"</td><td>" + user.age + "</td><td>" + 
                user.gender + "</td><td>" + user.email + "</td></tr>"
                
             ) 
             document.getElementById("tablebody").innerHTML = usertable.join("\n");
            });
}

fetchAll();

document.getElementById("getIdButton").onclick = getUserById

function getUserById(){
    fetch("http://localhost:3333/api/users/"+ document.getElementById("userIdField").value)
    .then(res => res.json()) //in flow1, just do it
    .then(data => {
        // Inside this callback, and only here, the response data is available
        var usertable =  "<tr><td>" + data.name +"</td><td>" + data.age + "</td><td>" + 
        data.gender + "</td><td>" + data.email + "</td></tr>"
        
     
     document.getElementById("tablebody").innerHTML = usertable;
    });


}
function getIt(val){
    return document.getElementById(val).value
}


//add user
function addPerson(){
    var Aname = getIt("name");
    var Aage = getIt("age");
    var Agender = getIt("gender");
    var Aemail = getIt("email");


let newPerson = {
    method: "POST",
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: Aname,
      age: Aage,
      gender: Agender,
      email: Aemail
    })
 }
 


 fetch("http://localhost:3333/api/users/",newPerson);


}


document.getElementById("addpersonnow").onclick = addPerson;

//Delete an existing user


function deleteUser(){

var userId = getIt("deleteTheGuy");
let options = {
    method: "DELETE",
    headers: {
    'Content-Type': 'application/json'
    }
 }
 
 fetch("http://localhost:3333/api/users/" + userId,options);

}

document.getElementById("deleteID").onclick = deleteUser;



// benja api
function api_fetch(method, endpoint, json_body = {}, api_errorhandler = null) {

    // benja api fetch options
    const api_host = 'http://localhost:3333/api/';
    const api_options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // fallback api error handler
    if(!api_errorhandler) {
        api_errorhandler = (error, res) => {
        	alert('der skete en fejl der ikke blev specifikt håndteret');
        	if(res) {
        		console.error(`api fejl: ${res.status} ${res.responseText})`);
        	}
        	if(error) {
        		console.error(error);
        	}
        };
    }

    // only add body to fetch options if method != GET
	if(!method || method !== 'GET') api_options.body = json_body;


	try {
		const res = await fetch(`${api_host}${endpoint}`);
		const json_body = await res.json();
		if(res.status.toString()[0] === '2') {
			return json_body;
		}
		else {
			api_errorhandler(null, res);
            return;
		}
	}
	catch(e) {
		api_errorhandler(e);
	}
}

// api function that takes id and returns user (using callback)
function get_user_by_id(id, callback) {

    const error_handler = (error, res) => {
        const status = res.statusCode;
        let response_body = res.responseText;
        try {
            response_body = JSON.parse(response_body);
        } catch(e) {}

        if(error) return console.error('Der skete en fejl:', error);

        return callback(res.statusCode, response_body);

    };

    const user = api_fetch('GET', `users/${id}`, null, error_handler);
    if(user) callback(user);
}


// manipulating dom
function populate_user_row() {
    const table_container = document.getElementById('tablebody');
    const profile_id = document.getElementById('user_id_input').value;

    get_user_by_id(profile_id, (status, user) => {

        if(status == 404) {
            alert('Brugeren eksisterer ikke');
            return;
        }
        else if(status !== 200 || typeof(user) !== 'object') {
            alert('Sorry, der skete en fejl...');
            return;
        }

        const tr = document.createElement('tr');

        const td0 = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td0.innerText = user.name;
        td1.innerText = user.age;
        td2.innerText = user.gender;
        td3.innerText = user.email;

        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table_container.appendChild(tr);
    });
}
