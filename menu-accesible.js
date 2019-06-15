$(document).ready(function(){
  
  $("button#button-menu").on("click", function(){
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
  });

  /*$("ul#ul-menu li a").on("click",function(){    
    if ( !$("button#button-menu").hasClass("collapsed") ){
      $("#ul-menu").addClass("hidden");           
      $("#ul-menu").attr("aria-expanded","false");

      $("button#button-menu").addClass("collapsed");        
      $("button#button-menu").attr("aria-expanded","false");    
    }
  });*/

});