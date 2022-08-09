<?php
    /*
        Created By: Oliver Quail
        Contact: quailo@kardinia.vic.edu.au
        Date Created: 20/06/2022
        Purpose: to input data into the database
    */
    class View extends Model {

        //Get chats to display to the user on screen
        function V_GetChats($UserName) {
            //Filter data given by user
            $F_UserName = htmlspecialchars($UserName, ENT_QUOTES);
            $Result = $this->M_GetChats($F_UserName);
            $DataToReturn = array();

            //Iterate over returned data filtering it
            while($Row = mysqli_fetch_assoc($Result)) {
                $F_Member1 = htmlspecialchars($Row['Member1'], ENT_QUOTES);
                $F_Member2 = htmlspecialchars($Row["Member2"], ENT_QUOTES);
                //Find out which member isn't the user
                $F_Member = $F_Member1 == htmlspecialchars($_SESSION["UserName"]) ? $F_Member2 : $F_Member1;
                $F_ChatId = filter_var($Row["ChatId"], FILTER_SANITIZE_NUMBER_INT);
                array_push($DataToReturn, array("Member"=>$F_Member, "ChatId"=>$F_ChatId, "ProfilePicture"=>$this->M_GetPhoto($F_Member)));
            } 
            mysqli_free_result($Result);
            //encode data in json and return it to API
            return json_encode($DataToReturn);
            
        }

        

        //Get messages function
        function V_GetMessages($ChatId, $UserId) {
            //Validate data type
            if(!filter_var($ChatId, FILTER_VALIDATE_INT)) {
                return -28;
            }
            else if(!filter_var($UserId, FILTER_VALIDATE_INT)) {
                return -28;
            }
            //filter variable
            $F_ChatId = filter_var($ChatId, FILTER_SANITIZE_NUMBER_INT);
            $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);

            $Result = $this->M_GetMessages($F_ChatId);

            $DataToReturn = array();
            
            //Existance check returned data
           if($this->ValidateExistance($Result, "Array")){
                return -9;
           }

            //filter variables ready for Json conversion
            while($Row = mysqli_fetch_assoc($Result)) {
                $F_MessageContents = htmlspecialchars($Row["MessageContents"], ENT_QUOTES);
                $F_SenderId = filter_var($Row["SenderId"], FILTER_SANITIZE_NUMBER_INT);
                $Sender = $F_SenderId == $F_UserId  ? 1:2;
                array_push($DataToReturn, array("MessageContents"=>$F_MessageContents, "Sender"=>$Sender));
            }
            mysqli_free_result($Result);
            return json_encode($DataToReturn);
        }

        //Get the users profile picture and return it to the api 
        function V_GetProfilePicture($UserId) {
            //Validate User ID
            if(!filter_var($UserId, FILTER_VALIDATE_INT)) {
                return -9;
            }
            //Check if the session variable already exits. If it doesn't it will get the location of the image from the data base
            //Otherwise it will just hand over the session varible to save resources
            elseif(!isset($_SESSION["ProfilePicture"])) {
                $F_UserId = filter_var($UserId, FILTER_SANITIZE_NUMBER_INT);
                $Result = $this->M_GetProfilePicture($F_UserId);
                //Validate result from model
                if($this->ValidateExistance($Result, "Array")) {
                    return -9;
                }
                else {
                    $F_ProfilePicture = "";
                    while($PictureLocation = mysqli_fetch_assoc($Result)) {
                        $F_ProfilePicture = $PictureLocation["ProfilePictureLocation"];
                    }
                    //Set ProfilePicture location's value
                    $_SESSION["ProfilePicture"] = ($F_ProfilePicture == "") ? "Images/Default.png" : $F_ProfilePicture;
                    //return to API
                    return $_SESSION["ProfilePicture"];
                }

            }
            else {
                return $_SESSION["ProfilePicture"];
            }


        }


        //Get admin posts
        function V_GetAdminPost($Id) {
            $Data = $this->M_GetAdminPosts();
            $ArrayToJSON = array();
            $F_Id = filter_var($Id, FILTER_SANITIZE_NUMBER_INT);
            //Turn result in an array and filter it
            while($Row = mysqli_fetch_assoc($Data)) {
                $F_Text = htmlspecialchars($Row["PostText"], ENT_QUOTES);
                $F_Image = $Row["PostImageLocation"];
                $F_Likes = filter_var($Row["LikeCount"], FILTER_SANITIZE_NUMBER_INT);
                $F_LikeByUser = strpos($Row["LikedBy"], $F_Id)  ? 1:2;
                if(strpos($Row["LikedBy"], $F_Id)) {
                    $F_LikeByUser  = 1;
                }
                else {
                    $F_LikeByUser = 2;
                }
                $F_PostId = $Row["PostId"];
                array_push($ArrayToJSON, array("Text"=>$F_Text, "Image"=>$F_Image, "Likes"=>$F_Likes, "LikedByUser"=>$F_LikeByUser, "PostId"=>$F_PostId));   
            }
            //encode into json and return to API
            return json_encode($ArrayToJSON);

        }

        





}





    


?>