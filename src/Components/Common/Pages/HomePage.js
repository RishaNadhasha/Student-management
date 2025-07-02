import React from 'react'

function HomePage() {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://epe.brightspotcdn.com/64/73/ff35f82b4be3b2bad0eeb7362927/12172020-tc-williams-from-king-street-cc.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://lh3.googleusercontent.com/proxy/c-FtQZE5X7ROBZ2JVC3QLs2Oa46kFtknqBcxQuTrTA-0d6PJq5ErcioFTjqyn0GQg9Kv6eMEPlGGF1ldwKkS5rPYvBEyhkycl70jQPhbtQor3Cj6d9IBguPCVp0LlB8fWkZ64EGdgcxBmvQl6vNfTQ" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.nawy.com/blog/wp-content/uploads/2022/09/schools-in-new-cairo.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default HomePage
