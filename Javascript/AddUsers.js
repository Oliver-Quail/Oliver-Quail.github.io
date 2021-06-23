window.onload = function () {
    var Emails = ["oliver.quail3@gmail.com", "ezmerlda@gmail.com", "lara@gmail.com"];

    //Get references to required compents
    var EmailButton = document.getElementById("EmailPeople");
    var AddUserPageButton = document.getElementById("AddUsersPage"); 
    var CloseButton = document.getElementById("ClosePane");



    //Reference to left hand side content
    var LeftContent = document.getElementById("LeftContent");

    //References to content
    var AddUserPane = document.getElementById("AddUsers");
    var EmailPane = document.getElementById("EmailSend");


    EmailButton.addEventListener("click", function(){
        if(window.innerWidth < 600) {
            LeftContent.style.display = "block";
        }
        EmailPane.style.display = "block";
        AddUserPane.style.display = "none";
       
    });



    AddUserPageButton.addEventListener("click", function(){
        if(window.innerWidth < 600) {
            LeftContent.style.display = "block";
        }
        EmailPane.style.display = "none";
        AddUserPane.style.display = "block";
    });


    




   
    CloseButton.addEventListener("click", function(){
        LeftContent.style.display = "none";
    });

    

  

    
    window.onresize = function(){
        console.log("work");
        if(window.innerWidth > 600) {
            LeftContent.style.display = "block";
        }
        else {
            LeftContent.style.display = "none";

        }

        if(EmailPane.style.display == "none" && AddUserPane.style.display == "none") {
            EmailPane.style.display = "block";
        }
    };




    //functions used above

    
 



};