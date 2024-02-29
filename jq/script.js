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
            // Guardar el mensaje en localStorage
            var mensaje = "¡Formulario enviado con éxito!";
            localStorage.setItem('mensaje', mensaje);
        })
    })