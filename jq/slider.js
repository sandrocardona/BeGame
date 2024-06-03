$(document).ready(function() {
    var SliderModule= (function(){
      var pb ={};//creamos un objeto
      pb.elslider=$('#slider');
      // el atributo item es un array que almacena los paneles del slider
      pb.items={
  
        panels: pb.elslider.find('.slider-wrapper > li'),
  
      }
      // inicializamos variables
      var SliderInterval,
          currentSlider =0,
          nextSlider =1,
          lengthSlider=pb.items.panels.length;
  
      // constructor del slider
      pb.init=function(settings){
        var loscontroles= "";
        this.settings=settings||{duration:5000} // o te cojo el valor de los setting o el de la duracion que le pasamos
       // console.log('Inicializado el constructor');
        SliderInit();//para inicializar el slider
        // control del slider con las bolitas
  
        //creamos los controles del slider en tiempo de ejecucion
  
        for (let i = 0; i < lengthSlider; i++) {
         if(i==0){
          loscontroles +='<li class="active"></li>';
         }else{
          loscontroles +='<li></li>'
         }
          
        }
  
        /***********AQUI AÑADO LA LÓGICA DE LOS BOTONES LATERALES ***********************/
  
        
         //insertamos los controles creados en el HTML
         $('#control-buttons').html(loscontroles);
  
  
        $('#control-buttons li').click(function(){
          //al hacer clic vemos en consola el indice de la bolita
         // console.log($(this).index()+" indice bolitas");
         if(currentSlider!== $(this).index()){ // controlamos que no este en la foto que queremos ir
          cambiarPanel($(this).index());
         }
       
        })
  
     
  
      }
      //funcion que inicializa el slider
      var SliderInit= function(){ // esto gestiona la reproducción automatica del slider
        //SliderInterval= setInterval(pb.startSlider,3000);
        SliderInterval= setInterval(pb.startSlider,pb.settings.duration);
      }
  
      pb.startSlider = function(){
          var paneles=pb.items.panels; // cojemos los paneles del slider
          var controles= $('#control-buttons li');
        //console.log("mensaje cada tres segundos")
        if(nextSlider>=lengthSlider){ // definimos cuando llega al ultimo panel vuelva al principo con la reproduccion automatica
          nextSlider=0;
          currentSlider=lengthSlider-1;
        }
        //efectos
        // ekiminamos la clase en todos los controles
        controles.removeClass('active');
        //añadimos la clase al control del panel seleccionado
        controles.eq(nextSlider).addClass('active')
        //efectos transicion
        paneles.eq(currentSlider).fadeOut('slow');
        paneles.eq(nextSlider).fadeIn('slow')
        //actualizamos las variables
       // console.log(nextSlider)
        currentSlider=nextSlider;
        nextSlider+=1;
      }
  
      // funcion para los controles del slider
      // recibe el inidice del panel a mostrar
      var cambiarPanel= function(indice){
        clearInterval(SliderInterval);//limpiamos el intervalos
        var paneles=pb.items.panels;
        var controles =$('#control-buttons li');
        //comprobamos que el indice este disponible dentro de los paneles del slider
        if(indice>=lengthSlider){
          indice=0; // para que no se pase de la cantidad de imagenes
        } else if (indice < 0){
          indice= lengthSlider-1;
        }
        //efectos
        controles.removeClass('active')//eliminmaos la clase en todos los controles
        controles.eq(indice).addClass('active')//añadimos la clase al controls seleccionado
  
        paneles.eq(currentSlider).fadeOut('slow');
      
        // el siguiente panel del slider es que el indique el parametro indice
        paneles.eq(indice).fadeIn('slow');
  
        //actualizamos los datos
        currentSlider=indice;
        nextSlider=indice+1;
        //reactivamos el slider
        SliderInit();
  
      
      }
  
  
      pb.stopSlider = function(){
        clearInterval(SliderInterval)
      }
  
      pb.resumeSlider= function(){
        SliderInit()
      }
  
  
       
          // Agregamos eventos click a los botones laterales
          $('#slider-prev').on('click', function () {
            var nueva= currentSlider-1;
          
            console.log(nueva+"Izquierda");
               cambiarPanel(nueva);
           });
    
           $('#slider-next').on('click', function () {
            var nueva=nextSlider;
            
                console.log(nueva+"Derecha");
              cambiarPanel(nueva);
           });

        // Mostrar caption al hacer clic en la imagen
        $("#slider > ul > li > img").on('click', function() {
            var caption = $(this).siblings('.caption');
            caption.toggle(); // Alternar la visibilidad de la caption
        });
  
      return pb; // devolvemos el objeto
  
     
      
    }());
     // llamamos al constructor

     //duracion tiempo que tarda en cambiar de foto en el slider
   SliderModule.init({duration:6000000});
  
  
            $("#slider > ul>li  > img").on({
            
              mouseenter: function(){
                console.log("entra");
                SliderModule.stopSlider();
              }
  
            })
            $("#slider > ul>li  > img").on({
              mouseleave: function(){
                SliderModule.resumeSlider()
              }
  
            })

            var remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
            // Convertir 5rem a píxeles
            var scrollThreshold = 3 * remInPixels;
  
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > scrollThreshold) {
                  $('.slider-wrapper').css('z-index', '-1');
                } else {
                  $('.slider-wrapper').css('z-index', '500');
                }
            });
  
  });