import 'bootstrap/dist/css/bootstrap.css'

var oldContry = "";
document.getElementById("svg2").onclick = function(id){ getInfo(event.target.id)};

function getInfo(idOfContryClicked){
    if(oldContry !="")
    {
        changeBack(oldContry)
    }
    oldContry = idOfContryClicked
    document.getElementById(idOfContryClicked).style.fill='red';
   
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" +idOfContryClicked)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                var contry = data.map(contry => "you clicked on: " + contry.name +
                "\n the capital is: " + contry.capital + 
                "\n the borders of the contry is up against: \n <ul>" + contry.borders.map(border => "<li>"+border+"</li>").join("") + "</ul>"
            )
            document.getElementById("info").innerHTML = contry;
            

                });


    
}

function changeBack(id){
    document.getElementById(id).style.fill='#979797';
}