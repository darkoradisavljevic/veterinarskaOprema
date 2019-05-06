// Slajder za prikaz proizvoda na početnoj strani
$(document).ready(function() {
  const owl = $(".owl-carousel");
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

// Random proizvodi koji će se prikazivati u slajderu
let randomProizvodi = proizvodi.sort(() => Math.random() - 0.5);
randomProizvodi.map(proizvod => {
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
        <a href="proizvod.html?id=${
          proizvod.id
        }" class="btn btn-primary">Detaljnije</a>
      </div>
    </div>
  `;

  elementById("all-cards").appendChild(cardDiv);
});

// Prikaz partnera
let partners = JSON.parse(localStorage.getItem("partners"));
partners.map(partner => {
  let partnersDiv = document.createElement("div");
  partnersDiv.setAttribute("class", "col-xs-6 col-sm-6 col-md-2 col-lg-2");
  partnersDiv.innerHTML = `
      <a href=${partner.url} target="_blank">
        <img src=${partner.img} alt=${partner.name}/>
      </a>
    `;
  elementById("all-partners").appendChild(partnersDiv);
});
