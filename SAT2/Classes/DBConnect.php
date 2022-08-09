<?php 

class DBConnect {
    protected $Prefix = "ranthor_";
    protected $DefaultFilter = "FILTER_UNSAFE_RAW";
    protected function connect() {
        Define("DBUSER", "root");
        Define("DBPASS", "");
        Define("DBHOST", "localhost");
        Define("DBNAME", "kardinians_db");

        try {
            $dbcon = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            mysqli_set_charset($dbcon, "utf8");

        }
        catch(Exception $e) {
            print($e->getMessage());


        }
        catch(Error $e){
            print($e->getMessage());




        }
        return $dbcon;




    }

    //Validate Query to see if it is working
    protected function ValidateQuery($Con, $Query) {
        if(!mysqli_stmt_prepare($Con, $Query)) {
            echo "An internal system error has occured. Please contact your administrator for more details";
            exit();
        }

    }
}



?>