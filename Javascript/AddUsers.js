$(document).ready(function () {
    var Emails = ["oliver.quail3@gmail.com", "ezmerlda@gmail.com", "lara@gmail.com"];


    //For laptop ect 
    $("#EmailPeople").click(   function() {
        if(window.innerWidth < 600) {
            $("#LeftContent").css("display", "block");
        }

        $("#EmailSend").css("display", "block");
        $("#AddUsers").css("display", "none");

    });


    $("#AddUsersPage").click(function() {
        if(window.innerWidth < 600) {
            $("#LeftContent").css("display", "block");
        }
        $("#EmailSend").css("display", "none");
        $("#AddUsers").css("display", "block");
    }
);


   


    

    $("#ClosePane").click(function(){
        $("#LeftContent").css("display", "none");
    });

    $("#ClosePane").on("tap", function(){
        $("#LeftContent").css("display", "none");
    });

    $(window).resize(function(){
        if(window.innerWidth > 600) {
            $("#LeftContent").css("display", "block");
        }
        else {
            $("#LeftContent").css("display", "none");

        }
    });




    //functions used above

    
 



});