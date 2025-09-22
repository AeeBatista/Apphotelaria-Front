// getTiken() é uma função que retorna o valor do token armazenado do localStorage(),
// para que o usúario permaneça logado mesmo que mude de página e não tenha que "re-logar"*/
import { getToken } from "./authAPI";

export async function listAllQuartosRequest() {
    /*retorna o valor do token armazenadoque comprova a auntenticação do usuario */
    const token = getToken();

    const response = await fetch("api/quartos", {
        method: "GET",
        headers: {
        "Accept": "application/json",
        "Content-type": "application/json"

        },

        credentials: "same-origin"
    })
    
}