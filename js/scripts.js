$(document).ready(function(){

    $.ajax( {
    
    url:'https://prevision-meteo.ch/services/json/bruxelles-1',
    method: "GET",
    success:function(monObjet) {
     console.log(monObjet);

     $('#contenant').append('<div><h2>'+ monObjet +'</h2></div>')

    } // success function
    }); // ajax 
    
    }); // ready