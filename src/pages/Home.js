import Footer from "../components/Footer.js";
import Hero from "../components/hero.js";
import Navbar from "../components/NavBar.js";
import RoomCard from "../components/RoomCard.js";
import Busca from "../components/Busca.js";

export default function renderHomePage(){
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);
    
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    // Busca primeiro
    //const busca = Busca();
    //divRoot.appendChild(busca);

    // Depois o Hero
    const hero = Hero();
    divRoot.appendChild(hero);

    // Footer
    const foot = document.getElementById('footer');
    foot.innerHTML = '';
    const footer = Footer();
    foot.appendChild(footer);

    // RoomCard
    const roomcard = document.getElementById('roomcard');
    roomcard.innerHTML = '';
    const room = RoomCard(); 
    roomcard.appendChild(room);

    return divRoot;
}

