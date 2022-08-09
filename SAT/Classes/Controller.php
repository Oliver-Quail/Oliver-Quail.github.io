<?php
/*
    Created By: Oliver Quail
    Contact: quailo@kardinia.vic.edu.au
    Date Created: 20/06/2022
    Purpose: to interact with the database
*/
    class Controller extends Model{
        private $StringFiler = "FILTER_UNSAFE_RAW";

        function C_CreateChat($CurrentUser, $OtherUser) {
            $F_CurrentUser = filter_var($CurrentUser, FILTER_UNSAFE_RAW);
            $F_OtherUser = filter_var($OtherUser, $this->DefaultFilter);
            $this->M_CreateChat($F_CurrentUser, $F_OtherUser);


        }

    }
?>