<?php 
require_once "configurar.php";

 
$erroDB = false;
try{
    $con = new mysqli(DB_, DB_USER, DB_PASSWORD, DB_NAME);
   
    if($con->connect_error){
        $erroDB = true;
    }
   
}catch(mysqli_sql_exception $erro){
    $erroDB = true;
}   

?>