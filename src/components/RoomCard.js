export default function RoomCard() {
    const roomcard = document.createElement('div');

    roomcard.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="public/assets/img/quarto_de_luxo" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Reservar</a>
  </div>
</div>`

}