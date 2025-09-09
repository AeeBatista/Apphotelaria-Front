<?php
    require_once __DIR__ ."/controllers/AuthController.php";
    require_once __DIR__ ."/controllers/PasswordController.php";
    require_once __DIR__ ."/controllers/QuartoController.php";

    $data = [
        "nome" => "Quarto free",
        "numero_quarto" => 3,
        "qtd_cama_casal" => 2,
        "qtd_cama_solteiro" => 3,
        "preco" => 700,
        "disponivel" => 2,
        "password" => 123456
    ];

    // QuartoController::atualizar($con, $id = 4, $data);

    //AuthController::login($con, $data);

    
    //$tokenInvalido = 
    //echo validateToken($token);
    //$tokenValido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaXRlbWV1TWFsZG9uYWRvIiwiaWF0IjoxNzU2OTI3NTc1LCJleHAiOjE3NTY5MzExNzUsInN1YiI6eyJpZCI6MTEsIm5vbWUiOiJQYW1lbGxhIFBlcmV0byIsImVtYWlsIjoicGFtZWxsYXBlcmV0b0BnbWFpbC5jb20iLCJjYXJnb3MiOiJDYXJnbyJ9fQ.-bo1Aga6YMGuMnb5-uGDpYDpouRmKyyHaxLMbsxo3hI";
    //echo var_dump(validateToken($tokenValido));
    

   echo PasswordController::generateHash($data['password']);

    //$hash = ''
    //echo "<br>";
    //echo PasswordController::validateHash($data['password'], $hash);
?>