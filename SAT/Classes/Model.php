<?php
/*
    Created By: Oliver Quail
    Contact: quailo@kardinia.vic.edu.au
    Date Created: 13/06/2022
    Purpose: to interact with the database
*/



    class Model extends DBConnect {
        private $Connnection;

        //Create database connection on instatntiate of class
        function __construct()
        {
            @$this->Connnection = $this->connect();
        }

        /* User messaging related functions */

        //Gey all chats a user can access
        protected function M_GetChats($UserName) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "SELECT Member1, Member2, ChatId FROM t_chats WHERE Member1 = ? OR Member2 = ?";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "ss", $UserName, $UserName); 
            mysqli_stmt_execute($Con);  
            $Result = mysqli_stmt_get_result($Con);
            return $Result;
                    
        }

      
        //Create a Chat with other users
        protected function M_CreateChat($User, $OtherUser) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "INSERT INTO t_chats (Member1, Member2) VALUES (?,?)";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "ss", $User, $OtherUser);  
            mysqli_stmt_execute($Con);  
            $Result = mysqli_stmt_get_result($Con);
            return $Result;
                    
       
        }

          //Send message to another user in the chat
          protected function M_SendMessage($MessageText, $ChatId, $SenderId) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "INSERT INTO t_messages (SenderId, ChatId, MessageContents) VALUES (?,?,?)";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "iis", $SenderId, $ChatId, $MessageText);   
            mysqli_stmt_execute($Con);   
            $Result = mysqli_stmt_get_result($Con);
            return $Result;
                   
         
        }

        //Get messages in a chat 
        protected function M_GetMessages($ChatId) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "SELECT * FROM t_messages WHERE ChatId = ?";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "i", $ChatId);   
            mysqli_stmt_execute($Con);
            $Result = mysqli_stmt_get_result($Con);
            return $Result;
            
        }

        /* Utility functions */

        //Get the users profile picture
        protected function M_GetProfilePicture($UserName) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "SELECT ProfilePictureLocation FROM t_users WHERE UserName = ?";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "s", $UserName);   
            mysqli_stmt_execute($Con);
            $Result = mysqli_stmt_get_result($Con);
            return $Result; 
        }
        

        /* Update data functions */

        //Update a users email
        protected function  M_UpdateEmail($Email, $UserName) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "UPDATE t_users SET Email = ? WHERE UserName = ?";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "ss", $Email,$UserName);   
            mysqli_stmt_execute($Con);
            $Result = mysqli_stmt_get_result($Con);
            return $Result; 
        }

        //update a user's name
        protected function  M_UpdateName($Name, $UserName) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "UPDATE t_users SET UserName = ? WHERE UserName = ?";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "ss", $Name, $UserName);   
            mysqli_stmt_execute($Con);
            $Result = mysqli_stmt_get_result($Con);
            return $Result; 
        }

        /* delete functions */

        //Delete user's account
        protected function M_DeleteAccount($UserName) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "DELETE FROM t_users WHERE UserName = ?";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "s", $UserName);   
            mysqli_stmt_execute($Con);
            $Result = mysqli_stmt_get_result($Con);
            return $Result; 
        }

        /*Login in and out functions */
        
        //Login function
        protected function M_Login($Email, $Password) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "SELECT Password, UserName, Id FROM t_users WHERE Email = ? LIMIT 1";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "s", $Email);   
            mysqli_stmt_execute($Con);
            $Result = mysqli_stmt_get_result($Con);
            $ReturnedData = mysqli_fetch_array($Result);
            $F_ReturnedPassword = filter_var($ReturnedData["Password"], $this->DefaultFilter);
          
            if(empty($ReturnedPassword["Password"])) {
                header("Location: ../index.html");
                exit();
            }
            if($F_ReturnedPassword == $Password) {
                session_start();
                $_SESSION["UserName"] = filter_var($ReturnedData["UserName"], $this->DefaultFilter);
                $_SESSION["Email"] = $Email;
                $_SESSION["Id"] = filter_var($ReturnedData["Id"], FILTER_SANITIZE_NUMBER_INT);
                mysqli_free_result($Result);
                header("Location:Home.html");


                
            }
            header("Location:index.html");
            mysqli_free_result($Result);
            exit();
            
        }

        //Logout function
        protected function M_Logout() {
            session_destroy();
            header("Location:index.html");
        }

        /* admin post related functions */

        //Add liked to admin post
        protected function M_LikePost($UserId, $PostId) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "UPDATE adminposts SET LikedBy = CONCAT((SELECT LikedBy FROM adminposts), ',', ?) WHERE Id = ? ";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "si", $UserId, $PostId);   
            mysqli_stmt_execute($Con);
            $Result = mysqli_stmt_get_result($Con);
            return $Result;

        }

        //remove like from admin post
        protected function M_UnlikePost($UserId, $PostId) {
            $Con = mysqli_stmt_init($this->Connnection);
            $Query = "SELECT LikedBy FROM adminposts WHERE Id = ?";
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "s", $PostId);   
            mysqli_stmt_execute($Con);
            $F_LikedBy = filter_var(mysqli_fetch_array(mysqli_stmt_get_result($Con))["LikedBy"], $this->DefaultFilter);
            $F_LikedBy = str_replace($UserId, '', $F_LikedBy);
            $Query = "UPDATE adminposts SET LikedBy = ? WHERE Id = ?";
            $Con = mysqli_stmt_init($this->Connnection);
            $this->ValidateQuery($Con, $Query);
            mysqli_stmt_bind_param($Con, "si", $F_LikedBy, $Id);
            mysqli_stmt_execute($Con);
        }

        /*Uploading functions */

        //add an image to the database and uplaod it to server
        protected function M_UploadFile($fileNameNew, $UserId) {
            $file = $_FILES["image"];
            //get file data
            $fileName = $file['name'];
            $fileTemName = $file['tmp_name'];
            $fileSize = $file['size'];
            $fileError = $file['error'];
            $fileType = $file['type'];
        
            $fileExt = explode('.', $fileName);
            $fileActualExt = strtolower(end($fileExt));
            
            $allowed = array("jpg", "jpeg", "png", "gif");
            //check if file is of valid type
            if(in_array($fileActualExt, $allowed)) {
                //check for errors
                if($fileError === 0) {
                    //check file size
                    if($fileSize < 5000000000) {
                       //give file unique name 
                       $fileNameNew = uniqid('', true).".".$fileActualExt;
                       $fileDestination = "uploads/".$fileNameNew;
                       //move file to server
                       move_uploaded_file($fileTemName, $fileDestination);
                       $Query = "UPDATE t_users SET PostImageLocation = ? WHERE Id = ?";
                       $Con = mysqli_stmt_init($this->Connnection);
                       $this->ValidateQuery($Con, $Query);
                       mysqli_stmt_bind_param($Con, "ss", $fileNameNew, $UserId);
                       mysqli_stmt_execute($Con);
        
                    }
                    else {
                        echo "your file was too big";
                    }
        
                }
                else {
                    echo "error occurd while uploading file";
                }
            }
            else {
                echo"not allowed file type";
            }
        
        
        }


        







        //Close connection to database on destruction of class
        function __destruction() {
            mysqli_close($this->Connection);

        }
    

    }





?>