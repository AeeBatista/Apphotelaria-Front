<?php
    class PedidoModel{
        public static function listarTodos(){
            $sql = "SELECT * FROM pedidos";
            $result = $con->query($sql);
            return $result->fetch_all(MYSQLI_ASSOC);
        }

        public static function buscarPor(){



        }

        public static function criar(){
            $sql = "INSERT INTO pedidos(fk_usuario_id,fk_cliente_id,data,pagamento) VALUES (?,?,?)";

            $stmt = $con->prepare($sql);
            $stmt->bind_param("iis", 
            $data["fk_usuario_id"],
            $data["fk_cliente_id"],
            $data["data"],
            $data["pagamento"]
        );
        return $stmt->execute();


        }

        public static function atualizar(){
            
        }

        public static function deletar(){
            
        }
    }

?>
