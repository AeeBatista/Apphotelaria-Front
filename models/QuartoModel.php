<?php
 class QuartoModel{
        public static function listarTodos($con){
            $sql = "SELECT * FROM quartos";
            $result = $con->query($sql);
            return $result->fetch_all(MYSQLI_ASSOC);

        }

        public static function buscarPor($con, $id){

            $sql = "SELECT * FROM quartos WHERE id = ?";
            $stmt = $con->prepare($sql);
            $stmt->bind_param("i", $id);
            $stmt->execute();
            return $stmt->get_result()->fetch_assoc();

        }

        public static function criar($con, $data){
             //$sql = "INSERT INTO quartos(nome, numero_quarto,qtd_cama_casal,qtd_cama_solteiro,preco,disponivel) VALUES (?,?,?,?,?,?)";

             //$stmt = $con->prepare($sql);
             //$stmt->bind_param("siiidi", 
                //$data["nome"],
                //$data["numero_quarto"],
                //$data["qtd_cama_casal"],
                //$data["qtd_cama_solteiro"],
                //$data["preco"],
                //$data["disponivel"]
        //);
        //return $stmt->execute();

        }

        public static function atualizar($con, $id,$data){

             $sql = "UPDATE quartos SET nome = ?, numero_quarto = ?, qtd_cama_casal = ?, qtd_cama_solteiro = ?, preco = ?, disponivel = ? WHERE id = ?";

             $stmt = $con->prepare($sql);
             $stmt->bind_param("siiidii", 
                $data["nome"],
                $data["numero_quarto"],
                $data["qtd_cama_casal"],
                $data["qtd_cama_solteiro"],
                $data["preco"],
                $data["disponivel"],
                $id
        );
        return $stmt->execute();

            
        }

        public static function deletar($con, $id){
            $sql = "DELETE FROM quartos WHERE id = ?";
            $stmt = $con->prepare($sql);
            $stmt->bind_param("i", $id);
            return $stmt->execute();
            
        }

    }

?>