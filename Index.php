<?php 
require_once "config/database.php";
require_once "helpers/response.php";

if($erroDB){
    echo "Erro de conexão ";
    exit;
}

$uri =  Strtolower(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$method = $_SERVER['REQUEST_METHOD'];


$pasta = Strtolower(basename(dirname(__FILE__)));

$uri = str_replace("/$pasta", "", $uri);
$seguimentos = explode("/", trim($uri, "/"));

$route = $seguimentos[0] ?? null;
$subroute = $seguimentos[1] ?? null;

if($route != "api"){
    require __DIR__ . "/public/index.html";
    //require_once "teste.php";
     exit;
} 
elseif ($route === "api"){
    if(in_array($subroute, ["login"])){
        require "routes/${subroute}.php";
    }else{
        return jsonResponse(['message' => 'rota da api invalida'], 404);
    }
    exit;
}else{
    echo "404 pagina nao encontrada";
    exit;
}

?>