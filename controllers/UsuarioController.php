<?php
require_once __DIR__ . "/../models/UsuarioModel.php";

class UsuarioController{

    public static function criar($con, $data){
        $result = UsuarioModel::criar($con, $data);
        if ($result){
            // acertou zé ruela
           return jsonResponse(['message'=>"usuario criado com sucesso"]);
        }else{
            // errou barrigudo
           return jsonResponse(['message'=>"Erro ao criar user!"], 400);
        }
    }
    public static function listarTodos($con){
        $listaQuartos = UsuarioModel::listarTodos($con);
        return jsonResponse($listaQuartos);
    }
    public static function buscarPor($con, $id){
        $buscarQuartos = UsuarioModel::buscarPor($con, $id);
        return jsonResponse($buscarQuartos);
    }

    public static function deletar($con, $id){
       $result = UsuarioModel::deletar($con, $id);
        if ($result){
            //acertou zé ruela
          return jsonResponse(['message'=>"Deletado"]);
        }else{
            //errou barrigudo
        return jsonResponse(['message'=>"Erro ao deletar"], 400);
        }
        
    }
    public static function atualizar($con, $id, $data){
        $result = UsuarioModel::atualizar($con, $id, $data);
        if ($result){
            //acertou zé ruela
        return jsonResponse(['message'=>"Atualizado com sucesso"]);
        }else{
            //errou barrigudo
        return jsonResponse(['message'=>"Erro ao atualizar Quarto!"], 400);
        //}

    }
}
}
?>