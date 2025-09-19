<?php
    class ClienteModel{
        public static function listarTodos(){

        }

        public static function buscarPor(){

        }

        public static function criar($con, $data){
          $sql = "INSERT INTO clientes(nome, cpf, telefone, email, senha) VALUES (?,?,?,?,?)";

             $stmt = $con->prepare($sql);
             $stmt->bind_param("sssss", 
                $data["nome"],
                $data["cpf"],
                $data["telefone"],
                $data["email"],
                $data["senha"]
        );
        return $stmt->execute();

        }

        public static function atualizar(){
            
        }

        public static function deletar(){
            
        }
    }

?>