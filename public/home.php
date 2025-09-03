<?php 
    require_once "../config/database.php";
    require_once "../controllers/authenticController.php";
    $title = 'Home';
    
    $data = [
        "email"=>"danilo.acorrea@gmail.com",
        "senha"=>"123456"
    ];

    authentiqueController::login($con, $data);


?>
    <h1>HOME</h1>

<?php 
    require_once 'utils/rodape.php';

?>