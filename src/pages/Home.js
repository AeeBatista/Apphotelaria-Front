import Footer from "../components/Footer.js";
import Hero from "../components/hero.js";
import Navbar from "../components/NavBar.js";
import RoomCard from "../components/RoomCard.js";


export default function renderHomePage(){
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);
    
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = Hero();
    divRoot.appendChild(hero);


    const foot = document.getElementById('footer');
    foot.innerHTML = '';

    const footer = Footer();
    foot.appendChild(footer);

    const roomcard = document.getElementById('roomcard');
    roomcard.innerHTML = '';

    const room = RoomCard(); 
    room.appendChild(roomcard);

    return divRoot;
  
}