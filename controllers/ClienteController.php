<?php
require_once __DIR__ . "/../models/ClienteModel.php";
require_once "PasswordController.php";

class ClienteController{

    public static function criar($con, $data){
       
        $result = ClienteModel::criar($con, $data);
        $data['senha'] = PasswordController::generateHash($data['senha']);

        if ($result){
            // acertou zé ruela
           return jsonResponse(['message'=>"Cliente inserido com sucesso"]);
        }else{
            // errou barrigudo
           return jsonResponse(['message'=>"Erro ao inserir Cliente!"], 400);
        }
    }
    public static function listarTodos($con){
        $listaClientes = ClienteModel::listarTodos($con);
        return jsonResponse($listaClientes);
    }
    public static function buscarPor($con, $id){
        $buscarClientes = ClienteModel::buscarPor($con, $id);
        return jsonResponse($buscarClientes);
    }
    public static function deletar($con, $id){
       $result = ClienteModel::deletar($con, $id);
        if ($result){
            //acertou zé ruela
          return jsonResponse(['message'=>"Deletado"]);
        }else{
            //errou barrigudo
        return jsonResponse(['message'=>"Erro ao deletar"], 400);
        }
    }
    public static function atualizar($con, $id, $data){
        $result = CLienteModel::atualizar($con, $id, $data);
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