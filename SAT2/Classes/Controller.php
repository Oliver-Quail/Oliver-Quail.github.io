<?php
/*
    Created By: Oliver Quail
    Contact: quailo@kardinia.vic.edu.au
    Date Created: 20/06/2022
    Purpose: to input data into the database
*/

    /* 
        FUNCTION OVERVIEW:

        NOTE: C_ stands for Controller

        function C_FunctionName($value) {
            Filter values
            Pass values to model
        }

    */
    //Create class
    class Controller extends Model{

        //Create chat functionality 
        function C_CreateChat($CurrentUser, $OtherUser) {
            $F_CurrentUser = filter_var($CurrentUser, FILTER_UNSAFE_RAW);
            $F_OtherUser = filter_var($OtherUser, FILTER_UNSAFE_RAW);
            $this->M_CreateChat($F_CurrentUser, $F_OtherUser);


        }

        /* Send message functionality */

        function C_SendMessage($MessageText, $ChatId, $SenderId) {
            $F_MessageText = htmlspecialchars($MessageText, ENT_QUOTES);
            $F_ChatId = filter_var($ChatId, FILTER_SANITIZE_NUMBER_INT);
            $F_SenderId = filter_var($SenderId, FILTER_SANITIZE_NUMBER_INT);

            $this->M_SendMessage($F_MessageText, $F_ChatId, $F_SenderId);
        }


        /* Update data functionality */

        //function to update email
        function C_UpdateEmail($NewEmail, $UserId) {
            $F_NewEmail = filter_var($NewEmail, FILTER_UNSAFE_RAW);
            $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);
            $this->M_UpdateEmail($F_NewEmail, $F_UserId);
        }

        //function to update name
        function C_UpdateName($NewName, $UserId) {
            $F_NewName = filter_var($NewName, FILTER_UNSAFE_RAW);
            $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);
            $this->M_UpdateName($F_NewName, $F_UserId);
        }


        /* Delete account functionality */
        //function to delete account
        function C_DeleteAccount($UserId) {
            $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);
            $this->M_DeleteAccount($F_UserId);
        }

        /* Like and unlike post functionality */
        //function to like post
        function C_LikePost($UserId, $PostId) {
            $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);
            $F_PostId = filter_var($PostId, FILTER_SANITIZE_NUMBER_INT);
            $this->M_LikePost($F_UserId, $F_PostId);
            exit();
        }

        //function to unlike post
        function C_UnlikePost($UserId, $PostId) {
            $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);
            $F_PostId = filter_var($PostId, FILTER_SANITIZE_NUMBER_INT);
            $this->M_UnlikePost($F_UserId, $F_PostId);

        }

        /* Upload File functionality */

        //function to upload image
        function C_UploadFile($ImageFile, $UserId) {
            //!$_FILES["image"]
            $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);
            $this->M_UploadFile($ImageFile, $F_UserId);
        }


        /* Login and out functionality */
        //function to log iin
        function C_Login($Email, $Passowrd) {
            //Validate email
            if(!filter_var($Email, FILTER_VALIDATE_EMAIL)) {
                header("Location:index.html");
            }
            $F_Email = filter_var($Email, FILTER_SANITIZE_EMAIL);
            $F_Passowrd = filter_var($Passowrd, FILTER_UNSAFE_RAW);

            return $this->M_Login($F_Email, $F_Passowrd);
        }



        //function to log out
        function C_Logout() {
            $this->M_Logout();
        }

    }
?>