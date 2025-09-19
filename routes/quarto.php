<?php
 
require_once __DIR__ . "/../controllers/QuartoController.php";
 
if ( $_SERVER['REQUEST_METHOD'] === "GET" ){
    $id = $segments[2] ?? null;
 
    if(isset($id)){
        QuartoController::getById($con,$id);
    }
    else{
        QuartoController::getAll($con);
    }
}  
elseif($_SERVER['REQUEST_METHOD'] === "POST"){
        $data = json_decode(file_get_contents('php://input'), true);
        QuartoController::criar($con,$data);
  }
  elseif($_SERVER['REQUEST_METHOD'] === "PUT"){
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'];
        QuartoController::atualizar($con,$id,$data);
  }
 
elseif ( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
    $id = $segments[2] ?? null;
 
    if(isset($id)){
        QuartoController::delete($con,$id);
    }
    else{
        jsonResponse(['message'=>"ID do quarto é obrigatório"],400);
    }

}

 
else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Método não permitido'
    ], 400);
}
 
?>