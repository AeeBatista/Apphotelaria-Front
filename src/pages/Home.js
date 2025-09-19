import Footer from "../components/Footer.js";
import Hero from "../components/hero.js";
import Navbar from "../components/NavBar.js";
import Busca from "../components/Busca.js";
import RoomCard from "../components/RoomCard.js";


export default function renderHomePage() {
  const nav = document.getElementById('navbar');
  nav.innerHTML = '';
  
  const navbar = Navbar();
  nav.appendChild(navbar);
  
  const divRoot = document.getElementById('root');
  divRoot.innerHTML = '';

  // Busca primeiro (vai ficar acima do Hero)
  const busca = Busca();
  divRoot.appendChild(busca);

  // Depois o Hero
  const hero = Hero();
  divRoot.appendChild(hero);

  // Agora os cards (abaixo do Hero)
  const cardsGroup = document.createElement('div');
  cardsGroup.className = "cards";

  for (let i = 0; i < 3; i++) {
    const card = RoomCard();
    cardsGroup.appendChild(card); //  agora adiciona no container correto
  }

  divRoot.appendChild(cardsGroup); // finalmente adiciona o container ao DOM

  // Footer
  const foot = document.getElementById('footer');
  foot.innerHTML = '';
  const footer = Footer();
  foot.appendChild(footer);

  return divRoot;
}


