window.onload = function() {

    var BackButton = document.getElementById('BackButton');
    BackButton.addEventListener('click', function(){
        window.location = 'Menu.html';
    });
    
    var ContactHolder = document.getElementById("ContactHolder");
    var xhttp =  new XMLHttpRequest();
    xhttp.open("POST", "API.php?Mode=GetChats", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onload = function() {

        var Data = JSON.parse(this.responseText);

        var counter = 0;
        while(counter < Data.length) {
            var ChatId = Data[counter]["ChatId"];
            var Contact = document.createElement("section");
            Contact.classList.add("ContactBox");
            if(counter%2 != 0) {
                Contact.classList.add("Grey");
            }

            Contact.addEventListener("click", function(){
                var Location = "Messages.html?Mode=GetMessages&ChatId=" + ChatId;
                //Location+= Data[counter]["ChatId"].ToString();
                window.location = Location;
            }); 
            Contact.innerHTML = "<img src='"+ Data[counter]["ProfilePicture"]+"'/>" + "<p>"+Data[counter]["Member"] + "</p>";
            ContactHolder.appendChild(Contact);
            counter++;
        }
    } 
    xhttp.send(); 


    


}