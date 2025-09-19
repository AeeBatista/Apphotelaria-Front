<?php

    class ClientModel{
        public static function listarTodos(){
            $sql = "SELECT * FROM quartos";
            $result = $con->query($sql);
            return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function buscarPor(){

    }

    public static function criar(){

    }

    public static function atualizar(){
            
    }

    public static function deletar(){
            
    }
}
?>