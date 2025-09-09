export async function loginRequest(email, senha){
    const dados ={email, senha};


    const response = await fetch("api/login", {
        method: "POST",
        headers: {
           "Accept": "application/json",
           "Content-type": "application/json"
        },
        
        body: JSON.stringify(dados),
        //body: new URLSearchParams({"email":email, "password": senha}).toString(),

        /* URL da requisisção é a mesma da origem do front (mesmo protocolo http/mesmo dominio - local/mesma porta 80 do servidor web Apache)
        Front: http://localhost/sitemeuMaldonado/public/index.html
        Back: http://localhost/sitemeuMaldonado/api/login.php
        */
       credentials: "same-origin"
    });

    // Interpreta a resposta como JSON
    let data = null;
    try{
        data = await response.json();
    }
    catch{
        // Se não for JSON válido, data permanece null
        data = null;
    }

    if(!data ||data.token){
        const message = "Resposta inválida do servidor. Token ausente";
        return{ok: false, token: null, raw: data, message};

    }

    return {
        ok: true,
        user: data.user ?? null,
        raw: data
    };
}
    /* Função para salvar a chave token após autenticação confirmada,
    ao salvar no local storage, o usuário poderá mudar de página, fechar
    o site e ainda assim permanecer logado, DESDE QUE O TEMPO NÃO TENHA EXPIRADO(1h)
    */

    export function saveToken(token){
    localStorage.setItem("auth_token", token);
   }

   /*Recuperar a chave a cada página que o usuário navegar */
   export function getToken(){
    return localStorage.getItem("auth_token");
   }

   /*Função para remover a chave token quando o usuário deslogar*/
   export function clearToken(){
    localStorage.removeItem("auth_token");
   }
