


var actual;
var toptext;
var frontcarrousel; 
var camara2008;
var historicas;
var sobaquillo2008;

window.onload = function(){   
    actual = document.getElementById("frontcarrousel"); 
    toptext = document.getElementById("toptext");
}

function selectPhotos(carro){
    toptext.scrollIntoView();
    frontcarrousel = document.getElementById("frontcarrousel");
    camara2008 = document.getElementById("camara2008");
    sobaquillo2008 = document.getElementById("sobaquillo2008");
    historicas = document.getElementById("historicas");

    if (carro == "frontcarrousel"){
        actual.style.display = "none";
        actual = document.getElementById("frontcarrousel");
        frontcarrousel.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Fotografies destacades";
        document.getElementById("gallerydesc").innerHTML= "Selecció de moments del CIM";
    }

    if (carro == "camara2008"){
        actual.style.display = "none";
        actual = document.getElementById("camara2008");
        camara2008.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Audició Música de Cámara 2008";
        document.getElementById("gallerydesc").innerHTML= "El día 29 de diciembre de 2008 es va celebrar una audició de música de cámara on actuava un quartet de professors músics del nostre centre y de la unió musical de Sedavi.";  
    }

    if (carro == "sobaquillo2008"){
        actual.style.display = "none";
        actual = document.getElementById("sobaquillo2008");
        sobaquillo2008.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Sopar de sobaquillo nadal 2008";
        document.getElementById("gallerydesc").innerHTML= "El día 26 de diciembre se celebro un \'Sopar de sobaquillo de Nadal\' para despedirnos y celebrar la entrada del año 2009 con todos los músicos del centro,  la cena fue de buen rollito y fue sufragada por Vicent Sanjuan por su cumpleaños, Eusebio Giner, por su boda y por el musical. Los músicos regalaron a su director Manuel Baixauli un jamón y este lo agradeció formando parte del cuadro flamenco \'Las Instructivas\'  que con su cantaó titular Visent Sanjuan acompañados por los palmeros  Adrian Perales, Alberto Navarro y Kike Monrabal. La guitarra estaba manejada con gran maestría por el rumbero flamenco titular del cuadro Chimo Pamblanco  y entre todos  amenizaron la noche. Actuó también a lo largo de la noche el hombre orquesta Kiko Alamar que fue muy aplaudido";  
    }

    if (carro == "historicas"){
        actual.style.display = "none";
        actual = document.getElementById("historicas");
        historicas.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Fotografies històriques de la banda";
        document.getElementById("gallerydesc").innerHTML= "Fotografies anteriors a l'any 2008";  
    }


 }