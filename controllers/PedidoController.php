<?php
require_once __DIR__ . "/../models/PedidoModel.php";

class PedidoController{

    public static function criar($con, $data){
        $result = PedidoModel::criar($con, $data);
        if ($result){
            // acertou zé ruela
           return jsonResponse(['message'=>"Pedido criado com sucesso"]);
        }else{
            // errou barrigudo
           return jsonResponse(['message'=>"Erro ao criar Pedido!"], 400);
        }
    }
    public static function listarTodos($con){
        $listaPedidos = PedidoModel::listarTodos($con);
        return jsonResponse($listaQuartos);
    }
    public static function buscarPor($con, $id){
        $buscarPedidos = PedidoModel::buscarPor($con, $id);
        return jsonResponse($buscarQuartos);
    }
    public static function deletar($con, $id){
       $result = PedidoModel::deletar($con, $id);
        if ($result){
            //acertou zé ruela
          return jsonResponse(['message'=>"Deletado"]);
        }else{
            //errou barrigudo
        return jsonResponse(['message'=>"Erro ao deletar"], 400);
        }
    }
    public static function atualizar($con, $id, $data){
        $result = PedidoModel::atualizar($con, $id, $data);
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