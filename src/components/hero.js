export default function Hero() {
  const containerHero = document.createElement('div');
  containerHero.className = 'hero d-flex justify-content-center';
  containerHero.innerHTML = 
  `
  <div class="hero-frame">
    <!-- Removi o carousel-fade -->
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-inner shadow rounded-3">
        <div class="carousel-item active">
          <img class="hero-img d-block" src="public/assets/img/g1.jpg" alt="Vista do Hotel">
        </div>
        <div class="carousel-item">
          <img class="hero-img d-block" src="public/assets/img/q1.png" alt="Jantar no Hotel">
        </div>
        <div class="carousel-item">
          <img class="hero-img d-block" src="public/assets/img/j1.png" alt="Lucho">
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Próximo</span>
      </button>

    </div>
  </div>`;

  return containerHero;
}
