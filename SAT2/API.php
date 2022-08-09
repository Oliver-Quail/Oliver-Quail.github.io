<?php
    /*
        Created By: Oliver Quail
        Contact: quailo@kardinia.vic.edu.au
        Date Created: 19/07/2022
        Purpose: Get, Update, Delete & Send data to and from a mobile application 
        which cannot connect to a database natively because of secutity concerns
    */
    require("loader.php");
    session_start();
    if($_GET["Mode"] != 'Login' && (!isset($_SESSION['Id']) || !isset($_SESSION['UserName']))) {
        exit();
    }
    //determine what method data is needed
    switch($_GET["Mode"]) {

        //Controller functions

        //Login and out functions
        case "Login":
            $Controller = new Controller();
            echo $Controller->C_Login($_POST["Email"], $_POST["Password"]);
        break;

        case "Logout":
            $Controller = new Controller();
            $Controller->C_Logout();
        break;

        //Chatting related functions
        case "CreateChat":
            $Controller = new Controller();
            $Controller->C_CreateChat($_SESSION["UserName"], $_POST["OtherUser"]);
        break;

        case "SendMessage":
            $Controller = new Controller();
            $Controller->C_SendMessage($_POST["MessageText"], $_POST["ChatId"], $_SESSION["Id"]);
        break;


        //Update data and account functions
        case "UpdateEmail":
            $Controller = new Controller();
            $Controller->C_UpdateEmail($_POST["NewEmail"], $_SESSION["Id"]);
        break;
        //need to test
        case "UpdateName":
            $Controller = new Controller();
            $Controller->C_UpdateName($_POST["NewName"], $_SESSION["Id"]);
        break;

        case "DeleteAccount":
            $Controller = new Controller();
            $Controller->C_DeleteAccount($_SESSION["Id"]);
        break;

        //Admin post related functions
        case "LikePost":
            $Controller = new Controller();
            $Controller->C_LikePost($_POST["PostId"], $_SESSION["Id"]);
        break;

        case "UnlikePost":
            $Controller = new Controller();
            $Controller->C_UnlikePost($_SESSION["Id"], $_POST["PostId"]);
        break;

        //File upload functions
        case "UploadImage":
            $Controller = new Controller();
            $Controller->C_UploadFile($_FILES["Image"], $_SESSION["Id"]);
        break;

        //View related functions

        //chatting related functions
        case "GetMessages":
            $View = new View();
            echo $View->V_GetMessages($_POST["ChatId"], $_SESSION["Id"]);
        break;

        case "GetChats":
            $View = new View();
            echo  $View->V_GetChats($_SESSION["UserName"]);
        break;
      
        case "GetProfilePicture":
            $View = new View();
            echo $View->V_GetProfilePicture($_SESSION["Id"]);
        break;

        case "GetAdminPosts":
            $View = new View();
            echo $View->V_GetAdminPost($_SESSION["Id"]);
        break;

        default:
            echo "Invalid request";
        break;
    }





?>