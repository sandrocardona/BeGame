$(document).ready(function(){
    var SliderModule = (function(){
        var pb = {}; // Creamos un objeto
        // Almacenamos nuestro #slider en el atributo elslider
        pb.elslider = $('#slider');
        // El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li')
        }

        // Variables globales
        var currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        // Constructor del Slider
        pb.init = function(settings){
            var loscontroles = '';
            // console.log("inicializado");

            for (var i = 0; i < lengthSlider; i++) {
                if (i === 0) {
                    loscontroles += '<li class="active"></li>'
                } else {
                    loscontroles += '<li></li>'
                }
            }

            // Insertamos los controles creados en el HTML
            $('#control-buttons').html(loscontroles);

            $('#control-buttons li').click(function(){
                // Al hacer click en la bolita
                console.log($(this).index());
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
            });
        }

        var cambiarPanel = function(indice){
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');
            // Comprobamos que el índice está disponible
            // dentro de los paneles del slider
            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }
            // EFECTOS
            // Eliminamos clase en todos los controles
            controles.removeClass('active');
            // Añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass('active');
            // Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            // El siguiente panel del slider es el que indique el parámetro "indice"
            paneles.eq(indice).fadeIn('slow');

            // Actualizar variables
            currentSlider = indice;
            nextSlider = indice + 1;
        }

        return pb; // Devolvemos el objeto pb
    }()); // () es para que se ejecute automáticamente

    // Llamada al constructor
    SliderModule.init();
});