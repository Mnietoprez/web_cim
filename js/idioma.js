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
            document.getElementById("langtxtc").style.display = "none";
            document.getElementById("langtxtv").style.display = "flex";
            document.getElementById("langphoto").src = "./img/archivos_menus/valencia.png";
            document.getElementById("title").textContent = "HACIENDO BANDA";
            document.getElementById("nav1").textContent = "Inicio";
            document.getElementById("nav2").textContent = "Historia";
            document.getElementById("nav3").textContent = "Escuela";
            document.getElementById("nav4").textContent = "Galería";
            document.getElementById("nav5").textContent = "Contacto";
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
            
            
        } else {
            document.getElementById("langtxtv").style.display = "none";
            document.getElementById("langtxtc").style.display = "flex";
            document.getElementById("langphoto").src = "./img/archivos_menus/españa.png";
            document.getElementById("title").textContent = "FENT BANDA";
            document.getElementById("nav1").textContent = "Inici";
            document.getElementById("nav2").textContent = "Història";
            document.getElementById("nav3").textContent = "Escola";
            document.getElementById("nav4").textContent = "Galería";
            document.getElementById("nav5").textContent = "Contacte";
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
        }
    }
});