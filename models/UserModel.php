<?php 

class UserModel{

    public static function validateUser($conn, $email, $senha){
        $sql = "SELECT usuarios.id, usuarios.nome,usuarios.email, usuarios.senha, cargos.nome AS cargos FROM usuarios JOIN cargos ON cargos.id = usuarios.fk_cargo_id WHERE usuarios.email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $resultado = $stmt->get_result();

        if($user = $resultado->fetch_assoc()){
            if(PasswordController::validateHash($senha, $user['senha'])){
                unset($user['senha']);             
                return $user;
            }
        }
        return false;

    }
}

?>