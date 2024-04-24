var currentPage = location.pathname.split("/").pop();
console.log(currentPage)
document.addEventListener("DOMContentLoaded", function() {
    // Check if language preference exists in local storage
    const selectedLanguage = localStorage.getItem("language");
    if (selectedLanguage) {
        document.documentElement.lang = selectedLanguage;
        updateLanguage(selectedLanguage);
    }


    // Language selector click event
    const languageLinks = document.querySelectorAll(".language-link");
    languageLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const language = this.getAttribute("data-lang");
            localStorage.setItem("language", language);
            updateLanguage(language);
        });
    });

    // Function to update language
    function updateLanguage(language) {
        if (language === "español") {
            document.getElementById("nav1").textContent = "Inicio";
            document.getElementById("nav2").textContent = "Historia";
            document.getElementById("nav3").textContent = "Escuela";
            document.getElementById("nav4").textContent = "Galería";
            document.getElementById("nav5").textContent = "Contacto";
            document.getElementById("langtxtc").style.display = "none";
            document.getElementById("langtxtv").style.display = "flex";
            document.getElementById("langphoto").src = "./img/archivos_menus/valencia.png";
            document.getElementById("footertext1").textContent = "Contacto";
            document.getElementById("footertext2").textContent = "Redes sociales";
            if (currentPage === "index.html") {
                document.getElementById("title").textContent = "HACIENDO BANDA";
                document.getElementById("indextext1").textContent = "Sobre nosotros";
                document.getElementById("indextext2").textContent = "Haciendo banda desde 1993";
                document.getElementById("indextext3").textContent = "Nuestra historia";
                document.getElementById("indextext4").textContent = "Nuestro centro se creó en abril de 1993. A esta nueva banda se le puso el nombre de Centro Instructivo Musical Castellar-Oliveral en recuerdo de la primera banda que hubo en nuestra pedania fundada en 1933, disuelta en 1936 por motivos de la guerra civil.";
                document.getElementById("indextext4b").textContent = "Actualmente, se encuentra presidido por don Jose V. Gimeno y bajo la dirección del director Manel Baixauli Ferrer.";
                document.getElementById("indextext5").textContent = "Conoce más";
                document.getElementById("indextext6").textContent = "El CIM actualmente";
                document.getElementById("indextext7").textContent = "El Centro Instructvo Musical actualmente dispone de diferentes bandas i servicios de docencia.";
                document.getElementById("indextext8").textContent = "Banda juvenil y senior";
                document.getElementById("indextext9").textContent = "Charanga";
                document.getElementById("indextext10").textContent = "Clases de música";
                document.getElementById("indextext11").textContent = "Apúntate a la escuela";  
                document.getElementById("indextext12").textContent = "CALENDARIO 2024-2025";
                document.getElementById("indextext13").textContent = "Próximos actos";
                document.getElementById("indextext16").textContent = "Fecha por confirmar";
                document.getElementById("indextext17").textContent = "Concierto de primavera Excel·lent";
                document.getElementById("indextext18").textContent = "Con un repertorio variado, estrenando la obra 'Los miserables'";
                document.getElementById("indextext19").textContent = "Fecha por confirmar";
                document.getElementById("indextext20").textContent = "Audiciones verano 2024 y concierto de la banda juvenil";
                document.getElementById("indextext21").textContent = "El primer dia la mitad de los educandos tocarán las audiciones preparadas, y el segundo se completarán las restantes con un cierre por parte de nuestra banda juvenil";
                document.getElementById("indextext22").textContent = "Más sobre el cim";
                document.getElementById("indextext23").textContent = "Nuestras redes sociales";
                document.getElementById("indextext24").textContent = "¿Quieres un poco de nostalgia?";
                document.getElementById("indextext25").textContent = "Visita la página web vieja";
                document.getElementById("oldVersionLink").textContent = "Versión antigua;"
            }
            if (currentPage === "about.html") {
                document.getElementById("abouttext1").textContent = "HISTORIA";
                document.getElementById("abouttext2").textContent = "Comenzamos por el principio";
                document.getElementById("abouttext3").textContent = "Nuestra historia";
                document.getElementById("indextext14").textContent = "Concierto en el Ateneo Mercantil de Valencia";
                document.getElementById("indextext15").textContent = "Se tocó un repertorio conformado por pasodobles, junto a algunas obras reconocidas";
                document.getElementById("abouttext4").textContent = "Una mirada hacia atrás";
                document.getElementById("abouttext5").textContent = "Actos pasados";
                document.getElementById("abouttext6").textContent = "Actos falleros con la falla Císcar-Burriana";
                document.getElementById("abouttext7").textContent = "16 Marzo 12:30 - Pasacalle";
                document.getElementById("abouttext8").textContent = "16 Marzo 18:00 - Recogida de premios infantiles";
                document.getElementById("abouttext9").textContent = "17 Marzo 11:00- Recogida de premios mayores";
                document.getElementById("abouttext10").textContent = "17 Marzo 18:00 - Disfraces";
                document.getElementById("abouttext11").textContent = "18 Marzo 11:00 - Ofrena al Maestro Serrano";
                document.getElementById("abouttext12").textContent = "18 Marzo 17:30 - Ofrena a la Virgen";
                document.getElementById("abouttext13").textContent = "19 Marzo 12:15 - Pasacalle de San José";
                document.getElementById("abouttext14").textContent = "Recogida del ninot con la Corte de Honor de València";
                document.getElementById("abouttext15").textContent = "Acompañamiento de las falleras de la Corte de Honor hasta las artes i les ciencias para recoger el ninot de la falla mayor de la plaza del Ayuntamiento.";
                document.getElementById("abouttext16").textContent = "Concierto de navidad 2023";
                document.getElementById("abouttext17").textContent = "Concierto solidario interpretado en la iglesia de San Martí de Porres, donde se tocaron los más famosos y tradicionles villancicos.";
                document.getElementById("abouttext18").textContent = "Festividades de Santa Cecília 2023";
                document.getElementById("abouttext19").textContent = "19 Noviembre 12:00 - Concierto de la banda titular y juvenil en la iglesia San Martí de Porres.";
                document.getElementById("abouttext20").textContent = "25 Noviembre 17:00 - Tardeo en el local del CIM";
                document.getElementById("abouttext21").textContent = "26 Noviembre 10:00 - Pasacalle para recoger a los nuevos educandos de la banda.";
                document.getElementById("abouttext22").textContent = "26 Noviembre 12:00 - Misa en la iglesia de San Martí de Porres";
                document.getElementById("abouttext23").textContent = "26 Noviembre 14:00 - Comida de germanor en el musical para músicos y socios";
                document.getElementById("abouttext24").textContent = "Galeria de fotos y videos";
            }
            if (currentPage === "service.html") {
                document.getElementById("servicetext1").textContent = "ESCUELA";
                document.getElementById("servicetext2").textContent = "Compartimos la música";
                document.getElementById("servicetext3").textContent = "Nuestra escuela";
                document.getElementById("servicetext4").textContent = "Matrícula curso 2023-24";
                document.getElementById("servicetext5").textContent = "Del 15 de junio al 15 de julio";
                document.getElementById("servicetext6").textContent = "Accede al formulario";
                document.getElementById("servicetext7").textContent = " - Jardín musical";
                document.getElementById("servicetext8").textContent = " - Lenguaje musical";
                document.getElementById("servicetext9").textContent = " - Clases de instrumento";
                document.getElementById("servicetext10").textContent = " - Preparación de prueba de acceso al conservatorio";
                document.getElementById("servicetext11").textContent = " - Música para adultos";
                document.getElementById("servicetext12").textContent = "Tarifas";
                document.getElementById("servicetext13").textContent = "Lenguaje musical";
                document.getElementById("servicetext14").textContent = "Lenguaje musical adultos";
                document.getElementById("servicetext15").textContent = "Clases de instrumento";
                document.getElementById("servicetext16").textContent = "Clases de guitarra o piano";
                document.getElementById("price1").innerHTML = "2h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21 €/mes";
                document.getElementById("price2").innerHTML = "1h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12 €/mes";
                document.getElementById("price3").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 28 €/mes";
                document.getElementById("price4").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 42 €/mes";
                document.getElementById("price5").innerHTML = "1h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 53 €/mes";
                document.getElementById("price6").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 33 €/mes";
                document.getElementById("price7").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 48 €/mes";
                document.getElementById("price8").innerHTML = "1h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58 €/mes";
            }
            if (currentPage === "gallery.html") {
                document.getElementById("toptext").textContent = "Recordemos los momentos pasados";
                document.getElementById("gallerytext").textContent = "Fotografias destacades";
                document.getElementById("gallerydesc").textContent = "Selección de fotografías del CIM";
            }
            
            
        } else {
            document.getElementById("langtxtv").style.display = "none";
            document.getElementById("langtxtc").style.display = "flex";
            document.getElementById("langphoto").src = "./img/archivos_menus/españa.png";
            document.getElementById("nav1").textContent = "Inici";
            document.getElementById("nav2").textContent = "Història";
            document.getElementById("nav3").textContent = "Escola";
            document.getElementById("nav4").textContent = "Galería";
            document.getElementById("nav5").textContent = "Contacte";
            document.getElementById("footertext1").textContent = "Contacte";
            document.getElementById("footertext2").textContent = "Xarxes socials";
            if (currentPage === "index.html") {
                document.getElementById("title").textContent = "FENT BANDA";
                document.getElementById("indextext1").textContent = "Sobre nosaltres";
                document.getElementById("indextext2").textContent = "Fent banda desde 1993";
                document.getElementById("indextext3").textContent = "La nostra història";
                document.getElementById("indextext4").textContent = "El nostre centre va ser creat a l'abril de 1993. A aquesta nova banda se li va posar el nom de Centre Instructiu Musical Castellar-Oliveral en record de la primera banda que va haver en la nostra pedania fundada en 1933, dissolta en 1936 per motius de la guerra civil.";
                document.getElementById("indextext4b").textContent = "Actualment, es troba presidit per don Jose V. Gimeno i sota la direcció del director Manel Baixauli Ferrer.";
                document.getElementById("indextext5").textContent = "Coneix més";
                document.getElementById("indextext6").textContent = "El CIM actualment";
                document.getElementById("indextext7").textContent = "El centre instructiu musical actualment disposa de diferents bandes i servicis de docència.";
                document.getElementById("indextext8").textContent = "Banda juvenil i sènior";
                document.getElementById("indextext9").textContent = "Xaranga";
                document.getElementById("indextext10").textContent = "Classes de música";
                document.getElementById("indextext11").textContent = "Apunta't a l'escola";     
                document.getElementById("indextext12").textContent = "CALENDARI 2024-2025";
                document.getElementById("indextext13").textContent = "Pròxims actes";
                document.getElementById("indextext16").textContent = "Data per confirmar";
                document.getElementById("indextext17").textContent = "Concert de primavera Excel·lent";
                document.getElementById("indextext18").textContent = "Amb un repertori variat, estrenant l'obra 'Les miserables'";
                document.getElementById("indextext19").textContent = "Data per confirmar";
                document.getElementById("indextext20").textContent = "Audicions estiu 2024 i concert de la banda juvenil";
                document.getElementById("indextext21").textContent = "El primer dia la meitat dels educands tocaràn les audicions preparades, i el segon es completaràn les restants amb un tancament per part de la nostra banda juvenil";
                document.getElementById("indextext22").textContent = "Més sobre el cim";
                document.getElementById("indextext23").textContent = "Les nostres xarxes socials";
                document.getElementById("indextext24").textContent = "Vols un poc de nostalgia?";
                document.getElementById("indextext25").textContent = "Visita la antiga pàgina web";
                document.getElementById("oldVersionLink").textContent = "Versió antiga;"
            }
            if (currentPage === "about.html") {
                document.getElementById("abouttext1").textContent = "HISTÒRIA";
                document.getElementById("abouttext2").textContent = "Començem pel principi";
                document.getElementById("abouttext3").textContent = "La nostra història";
                document.getElementById("indextext14").textContent = "Concert a l'Ateneu Mercantil de València";
                document.getElementById("indextext15").textContent = "Es va tocar un repertori conformat per pas-dobles, juntament amb algunes obres reconegudes";
                document.getElementById("abouttext4").textContent = "Una mirada enrere";
                document.getElementById("abouttext5").textContent = "Actes passats";
                document.getElementById("abouttext6").textContent = "Actes fallers amb la falla Císcar-Burriana";
                document.getElementById("abouttext7").textContent = "16 Març 12:30 - Pasacarrer<";
                document.getElementById("abouttext8").textContent = "16 Març 18:00 - Replegada de premis infantils";
                document.getElementById("abouttext9").textContent = "17 Març 11:00- Replegada de premis majors";
                document.getElementById("abouttext10").textContent = "17 Març 18:00 - Disfresses";
                document.getElementById("abouttext11").textContent = "18 Març 11:00 - Ofrena al Mestre Serrano";
                document.getElementById("abouttext12").textContent = "18 Març 17:30 - Ofrena a la Verge";
                document.getElementById("abouttext13").textContent = "19 Març 12:15 - Pasacarrer de Sant Josep";
                document.getElementById("abouttext14").textContent = "Replegada del ninot amb la Cort d'Honor de València";
                document.getElementById("abouttext15").textContent = "Acompanyament de les falleres de la Cort d'Honor fins a les arts i les ciències per arreplegar el ninot de la falla major de la plaça de l'Ajuntament.";
                document.getElementById("abouttext16").textContent = "Concert de nadal 2023";
                document.getElementById("abouttext17").textContent = "Concert solidari interpretat a la esglèsia de San Martí de Porres, on es van tocar les més famoses i tradicionals nadalenques.";
                document.getElementById("abouttext18").textContent = "Festivitats de Santa Cecília 2023";
                document.getElementById("abouttext19").textContent = "19 Novembre 12:00 - Concert de la banda titular i juvenil en l'església Sant Martí de Porres.";
                document.getElementById("abouttext20").textContent = "25 Novembre 17:00 - Tardeo al local del CIM";
                document.getElementById("abouttext21").textContent = "26 Novembre 10:00 - Pasacarrer per replegar als nous educands de la banda.";
                document.getElementById("abouttext22").textContent = "26 Novembre 12:00 - Misa en l'església de Sant Martí de Porres";
                document.getElementById("abouttext23").textContent = "26 Novembre 14:00 - Dinar de germanor al musical per a músics i socis";
                document.getElementById("abouttext24").textContent = "Galería de fotos i videos";
                
            }
            if (currentPage === "service.html") {
                document.getElementById("servicetext1").textContent = "ESCOLA";
                document.getElementById("servicetext2").textContent = "Compartim la música";
                document.getElementById("servicetext3").textContent = "La nostra escola";
                document.getElementById("servicetext4").textContent = "Matrícula curso 2023-24";
                document.getElementById("servicetext5").textContent = "Del 15 de juny al 15 de juliol";
                document.getElementById("servicetext6").textContent = "Accedix al formulari";
                document.getElementById("servicetext7").textContent = " - Jardí musical";
                document.getElementById("servicetext8").textContent = " - Llenguatge musical";
                document.getElementById("servicetext9").textContent = " - Classes d'instrument";
                document.getElementById("servicetext10").textContent = " - Preparació de proba d'accés al conservatori";
                document.getElementById("servicetext11").textContent = " - Música per a adults";
                document.getElementById("servicetext12").textContent = "Tarifes";
                document.getElementById("servicetext13").textContent = "Llenguatge musical";
                document.getElementById("servicetext14").textContent = "Llenguatge musical adults";
                document.getElementById("servicetext15").textContent = "Classes d'instrument";
                document.getElementById("servicetext16").textContent = "Classes de guitarra o piano";
                document.getElementById("price1").innerHTML = "2h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 21 €/mes";
                document.getElementById("price2").innerHTML = "1h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12 €/mes";
                document.getElementById("price3").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 28 €/mes";
                document.getElementById("price4").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 42 €/mes";
                document.getElementById("price5").innerHTML = "1h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 53 €/mes";
                document.getElementById("price6").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 33 €/mes";
                document.getElementById("price7").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 48 €/mes";
                document.getElementById("price8").innerHTML = "1h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 58 €/mes";

            }
            if (currentPage === "gallery.html") {
                document.getElementById("toptext").textContent = "Recordem els moments passats";
                document.getElementById("gallerytext").textContent = "Fotografies destacades";
                document.getElementById("gallerydesc").textContent = "Selecció de fotografies del CIM";
            }
        }
    }
});