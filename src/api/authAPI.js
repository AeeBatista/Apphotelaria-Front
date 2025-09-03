export async function loginRequest(email, senha){
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
           "Accept": "application/json",
           "Content-type": "application/x-www-urlencoded;charset=UTF-8"
        },
        body: new URLSearchParams({email, senha}).toString(),

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

    return {
        ok: true,
        user: data.user ?? null,
        raw: data
    };
}