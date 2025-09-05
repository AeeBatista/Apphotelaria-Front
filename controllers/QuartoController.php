<?php
require_once __DIR__ . "/../models/QuartoModel.php";

class QuartoController{

    public static function criar($con, $data){
        //$result = QuartoModel::criar($con, $data);
        //if ($result){
            //acertou zé ruela
          //  return jsonResponse(['message'=>"Quarto criado com sucesso"]);
        //}else{
            //errou barrigudo
          //  return jsonResponse(['message'=>"Erro ao criar Quarto!"], 400);
        //}
    }
    public static function listarTodos($con){
        $listaQuartos = QuartoModel::listarTodos($con);
        return jsonResponse($listaQuartos);
    }
    public static function buscarPor($con, $id){
        $buscarQuartos = QuartoModel::buscarPor($con, $id);
        return jsonResponse($buscarQuartos);
    }
    public static function deletar($con, $id){
       $result = QuartoModel::deletar($con, $id);
        if ($result){
            //acertou zé ruela
          return jsonResponse(['message'=>"Deletado"]);
        }else{
            //errou barrigudo
        return jsonResponse(['message'=>"Erro ao deletar"], 400);
        }
    }
    public static function atualizar($con, $id, $data){
        $result = QuartoModel::atualizar($con, $id, $data);
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