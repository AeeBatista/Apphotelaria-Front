import renderCadastroPage from "./pages/cadastro.js";
import renderHomePage from "./pages/home.js";
import renderLoginPage from "./pages/login.js";

const routes = {
    "/login": renderLoginPage,
    "/cadastro": renderCadastroPage,
    "/home": renderHomePage
};

function getPath(){
    const url = (location.pathname || "").replace("/sitemeuMaldonado/", "/").trim();
    return url && url.startsWith("/") ? url : "/home";
}

function renderRoute() {
    const url = getPath();
    const render = routes[url] || routes["/home"];
    render();
}



document.addEventListener('DOMContentLoaded', renderRoute);