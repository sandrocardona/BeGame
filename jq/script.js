$(document).ready(function(){
    /* hacer click en div para redirigir a la ruta especificada */
    $(".tarjeta-partidos-annadir").click(function(){
        window.location.href = "../vistas/annadirpartido.html";
    })
    /* flecha hacia atrás */
    $("#arrow-back").click(function(){
        window.history.back();
    })

    /* logo header */
    $("#logo").click(function(){
        window.location.href = "../index.html";
    })

    /* inputs index */
    $(".userInput").on("focusout", function(){
        let value = $(this).val();
        if(value === ""){
            $(this).addClass('placeholder-red').removeClass('placeholder-blue');  // Agrega la clase para cambiar el color del placeholder
            $("#span-error").text("Campo vacío");  // Establece el texto del mensaje de error
        } else {
            $(this).addClass('placeholder-blue').removeClass('placeholder-red');  // Cambia la clase si hay un valor en el input
            $("#span-error").text("");  // Limpia el mensaje de error si el campo no está vacío
        }
    });

    /* === MENU === */
        /* pagina principal */
        $("#div-menu > ul > li#pagina-principal").on("click", function(){
            window.location.href = "../index.html";
        })

        /* buscar partido */
        $("#div-menu > ul > li#buscar-partido").on("click", function(){
            window.location.href = "../vistas/partidosDisponibles.html";
        })

        /* crear partido */
        $("#div-menu > ul > li#crear-partido").on("click", function(){
            window.location.href = "../index.html";
        })

        /* mi cuenta */
        $("#div-menu > ul > li#mi-cuenta").on("click", function(){
            window.location.href = "../vistas/usuarioDesplegado.html";
        })

            /* (al clicar en mi cuenta) */
            

        /* contacto */
        $("#div-menu > ul > li#contacto").on("click", function(){
            $('html, body').animate({
                scrollTop: $('footer').offset().top - 60,
            }, 1000)
        })

        /* sobre los campos */
        $("#div-menu > ul > li#sobre-los-campos").on("click", function(){
            window.location.href = "../vistas/sobreloscampos.html";
        })

        /* cerrar sesión */
        $("li#cerrar-sesion").on("click", function(){
            window.location.href = "../vistas/pantallaAcceso.html";
        })

    /* Mostrar mensaje al clickar boton Enviar en footer */
         // Recuperar el mensaje almacenado en localStorage al cargar la página
        var mensajeGuardado = localStorage.getItem('mensaje');
        if (mensajeGuardado) {
            $("#mensaje").text(mensajeGuardado).show();
            setTimeout(function(){
                $("#mensaje").hide();
                localStorage.removeItem('mensaje');
            }, 1500);
        }

        $("#btnEnviar").click(function(){

            var email = $("input[name='email']").val();
            var nombre = $("input[name='nombre']").val();

            if(email === "" || nombre === ""){
                // Guardar el mensaje en localStorage
                var mensaje = "¡Email o nombre vacíos!";
                localStorage.setItem('mensaje', mensaje);
            } else {
                // Guardar el mensaje en localStorage
                var mensaje = "¡Formulario enviado correctamente!";
                localStorage.setItem('mensaje', mensaje);
            }
        })

        /* mostrar menú */
        $("#menu-toggle-btn").on("click", function(e){
            if($(this).hasClass("open")){
                $("#contenedor-menu").stop(true).slideUp("slow");
                $(this).removeClass();
            }
            else{
                $(this).toggleClass("open");
                $("#contenedor-menu").stop(true).slideDown("slow");
            }
        })

    $(document).on("scroll", function(){
        if($("#menu-toggle-btn").hasClass("open")){
            $("#contenedor-menu").stop(true).slideUp();
            $("#menu-toggle-btn").removeClass();
        }
    })

    /* infoCuenta.html */
    $("#btn-cambiarmisdatos").on("click", function(){
        window.location.href = "../vistas/cambiarDatos.html";
    })

    /* usuarioDesplegado.html */

    $("#li-mispartidos").on("click", function(){
        window.location.href = "../vistas/misPartidos.html";
    })

    $("#li-informaciondemicuenta").on("click", function(){
        window.location.href = "../vistas/infoCuenta.html";
    })

    }) //Document