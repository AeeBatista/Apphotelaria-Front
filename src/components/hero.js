export default function Hero() {
  const containerHero = document.createElement('div');
  containerHero.className = 'hero w-100 d-flex justify-content-center';
  containerHero.innerHTML = 
  `
  <div class = "hero-frame w-100">
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
    

    <div class="carousel-inner shadow">
      <div class="carousel-item active">
        
        <img class=" w-100" src="public/assets/img/vista_hotel.webp" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class=" w-50" src="public/assets/img/hotel_jantar.webp" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class=" w-50" src="public/assets/img/lucho.webp" alt="Third slide">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

    </div>

  </div>`;

  return containerHero;
}
