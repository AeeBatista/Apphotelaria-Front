<?php
    require_once __DIR__ ."/controllers/AuthController.php";
    require_once __DIR__ ."/controllers/PasswordController.php";
    require_once __DIR__ ."/controllers/QuartoController.php";
    require_once __DIR__ ."/controllers/UsuarioController.php";
    require_once __DIR__ ."/controllers/ClienteController.php";
    require_once __DIR__ ."/controllers/PedidoController.php";

    
   
   

    // $data = [
    //     "nome" => "Tonhão",
    //     "email" => "Tinho@gmail.com",
    //     "senha" => PasswordController::generateHash("109876")
    // ];


    // $data = [
    //     "nome" => "Tonhão",
    //     "cpf" => "999.888.777-6",
    //     "telefone" => "(11) 88483-9299",
    //     "email" => "Tinho@gmail.com",
    //     "senha" => "109876",
    //     "cargos_id" => 7
    // ];

    $data = [
        "fk_usuario_id" => 15,
        "fk_cliente_id" => 2,
        "pagamento" => 1
    ];


    // $data = [
    //     "nome" => "Quarto white",
    //     "numero_quarto" => 2,
    //     "qtd_cama_casal" => 1,
    //     "qtd_cama_solteiro" => 0,
    //     "preco" => 100,
    //     "disponivel" => 1

    // ];

    PedidoController::criar($con, $id);


    // DELETAR
    //QuartoController::deletar($con, 10);

    //AuthController::login($con, $data);

    // 
    //$tokenInvalido = 
    //echo validateToken($token);
    //$tokenValido = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaXRlbWV1TWFsZG9uYWRvIiwiaWF0IjoxNzU2OTI3NTc1LCJleHAiOjE3NTY5MzExNzUsInN1YiI6eyJpZCI6MTEsIm5vbWUiOiJQYW1lbGxhIFBlcmV0byIsImVtYWlsIjoicGFtZWxsYXBlcmV0b0BnbWFpbC5jb20iLCJjYXJnb3MiOiJDYXJnbyJ9fQ.-bo1Aga6YMGuMnb5-uGDpYDpouRmKyyHaxLMbsxo3hI";
    //echo var_dump(validateToken($tokenValido));
    

//    echo PasswordController::generateHash($data['password']);

    //$hash = ''
    //echo "<br>";
    //echo PasswordController::validateHash($data['password'], $hash);
?>