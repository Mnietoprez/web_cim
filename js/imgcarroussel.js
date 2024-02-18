


var actual;
var toptext;
var frontcarrousel; 
var camara2008;
var historicas;
var sobaquillo2008;
var santacecilia2008;
var palau2008;
var falles2008;
var intercanvi2008;
var intercanvi2007;

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
    santacecilia2008 = document.getElementById("santacecilia2008");
    palau2008 = document.getElementById("palau2008");
    falles2008 = document.getElementById("falles2008");
    intercanvi2008 = document.getElementById("intercanvi2008");
    intercanvi2007 = document.getElementById("intercanvi2007");

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
        document.getElementById("gallerydesc").innerHTML= "El día 26 de desembre es va celebrar un \'Sopar de sobaquillo de Nadal\' per despedir-nos y celebrar la entrada de l'any 2009 amb tots els músics del centre. El sopar va ser de bon rollet y va ser financiat per Vicent Sanjuan pel seu aniversari, Eusebio Giner per la seua boda i per el musical. Els músics van regalar al seu director, Manuel Baixauli, un pernil i aquest ho va agrair, formant part del cuadre flamenc \'Las Instructivas\', amb el seu cantaor titular Visent Sanjuan i acompanyats per els palmers Adrian Perales, Alberto Navarro i Kike Monrabal. La guitarra estaba manejada amb gran maestría per el rumber flamenc titular del cuadre Chimo Pamblanco i entre tots van amenitzar la nit. Va actuar també al llarg de la nit l'home orquesta Kiko Alamar qui va ser molt aplaudit";  
    }

    if (carro == "historicas"){
        actual.style.display = "none";
        actual = document.getElementById("historicas");
        historicas.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Fotografies històriques de la banda";
        document.getElementById("gallerydesc").innerHTML= "Fotografies anteriors a l'any 2007";  
    }

    if (carro == "santacecilia2008"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2008");
        santacecilia2008.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Santa cecília 2008";
        document.getElementById("gallerydesc").innerHTML= "El domingo día 23 de noviembre de 2008, se cerraron los actos programados en honor a santa Cecilia con un concierto compartido, en su honor y en recuerdo del querido músico Angel Giménez. Fue muy emotivo por lo querido que era nuestro Angel.";  
    }

    if (carro == "palau2008"){
        actual.style.display = "none";
        actual = document.getElementById("palau2008");
        palau2008.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Actuació al Palau de la Música de Valencia";
        document.getElementById("gallerydesc").innerHTML= "Any 2008";  
    }

    if (carro == "falles2008"){
        actual.style.display = "none";
        actual = document.getElementById("falles2008");
        falles2008.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Falles 2008";
        document.getElementById("gallerydesc").innerHTML= "Disfresses per la cabalgata de la Falla La Torre";  
    }

    if (carro == "intercanvi2008"){
        actual.style.display = "none";
        actual = document.getElementById("intercanvi2008");
        intercanvi2008.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert d'intercanvi";
        document.getElementById("gallerydesc").innerHTML= "Any 2008"; 
    }

    if (carro == "intercanvi2007"){
        actual.style.display = "none";
        actual = document.getElementById("intercanvi2007");
        intercanvi2007.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert d'intercanvi";
        document.getElementById("gallerydesc").innerHTML= "Any 2007"; 
    }

 }