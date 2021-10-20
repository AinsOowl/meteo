$(document).ready(function(){

    $.ajax( {
    
    url:'https://prevision-meteo.ch/services/json/bruxelles-1',
    method: "GET",
    success:function(monObjet) {
     console.log(monObjet);
     var element = document.getElementById("temps");
         element.innerHTML = '<div><h1>'+ monObjet.fcst_day_1.tmin +'</h1><h2>'+ monObjet.fcst_day_1.day_long +'</h2><p>'+ monObjet.fcst_day_1.condition +'</p></div>';

     //for(i=0; i<monObjet; i++){
     //    console.log(monObjet[i]);
    

//$('#contenant').append('<div><h2>'+ monObjet[i] +'</h2></div>')


//}
    } // success function
    }); // ajax 
    
    }); // ready