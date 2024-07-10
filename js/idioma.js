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
            if (currentPage === "") {
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
                document.getElementById("indextext17").textContent = "Encuentro de bandas Castellar-Oliveral";
                document.getElementById("indextext18").textContent = "Por motivo de las fiestas del pueblo, las dos bandas del mismo harán un encuentro donde se interpretarán algunos pasacalles";
                document.getElementById("indextext19").textContent = "Fecha por confirmar";
                document.getElementById("indextext20").textContent = "Conciertos de intercambio con la asociación musical La Torre";
                document.getElementById("indextext21").textContent = "Se hará un ciclo de dos conciertos, uno en cada musical, en los que participarán el CIM i la asociación musical La Torre";
                document.getElementById("indextext22").textContent = "Más sobre el cim";
                document.getElementById("indextext23").textContent = "Nuestras redes sociales";
                document.getElementById("indextext24").textContent = "¿Quieres un poco de nostalgia?";
                document.getElementById("indextext25").textContent = "Visita la página web vieja";
                document.getElementById("oldVersionLink").textContent = "Versión antigua;"
            }
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
                document.getElementById("indextext17").textContent = "Encuentro de bandas Castellar-Oliveral";
                document.getElementById("indextext18").textContent = "Por motivo de las fiestas del pueblo, las dos bandas del mismo harán un encuentro donde se interpretarán algunos pasacalles";
                document.getElementById("indextext19").textContent = "Fecha por confirmar";
                document.getElementById("indextext20").textContent = "Conciertos de intercambio con la asociación musical La Torre";
                document.getElementById("indextext21").textContent = "Se hará un ciclo de dos conciertos, uno en cada musical, en los que participarán el CIM i la asociación musical La Torre";
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
                document.getElementById("abouttext25").textContent = "Nuestro centro fue creado en Abril de 1993, a esta nueva banda se le pone el nombre de Centro Instructivo Musical Castellar-Oliveral en recuerdo de la primera banda que hubo en nuestra pedanía fundada en 1933, y disuelta en 1936 por motivos de la guerra civil.";
                document.getElementById("abouttext26").textContent = "Con Dña. Pilar Bayona Monrabal como presidenta y Don Jesús Monto Verdet como director,  nos incorporamos a la Federación Valenciana de Sociedades Musicales y a la Coordinadora de Sociedades Musicales de la ciudad de Valencia y empezamos el recorrido de actuaciones por dentro y fuera de nuestra comunidad, en toda clase de actos propios de banda, procesiones, conciertos, festivales, pasacalles, homenajes etc. ";
                document.getElementById("abouttext27").textContent = "En 1999 toma el relevo como director Don Manuel Baixauli Ferrer. Desde el principio aplicamos la intención de ser banda para el pueblo y con el espíritu altruista de servir a estos menesteres siempre hemos estado a punto y al servicio de cualquier evento benéfico o festivo que pudiera servir para ayudar a cualquier causa, y más concretamente si de Valencia se trata. Como muestra valgan actuaciones en partidos contra la droga en campos como Mestalla, Pamesa, etc, o conciertos participando en actos culturales o benéficos en diversas ciudades y pueblos toda España. Actos completamente desinteresados.";
                document.getElementById("abouttext28").textContent = "El centro además de la banda titular, cuenta con una banda juvenil bajo la dirección de D. Francisco Santos Valverde. La escuela de música está compuesta por más de 100 educandos a partir de 4 años que reciben clases de infancia musical, solfeo e instrumentación y que posteriormente se integran en la banda juvenil, y una escuela de adultos sin límite de edad. ";
                document.getElementById("abouttext29").textContent = "Con una plantilla de 10 profesores titulados atendemos  todas las especialidades musicales y como asociación sin ánimo de lucro ponemos a disposición de todos ustedes en: nuestro local social C/Vicente Puchol, 40 Castellar-Oliveral Valencia 46026.";
                document.getElementById("indextext14").textContent = "Concierto en el Ateneo Mercantil de Valencia";
                document.getElementById("indextext15").textContent = "Se tocó un repertorio conformado por pasodobles, junto a algunas obras reconocidas";
                document.getElementById("indextext17").textContent = "Concierto de verano Excel·lent";
                document.getElementById("indextext18").textContent = "El sábado 6 de julio de 2024 se celebró nuestro tradicional concierto anual de la subvención 'Excel·lent', el cual tuvimos el placer de poder realizar en el CEIP Castellar-Oliveral.";
                document.getElementById("indextext20").textContent = "Audiciones verano 2024 y concierto de la banda juvenil";
                document.getElementById("indextext21").textContent = "El primer dia la mitad de los educandos tocaron las audiciones preparadas, acompañados por parte de nuestra banda juvenil. El segundo lo protagonizaron los alumnos de la escuela de adultos, con una nueva actuación de la banda senior";
            }
            if (currentPage === "dades.html") {
                document.getElementById("abouttext1").textContent = "PROTECCIÓN DE DATOS";
                document.getElementById("dadestext1").textContent = "La utilización de este sitio web así como de cualquiera de sus servicios implica la lectura, comprensión y aceptación del presente aviso legal por parte del usuario.";
                document.getElementById("dadestext2").textContent = "En cumplimiento de lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico, se informa de los siguientes aspectos:";
                document.getElementById("dadestext3").textContent = "- Responsable del sitio web: CENTRO INSTRUCTIVO MUSICAL DE CASTELLAR OLIVERAL.";
                document.getElementById("dadestext4").textContent = "- Dirección: CL. VICENTE PUCHOL, 40 46026 VALENCIA.";
                document.getElementById("dadestext5").textContent = "- Email de contacto: directivacim@gmail.com";
                document.getElementById("abouttext2").textContent = "Aviso legal";
                document.getElementById("dadestext6").textContent = "El Usuario acepta voluntaria y expresamente que el uso del Sitio https://www.cimcastellaroliveral.com/ se realiza en todo caso bajo su única y exclusiva responsabilidad. En la utilización del Sitio https://www.cimcastellaroliveral.com/, el Usuario se compromete a no llevar a cabo ninguna conducta que pudiera dañar la imagen, los intereses y los derechos del sitio web o de terceros o que pudiera dañarlo, inutilizarlo o sobrecargarlo, o que impidiera, de cualquier forma, la normal utilización del mismo. Los Contenidos del Sitio https://www.cimcastellaroliveral.com/ son puestos a disposición del Usuario por CENTRO INSTRUCTIVO MUSICAL DE CASTELLAR OLIVERAL con información procedente tanto de fuentes propias como de terceros. https://www.cimcastellaroliveral.com/ procura que los Contenidos sean de la mayor calidad posible y estén razonablemente actualizados, pero CENTRO INSTRUCTIVO MUSICAL DE CASTELLAR OLIVERAL no garantiza la utilidad, exactitud, exhaustividad, pertinencia y/o actualidad de los Contenidos. Mediante estas Condiciones Generales no se cede ningún derecho de propiedad intelectual o industrial sobre el sitio https://www.cimcastellaroliveral.com/ ni sobre ninguno de sus elementos integrantes, quedando expresamente prohibidos al Usuario la reproducción, transformación, distribución, comunicación pública, puesta a disposición, extracción, reutilización, reenvío o la utilización de cualquier naturaleza, por cualquier medio o procedimiento, de cualquiera de ellos, salvo en los casos en que esté legalmente permitido o sea autorizado por el titular de los correspondientes derechos. Estas Condiciones Generales se rigen por la Ley española.";
            }
            if (currentPage === "service.html") {
                document.getElementById("servicetext1").textContent = "ESCUELA";
                document.getElementById("servicetext2").textContent = "Compartimos la música";
                document.getElementById("servicetext3").textContent = "Nuestra escuela";
                document.getElementById("servicetext4").textContent = "Matrícula curso 2024-25";
                document.getElementById("servicetext5").textContent = "Del 15 de junio al 1 de octubre";
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
                document.getElementById("servicetext17").textContent = "Contacto de la escuela";
                document.getElementById("price1").innerHTML = "2h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23 €/mes";
                document.getElementById("price2").innerHTML = "1h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14 €/mes";
                document.getElementById("price3").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30 €/mes";
                document.getElementById("price4").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 44 €/mes";
                document.getElementById("price5").innerHTML = "1h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 55 €/mes";
                document.getElementById("price6").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35 €/mes";
                document.getElementById("price7").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50 €/mes";
                document.getElementById("price8").innerHTML = "1h/semana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 60 €/mes";
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
                document.getElementById("indextext17").textContent = "Trobada de bandes Castellar-Oliveral";
                document.getElementById("indextext18").textContent = "Per motiu de les festes del poble, les dues bandes del mateix faràn una trobada on s'interpretaràn alguns pas-dobles";
                document.getElementById("indextext19").textContent = "Data per confirmar";
                document.getElementById("indextext20").textContent = "Concerts d'intercanvi amb l'associació musical La Torre";
                document.getElementById("indextext21").textContent = "Es farà un cicle de dos concerts, un en cada musical, en els que participaràn el CIM i la associació musical La Torre";
                document.getElementById("indextext22").textContent = "Més sobre el cim";
                document.getElementById("indextext23").textContent = "Les nostres xarxes socials";
                document.getElementById("indextext24").textContent = "Vols un poc de nostalgia?";
                document.getElementById("indextext25").textContent = "Visita la antiga pàgina web";
                document.getElementById("oldVersionLink").textContent = "Versió antiga;"
            }
            if (currentPage === "") {
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
                document.getElementById("indextext17").textContent = "Trobada de bandes Castellar-Oliveral";
                document.getElementById("indextext18").textContent = "Per motiu de les festes del poble, les dues bandes del mateix faràn una trobada on s'interpretaràn alguns pas-dobles";
                document.getElementById("indextext19").textContent = "Data per confirmar";
                document.getElementById("indextext20").textContent = "Concerts d'intercanvi amb l'associació musical La Torre";
                document.getElementById("indextext21").textContent = "Es farà un cicle de dos concerts, un en cada musical, en els que participaràn el CIM i la associació musical La Torre";
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
                document.getElementById("abouttext4").textContent = "Una mirada enrere";
                document.getElementById("abouttext5").textContent = "Actes passats";
                document.getElementById("abouttext6").textContent = "Actes fallers amb la falla Císcar-Burriana";
                document.getElementById("abouttext7").textContent = "16 Març 12:30 - Pasacarrer";
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
                document.getElementById("abouttext25").textContent = "El nostre centre va ser creat a l'abril de 1993, a esta nova banda se li posa el nom de Centre Instructiu Musical Castellar-Oliveral en record de la primera banda que va haver-hi en la nostra pedania fundada en 1933, i dissolta en 1936 per motius de la guerra civil.";
                document.getElementById("abouttext26").textContent = "Amb Sra. Pilar Baiona Monrabal com a presidenta i Sr. Jesús Monto Verdet com a director, ens incorporem a la Federació Valenciana de Societats Musicals i a la Coordinadora de Societats Musicals de la ciutat de València i comencem el recorregut d'actuacions per dins i fora de la nostra comunitat, en tota classe d'actes propis de banda, processons, concerts, festivals, passacarrers, homenatges etc.";
                document.getElementById("abouttext27").textContent = "En 1999 pren el relleu com a director Sr. Manuel Baixauli Ferrer. Des del principi apliquem la intenció de ser banda per al poble i amb l'esperit altruista de servir a estos menesters sempre hem estat a punt i al servici de qualsevol esdeveniment benèfic o festiu que poguera servir per a ajudar a qualsevol causa, i més concretament si de València es tracta. Com a mostra valguen actuacions en partits contra la droga en camps com Mestalla, Pamesa, etc, o concerts participant en actes culturals o benèfics en diverses ciutats i pobles tota Espanya. Actes completament desinteressats.";
                document.getElementById("abouttext28").textContent = "El centre a més de la banda titular, compta amb una banda juvenil sota la direcció de Sr. Francisco Santos Valverde. L'escola de música està composta per més de 100 educands a partir de 4 anys que reben classes d'infància musical, solfeig i instrumentació i que posteriorment s'integren en la banda juvenil, i una escola d'adults sense límit d'edat.";
                document.getElementById("abouttext29").textContent = "Amb una plantilla de 10 professors titulats atenem totes les especialitats musicals i com a associació sense ànim de lucre posem a la disposició de tots vostés en: el nostre local social C/Vicente Puchol, 40 Castellar-Oliveral València 46026.";
                document.getElementById("indextext14").textContent = "Concert a l'Ateneu Mercantil de València";
                document.getElementById("indextext15").textContent = "Es va tocar un repertori conformat per pas-dobles, juntament amb algunes obres reconegudes";
                document.getElementById("indextext17").textContent = "Concert de estiu Excel·lent";
                document.getElementById("indextext18").textContent = "El dissabte 6 de Juliol de 2024 es va celebrar el nostre tradicional concert anual de la subvenció 'Excel·lent', el qual vam tindre el plaer de poder realitzar al CEIP Castellar-Oliveral.";
                document.getElementById("indextext20").textContent = "Audicions estiu 2024 i concert de la banda juvenil";
                document.getElementById("indextext21").textContent = "El primer dia la meitat dels educands van tocar les audicions preparades, acompanyats per part de la nostra banda juvenil. El segon el van protagonitzar els alumnes de l'escola d'adults i els seus fills, amb una nova actuaciò de la banda sènior";
            }
            if (currentPage === "dades.html") {
                document.getElementById("abouttext1").textContent = "PROTECCIÓ DE DADES";
                document.getElementById("dadestext1").textContent = "La utilització d'aquest lloc web així com de qualsevol dels seus servicis implica la lectura, comprensió i aceptació del present avís legal per part de l'usuari.";
                document.getElementById("dadestext2").textContent = "En compliment del que s'establix en la Llei 34/2002, d'11 de juliol, de Servicis de la Societat de la Informació i el Comerç Electrònic, s'informa dels següents aspectes:";
                document.getElementById("dadestext3").textContent = "- Responsable del lloc web: CENTRO INSTRUCTIVO MUSICAL DE CASTELLAR OLIVERAL.";
                document.getElementById("dadestext4").textContent = "- Direcció: CL. VICENTE PUCHOL, 40 46026 VALENCIA.";
                document.getElementById("dadestext5").textContent = "- Email de contacte: directivacim@gmail.com";
                document.getElementById("abouttext2").textContent = "Avís legal";
                document.getElementById("dadestext6").textContent = "L'usuari accepta voluntària i expressament que l'ús del Lloc https://www.cimcastellaroliveral.com/ es realitza en tot cas sota la seua única i exclusiva responsabilitat. En la utilització del Lloc https://www.cimcastellaroliveral.com/, l'Usuari es compromet a no dur a terme cap conducta que poguera danyar la imatge, els interessos i els drets del lloc web o de tercers o que poguera danyar-lo, inutilitzar-lo o sobrecarregar-lo, o que impedira, de qualsevol forma, la normal utilització d'este. Els Continguts del Lloc https://www.cimcastellaroliveral.com/ són posats a la disposició de l'Usuari per CENTRE INSTRUCTIU MUSICAL DE CASTELLAR OLIVERAL amb informació procedent tant de fonts pròpies com de tercers. https://www.cimcastellaroliveral.com/ procura que els Continguts siguen de la major qualitat possible i estiguen raonablement actualitzats, però CENTRE INSTRUCTIU MUSICAL DE CASTELLAR OLIVERAL no garantix la utilitat, exactitud, exhaustivitat, pertinència i/o actualitat dels Continguts. Mitjançant estes Condicions Generals no se cedix cap dret de propietat intel·lectual o industrial sobre el lloc https://www.cimcastellaroliveral.com/ ni sobre cap dels seus elements integrants, quedant expressament prohibits a l'Usuari la reproducció, transformació, distribució, comunicació pública, posada a disposició, extracció, reutilització, reexpedició o la utilització de qualsevol naturalesa, per qualsevol mitjà o procediment, de qualsevol d'ells, excepte en els casos en què estiga legalment permés o siga autoritzat pel titular dels corresponents drets. Estes Condicions Generals es regixen per la Llei espanyola.";
            }
            if (currentPage === "service.html") {
                document.getElementById("servicetext1").textContent = "ESCOLA";
                document.getElementById("servicetext2").textContent = "Compartim la música";
                document.getElementById("servicetext3").textContent = "La nostra escola";
                document.getElementById("servicetext4").textContent = "Matrícula curs 2024-25";
                document.getElementById("servicetext5").textContent = "Del 15 de juny al 1 de octubre";
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
                document.getElementById("servicetext17").textContent = "Contacte de l'escola";
                document.getElementById("price1").innerHTML = "2h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 23 €/mes";
                document.getElementById("price2").innerHTML = "1h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14 €/mes";
                document.getElementById("price3").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30 €/mes";
                document.getElementById("price4").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 44 €/mes";
                document.getElementById("price5").innerHTML = "1h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 55 €/mes";
                document.getElementById("price6").innerHTML = "<sup>1</sup>&frasl;<sub>2</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 35 €/mes";
                document.getElementById("price7").innerHTML = "<sup>3</sup>&frasl;<sub>4</sub>h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50 €/mes";
                document.getElementById("price8").innerHTML = "1h/setmana &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 60 €/mes";

            }
            if (currentPage === "gallery.html") {
                document.getElementById("toptext").textContent = "Recordem els moments passats";
                document.getElementById("gallerytext").textContent = "Fotografies destacades";
                document.getElementById("gallerydesc").textContent = "Selecció de fotografies del CIM";
            }
        }
    }
});