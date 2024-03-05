function dropdown(dropid) {
    var dropdownContent = document.getElementById(dropid);
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
}


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
var concertnadal2008;
var ateneo2009;
var colo2009;
var audicio2009;
var cultural2009;
var intercanvi2009;
var santacecilia2009;
var santacecilia2010;
var audicionadal2009;
var concert2009;
var expojove2009;
var nadal2010;
var solistes2010;
var audicio2010;
var cultural2011;
var nadal2011;
var santacecilia2011;
var santacecilia2012;
var audicions2012;
var nadal2012;
var solidari2013;
var audicio2013;
var santacecilia2013;
var santacecilia2014;
var santacecilia2015;
var santacecilia2016;
var santacecilia2017;
var santacecilia2018;


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
    concertnadal2008 = document.getElementById("concertnadal2008");
    ateneo2009 = document.getElementById("ateneo2009");
    audicio2009 = document.getElementById("audicio2009");
    colo2009 = document.getElementById("colo2009");
    cultural2009 = document.getElementById("cultural2009");
    intercanvi2009 = document.getElementById("intercanvi2009");
    santacecilia2009 = document.getElementById("santacecilia2009");
    santacecilia2010 = document.getElementById("santacecilia2010");
    audicionadal2009 = document.getElementById("audicionadal2009");
    concert2009 = document.getElementById("concert2009");
    expojove2009 = document.getElementById("expojove2009");
    nadal2010 = document.getElementById("nadal2010");
    solistes2010 = document.getElementById("solistes2010");
    audicio2010 = document.getElementById("audicio2010");
    cultural2011 = document.getElementById("cultural2011");
    santacecilia2011 = document.getElementById("santacecilia2011");
    nadal2011 = document.getElementById("nadal2011");
    santacecilia2012 = document.getElementById("santacecilia2012");
    audicions2012 = document.getElementById("audicions2012");
    nadal2012 = document.getElementById("nadal2012");
    solidari2013 = document.getElementById("solidari2013");
    audicio2013 = document.getElementById("audicio2013");
    santacecilia2013 = document.getElementById("santacecilia2013");
    santacecilia2014 = document.getElementById("santacecilia2014");
    santacecilia2015 = document.getElementById("santacecilia2015");
    santacecilia2016 = document.getElementById("santacecilia2016");
    santacecilia2017 = document.getElementById("santacecilia2017");
    santacecilia2018 = document.getElementById("santacecilia2018");



    if (carro == "frontcarrousel"){
        actual.style.display = "none";
        actual = document.getElementById("frontcarrousel");
        frontcarrousel.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Fotografies destacades";
        document.getElementById("gallerydesc").innerHTML= "Selecció de moments del CIM";
    }

    if (carro == "expojove2009"){
        actual.style.display = "none";
        actual = document.getElementById("expojove2009");
        expojove2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert a Expojove";
        document.getElementById("gallerydesc").innerHTML= "Any 2009";
    }

    if (carro == "santacecilia2013"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2013");
        santacecilia2013.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Santa Cecíla";
        document.getElementById("gallerydesc").innerHTML= "Any 2013";
    }

    if (carro == "santacecilia2014"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2014");
        santacecilia2014.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Santa Cecíla";
        document.getElementById("gallerydesc").innerHTML= "Any 2014";
    }

    if (carro == "santacecilia2015"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2015");
        santacecilia2015.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Santa Cecíla";
        document.getElementById("gallerydesc").innerHTML= "Any 2015";
    }

    if (carro == "santacecilia2016"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2016");
        santacecilia2016.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Santa Cecíla";
        document.getElementById("gallerydesc").innerHTML= "Any 2016";
    }

    if (carro == "santacecilia2017"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2017");
        santacecilia2017.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Santa Cecíla";
        document.getElementById("gallerydesc").innerHTML= "Any 2017";
    }

    if (carro == "santacecilia2018"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2018");
        santacecilia2018.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Santa Cecíla";
        document.getElementById("gallerydesc").innerHTML= "Any 2018";
    }

    if (carro == "solidari2013"){
        actual.style.display = "none";
        actual = document.getElementById("solidari2013");
        solidari2013.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert solidari";
        document.getElementById("gallerydesc").innerHTML= "El dissabte 27 de Abril de 2013 al nostre local vam celebrar un concert solidari inclòs al cicle de concerts que promou la Coordinadora de societats musicals de la ciutat de València,amb el motiu de recaudar aliments per les famílies més necessitades. Van actuar els conjunts novels instrumentals de la Societat musical Unió de pescadors del Cabanyal, i el conjunt instrumental novel del nostre C.I.M.  Al termini de l'acte, la nostra societat va oferir un vi d'honor als asistents. Els aliments recollits es repartiren en las parròquies locals de Castellar i Oliveral. Els components del centre donem les gràcies a tots per la seua aportació.";
    }

    if (carro == "audicio2013"){
        actual.style.display = "none";
        actual = document.getElementById("audicio2013");
        audicio2013.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Audicions d'estiu 2013";
        document.getElementById("gallerydesc").innerHTML= "Per tancar el curs 2012-2013, els alumnes del centre ens obsequiaren amb una mostra dels seus progressos musicals. Es va tindre que fer en dos díes degut al número de participants, que encara que no van eixir tots, si eren nombrosos. A més, vam viure un moment inolvidable i ple d'emoció quan Miguel va cantar una cançó en record del nostre alumne volgut Victor, recentment mort. Al termini dels dos díes, vam repartir horchata i rosquilletes per a músics i public asistent. Fotos a continuació:";
    }

    if (carro == "cultural2011"){
        actual.style.display = "none";
        actual = document.getElementById("cultural2011");
        cultural2011.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Setmana Cultural 2011";
        document.getElementById("gallerydesc").innerHTML= "Com ve siguent habitual, la nostra banda va organitzar un concert col·laborant amb l'Associació de Veíns Castellar-Oliveral en la seua semana cultural anual. A la Presi Matide li encanta escoltar el pasodoble que en el seu día li dedicà José León, i la nostra banda sel tornà a dedicar. També va resultar molt emotiu el moment en que es va interpretar 'Cançons Valencianes', obra per orquesta i dolçaina, composada també pel nostre músic José León i interpretada magistralment pel nostre volgut músic Vicente Sanjuan, 'Visent per als amics'. Al finalitzar el concert, l'associació va fer entrega a nostra Presidenta Pilar una placa en record de l'acte. A continuació la A.A.V.V. va repartir horchata y fartons als asistents.  A continuació es mostresn les fotografíes de l'acte del día 29 de Maig";
    }

    if (carro == "nadal2011"){
        actual.style.display = "none";
        actual = document.getElementById("nadal2011");
        nadal2011.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Nadal 2011";
        document.getElementById("gallerydesc").innerHTML= "El diumenge día 18 de desembre, vam celebrar el tradicional concert de Nadal amb l'actuació de la nostra banda i els alumnes de l'escola del centre. En aquesta ocasió va tindre lloc a l'Esglèsia San Martí de Porres de l'Oliveral. Els assistents portaren voluntàriament aliments no peribles per a les famílies més necessitades. ";
    }
    
    
    if (carro == "nadal2012"){
        actual.style.display = "none";
        actual = document.getElementById("nadal2012");
        nadal2012.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Nadal 2012";
        document.getElementById("gallerydesc").innerHTML= "El concert de Nadal d'aquest any el vam celebrar a l'esglèsia San Martí de Porres de l'Oliveral. Vam poder veure a la nostra banda i als nostres alumnes més petits de l'escola cantant nadalenques populars. També va ser de l'agrat del públic la broma realitzada per els músics amb l'obra 'The Typewriter'. El nostre centre tenía la voluntat de replegar aliments per als més necessitats, i la gent va respondre desinteresadament en aquesta tasca, i desde ací els agraïm la seua col·laboració. A continuació del concert ens anarem al nostre centre on ens esperava una 'xocolatà' preparada per les nostres expertes Sari, Pili y Pilar amb rosquilletes donades per productes Velarte.";
    }

    if (carro == "audicions2012"){
        actual.style.display = "none";
        actual = document.getElementById("audicions2012");
        audicions2012.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Audicions de Nadal 2012";
        document.getElementById("gallerydesc").innerHTML= "Com ve siguent habitual, vam celebrar les audicions de nadal, on vam poder comprobar els avanços musicals dels que s'atrevixen a pujar a l'escenari. A continuació va actuar la banda juvenil dirigida pel su director Jose León Alapont.  ";
    }


    if (carro == "santacecilia2012"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2012");
        santacecilia2012.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Santa Cecília 2012";
        document.getElementById("gallerydesc").innerHTML= "Un any més i malgrat la crisi, rendim honors a la nostra patrona Santa Cecília. El diumenge 24 de novembre a les 12 hores i en la parròquia San Martí de Porres de l'Oliveral es va oferir una misa d'acció de gràcies, i el dissabte 24 a les 17 hores es va realitzar un pasacarrer i un concert en el local social, on actuaren primer el conjunt instrumental juvenil i a continuació la banda del centre. En el acte es van presentar i es van entregar un diploma als músics actuals de la banda juvenil i als que es van incorporar.  A continuació es va servir un vi d'honor als asistents. Per la nit es va oferir un sopar de sobaquillo als components de les bandes. El concert de la nostra banda va estar dirigit com sempre pel nostre director D. Manuel Baixauli Ferrer, pero com al programa constaven obres de compositors de la casa, como son: José Hernandis Dalmau, José León Alapont,  Jesús Monto Verdet y Vicente Ortí, els va anar cedint la batuta. També va actuar el cor del centre cantant l'himne del centre. Al final es va interpretar l'himne regional cantat per Miguel, component del cor.";
    }


    if (carro == "santacecilia2011"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2011");
        santacecilia2011.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Santa Cecília 2011";
        document.getElementById("gallerydesc").innerHTML= "Els actes en honor a Santa Cecília, patrona dels músics, no deuen faltar. Per això aquest any, encara que de forma modesta, vam preparar misa, concert, actuacions, chocolate i sopar per als músics. La misa es va celebrar en la parròquia de Castellar, i la imatge de la Santa va recórrer els carrers del nostre barri.";
    }

    if (carro == "audicio2010"){
        actual.style.display = "none";
        actual = document.getElementById("audicio2010");
        audicio2010.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Audicions de Nadal";
        document.getElementById("gallerydesc").innerHTML= "Complint amb la tradició, el dimarts día 21 vam celebrar les audicions de l'escola del centre. Com sempre, els més atrevits ens van deleitar amb els seus progressos en aquest art musical, que pel fet de pujar a l'escenari ja és tot un avanç. ";
    }


    if (carro == "nadal2010"){
        actual.style.display = "none";
        actual = document.getElementById("nadal2010");
        nadal2010.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de Nadal";
        document.getElementById("gallerydesc").innerHTML= "El diumenge 19 de desembre, a les 18:30 hores i en el nostre local social, es va celebrar el tradicional concert de Nadal. Aquest any colaborarem amb l'Associació Juvenil Nova Vida, per el que els asistents a l'acte es van solidaritzar amb aquesta causa i van portar joguets per a aquestos xiquets tan necessitats GRACIES A TOTS. Al concert actuaren juntament a la banda del centre els alumnes més xicotets de l'escola.";
    }

    if (carro == "solistes2010"){
        actual.style.display = "none";
        actual = document.getElementById("solistes2010");
        solistes2010.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de solistes";
        document.getElementById("gallerydesc").innerHTML= "El 18 de Març es va celebrar al nostre local un concert en que els nostres músics posaren tot el seu esforç per que eixira bé, i així va ser. Com és habitual, la nostra presi va presentar el programa, al director de la banda i als músics, entre ells els solistes que ens deleitarien a continuació amb les seues obres.";
    }

    if (carro == "santacecilia2010"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2010");
        santacecilia2010.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Santa Cecília 2010";
        document.getElementById("gallerydesc").innerHTML= "Com tots els anys s'enaltix la figura de la nostra patrona Santa Cecilia. Vegen a continuació una mostra de la colecció de fotos dels actes en el seu honor. A més, aquest any va ser el torn del músic Marc Navarro Asensi per a incorporar-se a la banda. Aquesta va estar preparant un pas-doble sense títol, composat pel jove músic Daniel Rubio Ortells. Ningú savia per a qui el composà, segons Daniel ho revelaría el mateix día del concert. Bé, així va ser. Aplegat el moment i després de la presentació de Marc, la presidenta va desvelar que Daniel havia tingut la idea de donar la benvinguda a Marc dedicant-li el pas-doble 'Benvingut Marc'";
    }

    if (carro == "intercanvi2009"){
        actual.style.display = "none";
        actual = document.getElementById("intercanvi2009");
        intercanvi2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert d'intercanvi amb el CIM Tendetes";
        document.getElementById("gallerydesc").innerHTML= "El dissabte dia 11 de Juliol, a l'Escola de les Trinitàries de Castellar va tindre lloc el concert d'intercanvi de 2009 amb la banda del C.I.M. Tendetes i el nostre C.I.M. Castellar-Oliveral. En aquest concert vam poder escoltar alguns pasdobles del nostre músic i compositor José León. Músics Flamencs per part del C.I.M. Tendetes i Matilde Ramos pel C.I.M. Castellar-Oliveral.";
    }

    if (carro == "audicionadal2009"){
        actual.style.display = "none";
        actual = document.getElementById("audicionadal2009");
        audicionadal2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Audició de nadal 2009";
        document.getElementById("gallerydesc").innerHTML= "El día 22 de Desembre es van celebrar les audicions de Nadal, on els alumnes més valents van tindre l'oportunitat de demostrar els seus progresos, animant a la resta de alumnes de la escola a participar en les próximes.";
    }

    if (carro == "concert2009"){
        actual.style.display = "none";
        actual = document.getElementById("concert2009");
        concert2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de nadal 2009";
        document.getElementById("gallerydesc").innerHTML= "El día 20 de Desembre de 2009 a les 18:30 hores es va celebrar el tradicional concert de Nadal, amb l'actuació de la banda i els alumnes més menuts del centre. L'espectacle va resultar brillant, vegen a continuació les fotos de l'acte. Al final vam tindre torrons, mistela i tertulia";
    }

    if (carro == "cultural2009"){
        actual.style.display = "none";
        actual = document.getElementById("cultural2009");
        cultural2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert setmana cultural de l'associació de veïns";
        document.getElementById("gallerydesc").innerHTML= "Com tots els anys, col·laborem en la setmana cultural de l'associació de veïns de Castellar-Oliveral. En aquesta ocasió el nostre músic i compositor José León a petició de la directiva de l'associació va compondre un pasdoble dedicat merescudament a la presidenta d'esta associació a la qual va dedicar. El pasdoble sorpresa dirigit pel mateix José León, lletra d'Eduardo Alacreu i cantat per la filla d'este Inés, emocionà molt a la Presi que no ho esperava. T'ho mereixes Presi! Eduardo en representació de la A.A.V.V, va fer lliurament d'un regal al centre que va consistir en la partitura dels Pirates del Carib. Així mateix Matilde va fer lliurament dels corbatins al centre i a la banda dels Corrals d'Utiel que va participar en el concert.";
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

    if (carro == "colo2009"){
        actual.style.display = "none";
        actual = document.getElementById("colo2009");
        colo2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert al Mercat de Coló";
        document.getElementById("gallerydesc").innerHTML= "Any 2009";  
    }

    if (carro == "audicio2009"){
        actual.style.display = "none";
        actual = document.getElementById("audicio2009");
        audicio2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Audició d'estiu 2009";
        document.getElementById("gallerydesc").innerHTML= "Fotos dels alumnes que van intervenir en les Audicions de 2009. Invitem a la resta a que s'animen per a l'any próxim a eixir a demostrar el que han après. Gracies a tots de totes formes. El centre instructiu felicita a tots els alumnes i al finalitzar les audicions van tindre berenar tots, y fins a l'any próxim...";  
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

    if (carro == "concertnadal2008"){
        actual.style.display = "none";
        actual = document.getElementById("concertnadal2008");
        concertnadal2008.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert de nadal 2008";
        document.getElementById("gallerydesc").innerHTML= "El dia 21 de desembre de 2008 a les 18:30 es va celebrar el tradicional concert de nadal amb la actuació de la banda, el cor i els alumnes més menuts del centre. L'espectacle va resultar brillant, com es pot apreciar en les fotografíes. A més, es va entregar per part de la delegada de cultura de la Junta municipal de Russafa una placa en record del acte que estava inclòs en els Concerts de la Junta de Russafa.";
    }

    if (carro == "santacecilia2009"){
        actual.style.display = "none";
        actual = document.getElementById("santacecilia2009");
        santacecilia2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Actes de Santa Cecília 2009";
        document.getElementById("gallerydesc").innerHTML= "Per les festivitats de Santa Cecília, a l'any 2009 es va realitzar un berenar per als educands, un concert el dissabte 21 i un sopar de germanor per als músics i la directiva. A més, va actuar la orquesta 'La antiga de Torremar', es van lliurar els premis del torneig de parxís i es va estrenar el pas-doble composat per Daniel Rubio Ortells, dedicat al professor de solfeig y saxo, José Hernandis Dalmau";
    }

    if (carro == "ateneo2009"){
        actual.style.display = "none";
        actual = document.getElementById("ateneo2009");
        ateneo2009.style.display ="flex";
        document.getElementById("gallerytext").innerHTML= "Concert a l'Ateneu Mercantil 2009";
        document.getElementById("gallerydesc").innerHTML= "El día 16 de Maig de 2009 es va realitzar aquest concert per celebrar el centenari de la exposició regional de València 1909-2009 i del himne regional valencià. Vam tindre l'honor de ser una de les tres bandes invitades a participar als actes."; 
    }

 }