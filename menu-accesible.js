document.addEventListener("DOMContentLoaded", function(){
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


//$(document).ready(function(){



    /*$("button#button-menu").on("click", function(){
    var obj = $(this);
    if ( obj.hasClass("contraido") ) {
       obj.removeClass("contraido");
       obj.attr("aria-expanded","true");

       $("#ul-menu").removeClass("myhidden");
       $("#ul-menu").attr("aria-expanded","true");
    }else {
      obj.addClass("contraido");
      obj.attr("aria-expanded","false");

      $("#ul-menu").addClass("myhidden");           
      $("#ul-menu").attr("aria-expanded","false");
    }
  });*/

  /*$("ul#ul-menu li a").on("click",function(){    
    if ( !$("button#button-menu").hasClass("collapsed") ){
      $("#ul-menu").addClass("hidden");           
      $("#ul-menu").attr("aria-expanded","false");

      $("button#button-menu").addClass("collapsed");        
      $("button#button-menu").attr("aria-expanded","false");    
    }
  });*/

//});