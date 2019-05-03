$(document).ready(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    dots: true,
    items: 4,
    loop: true,
    margin: 10,
    autoHeight: true,
    autoplay: true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
  $(".play").on("click", function() {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function() {
    owl.trigger("stop.owl.autoplay");
  });
});

let partners = JSON.parse(localStorage.getItem("partners"));
partners.map(partner => {
  let partnersDiv = document.createElement("div");
  partnersDiv.setAttribute("class", "col-xs-6 col-sm-6 col-md-2 col-lg-2");
  partnersDiv.innerHTML = `
      <a href=${partner.url} target="_blank">
        <img src=${partner.img} alt=${partner.name}/>
      </a>
    `;
  document.getElementById("all-partners").appendChild(partnersDiv);
});

let cardProducts = JSON.parse(localStorage.getItem("proizvodi"));
cardProducts.slice(0, 7).map(proizvod => {
  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "owl-cont");
  cardDiv.innerHTML = `
  <div class="card" style="width:400px">
      <img
        class="card-img-top"
        src=${proizvod.img}        
        alt=${proizvod.name}        
        style="width:100%"
      />
      <div class="card-body">
        <h4 class="card-title">${proizvod.name}</h4>
        <a href="proizvod.html?id=${proizvod.id}" class="btn btn-primary">Detaljnije</a>
      </div>
    </div>
  `;

  document.getElementById("all-cards").appendChild(cardDiv);
});
