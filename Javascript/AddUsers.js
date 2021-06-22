$(document).ready(function () {
    var Emails = ["oliver.quail3@gmail.com", "ezmerlda@gmail.com", "lara@gmail.com"];

    $("#EmailPeople").click(function(){
        if(window.innerWidth < 600) {
            $("#LeftContent").css("display", "block");
        }

        $("#EmailSend").css("display", "block");
        $("#AddUsers").css("display", "none");

    });

    
    $("#AddUsersPage").click(function(){

        if(window.innerWidth < 600) {
            $("#LeftContent").css("display", "block");
        }
        $("#EmailSend").css("display", "none");
        $("#AddUsers").css("display", "block");

    });

    //Double click for if screen size is small enough
    $("#EmailPeople").dblclick(function(){
        if(window.innerWidth < 600) {
            $("#LeftContent").css("display", "none");
        }

        $("#EmailSend").css("display", "block");
        $("#AddUsers").css("display", "none");

    });

    $("#AddUsersPage").dblclick(function(){
        if(window.innerWidth < 600) {
            $("#LeftContent").css("display", "none");
        }

        $("#EmailSend").css("display", "block");
        $("#AddUsers").css("display", "none");

    });

    $("#ClosePane").click(function(){
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



});