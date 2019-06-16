document.addEventListener("DOMContentLoaded", function(){

    /*
    * Añadimos el atributo aria-expanded a todos los enlaces y botones marcados con la clase .accion-desplegable.
    * Si además tiene la clase contraido la asignamos false y si no a true
    * */
    $("a.accion-desplegable, button.accion-desplegable").each( function() {
        var accionDesplegable = $(this);
        var elementoDesplegable = $(accionDesplegable.attr("data-desplegable"));
        if (accionDesplegable.hasClass("contraido")) {
            accionDesplegable.attr("aria-expanded", "false");
        } else {
            accionDesplegable.attr("aria-expanded", "true");
        }
    });

    /*
    * Agregamos el evento click a los enlaces o botones que tienen la clase .accion-desplegar para contraer o desplegar el elemento
    * */
    $("a.accion-desplegable, button.accion-desplegable").on("click", function() {
        var accionDesplegable = $(this);
        var elementoDesplegable = $(accionDesplegable.attr("data-desplegable"));
        if (accionDesplegable.hasClass("contraido")) {
            accionDesplegable.removeClass("contraido");
            accionDesplegable.attr("aria-expanded", "true");
            elementoDesplegable.removeClass("contraido");
        } else {
            accionDesplegable.addClass("contraido");
            accionDesplegable.attr("aria-expanded", "false");
            elementoDesplegable.addClass("contraido");
        }
    });
});