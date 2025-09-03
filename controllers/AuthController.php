<?php
 
    require_once __DIR__ ."/../models/UserModel.php";
    require_once  __DIR__ ."/passwordController.php";
    require_once __DIR__ ."/../helpers/token_jwt.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";
 
 
    class AuthController{
        public static function login($con, $data){
            $data['email'] = trim($data['email']);            
            $data['senha'] = trim($data['senha']);
           
            //confirmar se tem algum campo vazio
           if( empty($data['email']) || empty($data['senha'])){
                return jsonResponse([
                    "status"=>"erro",
                    "message"=>"preencha todos os campos!!!"
                ],401);
           }
 
            $user = UserModel::validateUser($con, $data["email"], $data["senha"]);
            if($user){
                $token = CreateToken($user);
                return jsonResponse([ "token"=>$token]);
            }else{
                return jsonResponse(["resposta"=>"vishiiiiiii!!!"], 404);
            }
 
        }
    }
 
 
?>