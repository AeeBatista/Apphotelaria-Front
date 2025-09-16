export default function RoomCard() {
  const roomcard = document.createElement('div');

  roomcard.innerHTML =
    `
      <div class="card" style="width: 18rem;">

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

      <div class="carousel-inner shadow rounded-3">
        
    </div>
      <img src="public/assets/img/q1.png" class="card-img-top" alt="...">
      
      











    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>  

    `
    return roomcard;

}