const { createApp } = Vue;

createApp({
    data(){
        return {
        }
    },

    components: {

        "sec_heder":{
            template: '<header> <section class="head"> <a id="tituloPag" href="index.html"><h1>Recorre Argentina</h1></a> </section> <!-- start nav --> <nav id="menu"> <!-- start menu --> <ul> <li><a href="index.html"><i class="fa-solid fa-house"></i></a></li> <li><a href="#">Destinos</a> <!-- start menu desplegable --> <ul> <li><a href="destino_cordoba.html">Córdoba</a></li> <li><a href="destino_santafe.html">Santa Fe</a></li> <li><a href="destino_mendoza.html">Mendoza</a></li> <li><a href="destino_salta.html">Salta</a></li> </ul> <!-- end menu desplegable --> </li> <li><a href="about.html">FAQ</a></li> <li><a href="contacto.html">Contacto</a></li> </ul> <!-- end menu --> </nav> <!-- end nav --> </header>'
        },

    }
}).mount("#hederApp")


createApp({
    data(){
        return {
        }
    },

    components: {

        "sec_footer":{
            template: '<footer><section id="redes"> <a href="https://twitter.com/" target="_blank"> <i class="fa fa-twitter-square fa"></i> </a> <a href="https://www.facebook.com/" target="_blank"> <i class="fab fa-facebook-f"> </i> </a> <a href="https://www.pinterest.com/" target="_blank"> <i class="fab fa-instagram"></i> </a> <a href="https://www.linkedin.com/" target="_blank"> <i class="fab fa-linkedin-in"></i> </a></section> <section id="subFooter"> <a href="https://github.com/JonatanMartinez1310" target="_blank">Jonatan Martínez</a> <a href="https://github.com/Pettu93" target="_blank">Cintia Cuevas</a> <a href="https://github.com/PabloDanielMoyano" target="_blank">Pablo Moyano</a> <a href="https://github.com/TomasCornara" target="_blank">Tomas Cornara</a> </section></footer>'
        },

    }
}).mount("#footerApp")



