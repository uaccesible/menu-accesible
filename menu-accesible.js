
// Función que inicializa el menú accesible y añade los eventos para su funcionamiento
function iniciarMenuAccesible(){

    // Consulta de todos los enlaces o botones que son desplegables y los recorro para prepararlos
    var elementosDesplegables = document.querySelectorAll("a.accion-desplegable, button.accion-desplegable");
    for (var i = 0; i < elementosDesplegables.length; i++) {

        // Obtengo el objeto del item de la lista
        var accionDesplegable = elementosDesplegables.item(i);

        // Si el enlace o botón tiene la clase contraido, establecemos la propiedad ARIA expandida a true en caso contrario, está expandido
        if (accionDesplegable.classList.contains("contraido")) {
            accionDesplegable.setAttribute("aria-expanded", "false");
        } else {
            accionDesplegable.setAttribute("aria-expanded", "true");
        }

        // Agregamos el evento click a los enlaces o botones que tienen la clase .accion-desplegar para contraer o desplegar el elemento
        accionDesplegable.addEventListener("click", function (event) {

            // Obtenemos el elemento que se debe desplegar o contraer al hacer click que viene dado por el atributo aria-desplegable
            var elementoADesplegar = document.querySelector( this.getAttribute("data-desplegable") );

            // Si el enlace tiene la clase contraido, debemos cambiar sus propiedades y desplegar el elemento indicado
            if( this.classList.contains("contraido") ) {
                this.classList.remove("contraido");
                this.setAttribute("aria-expanded", "true");
                elementoADesplegar.classList.remove("contraido");
                elementoADesplegar.classList.add("expandido");
            } else {
                this.classList.add("contraido");
                this.setAttribute("aria-expanded", "false");
                elementoADesplegar.classList.add("contraido");
                elementoADesplegar.classList.remove("expandido");
            }
        })
    }

}

// Agrego la funcioón de inicialización del menú accesible para cuando la web esté cargada
document.addEventListener("DOMContentLoaded", iniciarMenuAccesible);