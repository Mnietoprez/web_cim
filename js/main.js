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
