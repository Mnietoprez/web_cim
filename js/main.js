var currentPage = location.pathname.split("/").pop();
(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//----------------------------------------------------------
// CÓDIGO PARA AÑADIR MAPA INTERACTIVO EN CONTACT.HTML
//----------------------------------------------------------


if (window.location.pathname.endsWith('contact.html')) {
    var lat = 39.427711; 
    var lon = -0.364270;
  
    var map = L.map('mapDiv').setView([lat, lon], 13);
  
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 17,
    }).addTo(map);
  
    var marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup("<b>Castellar-Oliveral</b><br />46026<br />Valencia").openPopup();
}

//----------------------------------------------------------
// CÓDIGO PARA AÑADIR ACTOS PRÓXIMOS EN INDEX.HTML
//----------------------------------------------------------

if (window.location.pathname.endsWith('index.html') || currentPage === ""){
    //cambia en función del idioma seleccionado
    function updateEvents(idioma) {
        let events = eventsval
        if (idioma === "español") {
            events = eventses;
        } else {
            if (idioma === "valenciano") {
                events = eventsval;
            }
        }
        renderEvents("proximos", events);
    }
    
    //funcion que actualiza eventos
    function renderEvents(container, event) {
    const thecontainer = document.getElementById(container);
    thecontainer.innerHTML = ""; // Limpia contenido anterior
    event.forEach(event => {
      const col = document.createElement("div");
      const descriptionHtml = event.description.join("<br>");
      col.className = "col-lg-6 mb-5";
      col.innerHTML = `
        <div class="row">
          <div class="col-sm-5">
            <img class="img-fluid mb-3 mb-sm-0" src="${event.img}" alt="">
          </div>
          <div class="col-sm-7">
            <p class="m-0">${event.date}</p>
            <h4>${event.title}</h4>
            <p class="m-0">${descriptionHtml}</p>
          </div>
        </div>
      `;
      thecontainer.appendChild(col);
    });
    }
}

//----------------------------------------------------------
// CÓDIGO PARA AÑADIR ACTOS EN HISTORIA.HTML POR AÑOS
//----------------------------------------------------------

if (window.location.pathname.endsWith('historia.html')) {
//cambia en función del idioma seleccionado
function updateEvents(idioma) {
    let events2025 = events2025val;
    let events2024 = events2024val;
    let events2023 = events2023val;
    if (idioma === "español") {
        events2025 = events2025es;
        events2024 = events2024es;
        events2023 = events2023es;
    } else {
        if (idioma === "valenciano") {
            events2025 = events2025val;
            events2024 = events2024val;
            events2023 = events2023val;
        }
    }
    renderEvents("actes2025", events2025);
    renderEvents("actes2024", events2024);
    renderEvents("actes2023", events2023);
      }

//funcion que actualiza eventos
function renderEvents(container, event) {
const thecontainer = document.getElementById(container);
thecontainer.innerHTML = ""; // Limpia contenido anterior
event.forEach(event => {
  const col = document.createElement("div");
  const descriptionHtml = event.description.join("<br>");
  col.className = "col-lg-6 mb-5";
  col.innerHTML = `
    <div class="row">
      <div class="col-sm-5">
        <img class="img-fluid mb-3 mb-sm-0" src="${event.img}" alt="">
      </div>
      <div class="col-sm-7">
        <p class="m-0">${event.date}</p>
        <h4>${event.title}</h4>
        <p class="m-0">${descriptionHtml}</p>
      </div>
    </div>
  `;
  thecontainer.appendChild(col);
});
}
}


// FUNCIÓN QUE HACE QUE LOS BOTONES FUNCIONEN
function dropdown(dropid) {
    var dropdownContent = document.getElementById(dropid);
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
}

//----------------------------------------------------------
// CÓDIGO PARA ACTIVAR O DESACTIVAR FOTOS EN GALERÍA
//----------------------------------------------------------

var activeimg = "destacades";
function selectPhotosWithLanguage(id, idstring, language) {
  console.log(id);
    const destacades = document.getElementById("destacades");
    const nodestacades = document.getElementById("nodestacades");
    const lista_nodestacades = nodestacades.querySelector("ul");
    if (idstring === "destacades") {
      activeimg = idstring;
      lista_nodestacades.innerHTML = ""; // elimina todo el contenido del <ul> activo previamente
      nodestacades.style.display = "none";
      destacades.style.display = "flex"; 
      if(language == "español"){
        document.getElementById("gallerytext").textContent = "Fotografias destacadas";
        document.getElementById("gallerydesc").textContent = "Selección de fotografias del CIM";
      } else {
        document.getElementById("gallerytext").textContent = "Fotografies destacades";
        document.getElementById("gallerydesc").textContent = "Selecció de fotografies del CIM"; 
      }
    } else {
      if (activeimg !== idstring){ //verifica que no esté ya cargada la imagen
      activeimg = idstring;
      destacades.style.display = "none";
      nodestacades.style.display = "flex";
      id.fotos.forEach(nombre => {
        const li = document.createElement("li");
        li.className = "carousel1-item";
        li.innerHTML = `
          <div class="card1">
            <img src="${nombre}" loading="lazy">
          </div>
        `;
        lista_nodestacades.appendChild(li);
      });  
      if(language == "español"){
        document.getElementById("gallerytext").textContent = id.titlees;
        document.getElementById("gallerydesc").textContent = id.desces;
      } else {
        document.getElementById("gallerytext").textContent = id.titleval;
        document.getElementById("gallerydesc").textContent = id.descval;
      }
    }
    }
    console.log("now active")
    console.log(activeimg)
}

function changePhotoTitles(language) {

  if (activeimg === "destacades"){
      if(language == "español"){
        document.getElementById("gallerytext").textContent = "Fotografias destacadas";
        document.getElementById("gallerydesc").textContent = "Selección de fotografias del CIM";
      } else {
        document.getElementById("gallerytext").textContent = "Fotografies destacades";
        document.getElementById("gallerydesc").textContent = "Selecció de fotografies del CIM"; 
      }

  } else {
      if(language == "español"){
        document.getElementById("gallerytext").textContent = id.titlees;
        document.getElementById("gallerydesc").textContent = id.desces;
      } else {
        document.getElementById("gallerytext").textContent = id.titleval;
        document.getElementById("gallerydesc").textContent = id.descval;
      }
  }
  

}