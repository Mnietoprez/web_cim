var currentPage = location.pathname.split("/").pop();
console.log(currentPage)
var language_nolocal = "none";
//Funcion para cambiar las fotos de la galería tomando como parámetro el idioma
    function selectPhotos(id, idstring) {
        selectPhotosWithLanguage(id, idstring, language_nolocal);
    }

document.addEventListener("DOMContentLoaded", function() { //SE EJECUTA SIEMPRE QUE LA PÁGINA SE RECARGUE
    // Check if language preference exists in local storage
    const selectedLanguage = localStorage.getItem("language");
    language_nolocal = localStorage.getItem("language");
    if (selectedLanguage) {
        document.documentElement.lang = selectedLanguage;
        updateLanguage(selectedLanguage);
        console.log(selectedLanguage);
        if (currentPage === "historia.html") {
            updateEvents(selectedLanguage); //Actualiza la lista de actos pasados
        }

        if (currentPage === "index.html" || currentPage === "") {
            updateEvents(selectedLanguage); //Actualiza la lista de actos proximos
        }
    }

    //Recarga las fotos destacadas para que no de error la activeid al iniciar
    if (currentPage === "gallery.html") {
        selectPhotosWithLanguage(destacades, 'destacades', language_nolocal);
    }
    


    // Language selector click event
    const languageLinks = document.querySelectorAll(".language-link");
    languageLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const language = this.getAttribute("data-lang");
            localStorage.setItem("language", language);
            updateLanguage(language);
            language_nolocal = language;
            console.log(language);
            if (currentPage === "gallery.html") {
                changePhotoTitles(language);
            }
            if (currentPage === "historia.html") {
            updateEvents(language);//Actualiza la lista de actos pasados
            }
            if (currentPage === "index.html" || currentPage === "") {
                updateEvents(language); //Actualiza la lista de actos proximos
            }
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
            if (currentPage === "" || currentPage === "index.html") {
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
                document.getElementById("indextext22").textContent = "Más sobre el cim";
                document.getElementById("indextext23").textContent = "Nuestras redes sociales";
                document.getElementById("indextext24").textContent = "¿Quieres un poco de nostalgia?";
                document.getElementById("indextext25").textContent = "Visita la página web vieja";
                document.getElementById("oldVersionLink").textContent = "Versión antigua"
            }
            if (currentPage === "historia.html") {
                document.getElementById("historiatext1").textContent = "HISTORIA";
                document.getElementById("historiatext2").textContent = "Comenzamos por el principio";
                document.getElementById("historiatext3").textContent = "Nuestra historia";
                document.getElementById("historiatext4").textContent = "Nuestro centro fue creado en Abril de 1993, a esta nueva banda se le pone el nombre de Centro Instructivo Musical Castellar-Oliveral en recuerdo de la primera banda que hubo en nuestra pedanía fundada en 1933, y disuelta en 1936 por motivos de la guerra civil.";
                document.getElementById("historiatext5").textContent = "Con Dña. Pilar Bayona Monrabal como presidenta y Don Jesús Monto Verdet como director,  nos incorporamos a la Federación Valenciana de Sociedades Musicales y a la Coordinadora de Sociedades Musicales de la ciudad de Valencia y empezamos el recorrido de actuaciones por dentro y fuera de nuestra comunidad, en toda clase de actos propios de banda, procesiones, conciertos, festivales, pasacalles, homenajes etc. ";
                document.getElementById("historiatext6").textContent = "En 1999 toma el relevo como director Don Manuel Baixauli Ferrer. Desde el principio aplicamos la intención de ser banda para el pueblo y con el espíritu altruista de servir a estos menesteres siempre hemos estado a punto y al servicio de cualquier evento benéfico o festivo que pudiera servir para ayudar a cualquier causa, y más concretamente si de Valencia se trata. Como muestra valgan actuaciones en partidos contra la droga en campos como Mestalla, Pamesa, etc, o conciertos participando en actos culturales o benéficos en diversas ciudades y pueblos toda España. Actos completamente desinteresados.";
                document.getElementById("historiatext7").textContent = "El centro además de la banda titular, cuenta con una banda juvenil bajo la dirección de D. Francisco Santos Valverde. La escuela de música está compuesta por más de 100 educandos a partir de 4 años que reciben clases de infancia musical, solfeo e instrumentación y que posteriormente se integran en la banda juvenil, y una escuela de adultos sin límite de edad. ";
                document.getElementById("historiatext8").textContent = "Con una plantilla de 10 profesores titulados atendemos  todas las especialidades musicales y como asociación sin ánimo de lucro ponemos a disposición de todos ustedes en: nuestro local social C/Vicente Puchol, 40 Castellar-Oliveral Valencia 46026.";
                document.getElementById("historiatext9").textContent = "Una mirada hacia atrás";
                document.getElementById("historiatext10").textContent = "Actos pasados";
                document.getElementById("historiatext11").textContent = "Actos 2024";
                document.getElementById("historiatext12").textContent = "Actos 2023";
                document.getElementById("historiatext13").textContent = "Galería de fotos y videos";
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
            if (currentPage === "escuela.html") {
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
                document.getElementById("gallerytext1").textContent = "Todas las fotografías";
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
            if (currentPage === "" || currentPage === "index.html") {
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
                document.getElementById("indextext22").textContent = "Més sobre el cim";
                document.getElementById("indextext23").textContent = "Les nostres xarxes socials";
                document.getElementById("indextext24").textContent = "Vols un poc de nostalgia?";
                document.getElementById("indextext25").textContent = "Visita la antiga pàgina web";
                document.getElementById("oldVersionLink").textContent = "Versió antiga"
            }
            if (currentPage === "historia.html") {
                document.getElementById("historiatext1").textContent = "HISTÒRIA";
                document.getElementById("historiatext2").textContent = "Començem pel principi";
                document.getElementById("historiatext3").textContent = "La nostra història";
                document.getElementById("historiatext4").textContent = "El nostre centre va ser creat a l'abril de 1993, a esta nova banda se li posa el nom de Centre Instructiu Musical Castellar-Oliveral en record de la primera banda que va haver-hi en la nostra pedania fundada en 1933, i dissolta en 1936 per motius de la guerra civil.";
                document.getElementById("historiatext5").textContent = "Amb Sra. Pilar Baiona Monrabal com a presidenta i Sr. Jesús Monto Verdet com a director, ens incorporem a la Federació Valenciana de Societats Musicals i a la Coordinadora de Societats Musicals de la ciutat de València i comencem el recorregut d'actuacions per dins i fora de la nostra comunitat, en tota classe d'actes propis de banda, processons, concerts, festivals, passacarrers, homenatges etc.";
                document.getElementById("historiatext6").textContent = "En 1999 pren el relleu com a director Sr. Manuel Baixauli Ferrer. Des del principi apliquem la intenció de ser banda per al poble i amb l'esperit altruista de servir a estos menesters sempre hem estat a punt i al servici de qualsevol esdeveniment benèfic o festiu que poguera servir per a ajudar a qualsevol causa, i més concretament si de València es tracta. Com a mostra valguen actuacions en partits contra la droga en camps com Mestalla, Pamesa, etc, o concerts participant en actes culturals o benèfics en diverses ciutats i pobles tota Espanya. Actes completament desinteressats.";
                document.getElementById("historiatext7").textContent = "El centre a més de la banda titular, compta amb una banda juvenil sota la direcció de Sr. Francisco Santos Valverde. L'escola de música està composta per més de 100 educands a partir de 4 anys que reben classes d'infància musical, solfeig i instrumentació i que posteriorment s'integren en la banda juvenil, i una escola d'adults sense límit d'edat.";
                document.getElementById("historiatext8").textContent = "Amb una plantilla de 10 professors titulats atenem totes les especialitats musicals i com a associació sense ànim de lucre posem a la disposició de tots vostés en: el nostre local social C/Vicente Puchol, 40 Castellar-Oliveral València 46026.";
                document.getElementById("historiatext9").textContent = "Una mirada enrere";
                document.getElementById("historiatext10").textContent = "Actes passats";
                document.getElementById("historiatext11").textContent = "Actes 2024";
                document.getElementById("historiatext12").textContent = "Actes 2023";
                document.getElementById("historiatext13").textContent = "Galería de fotos i videos";
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
            if (currentPage === "escuela.html") {
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
                document.getElementById("gallerytext1").textContent = "Totes les fotografies";
            }
        }
    }
});