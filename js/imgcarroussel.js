function dropdown(dropid) {
    var dropdownContent = document.getElementById(dropid);
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
}

function mostrarGaleria(id, imagenes) {
    const seccion = document.getElementById(id);
    // Evita cargar las imágenes múltiples veces
    if (seccion.dataset.loaded === "false") {
      const lista = seccion.querySelector("ul");
      imagenes.forEach(nombre => {
        const li = document.createElement("li");
        li.className = "carousel1-item";
        li.innerHTML = `
          <div class="card1">
            <img src="img/fotos vieja web/${id}/${nombre}" loading="lazy">
          </div>
        `;
        lista.appendChild(li);
      });
      seccion.dataset.loaded = "true";
    }
    seccion.style.display = "flex"; // o el estilo que uses
}

const testfotos= [
    {
    date: "16-19/03/2025",
    title: "Actes fallers amb la falla Císcar-Burriana",
    description: [
      "16 Març 12:30 - Pasacarrer",
      "16 Març 18:00 - Replegada de premis infantils",
      "17 Març 11:00 - Replegada de premis majors",
      "17 Març 17:30 - Ofrena a la Verge",
      "18 Març 11:00 - Ofrena al Mestre Serrano",
      "18 Març 18:00 - Disfresses",
      "19 Març 12:15 - Pasacarrer de Sant Josep"
    ],
    img: "img/actes/falla.jpeg"
},
]


window.onload = function(){   
    actual = document.getElementById("frontcarrousel"); 
    toptext = document.getElementById("toptext");
}

function selectPhotos(carro){
    toptext.scrollIntoView();


    if (carro == "historicas"){
        actual.style.display = "none";
        actual = document.getElementById("historicas");
        historicas.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Fotografies històriques de la banda";
        document.getElementById("gallerydesc").innerHTML= "Fotografies anteriors a l'any 2007";  
    }


 }