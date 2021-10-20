$(document).ready(function(){

    $.ajax( {
    
    url:'https://prevision-meteo.ch/services/json/bruxelles-1',
    method: "GET",
    success:function(monObjet) {
     console.log(monObjet);
     //aujourd'hui
     var element = document.getElementById("auj");
         element.innerHTML = '<div><img src="'+monObjet.current_condition.icon_big+'" alt="icon météo"><h1>'+ monObjet.fcst_day_1.day_long +'</h1><h2> Temps actuelle: '+monObjet.current_condition.tmp+'<hr> Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</h2><p>Condition: '+ monObjet.fcst_day_1.condition +'<br>Humidité: '+monObjet.current_condition.humidity+'</p></div>';

//                      jour2
         var element2 = document.getElementById("jour2");
         element2.innerHTML = '<div><img src="'+monObjet.fcst_day_1.icon_big+'" alt="icon météo"><h1>'+ monObjet.fcst_day_1.day_long +'</h1><h2> Temps Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</h2><p>Condition: '+ monObjet.fcst_day_1.condition +'<br>Humidité: '+monObjet.fcst_day_1.humidity+'</p></div>';

//                      jour3
         var element3 = document.getElementById("jour3");
         element3.innerHTML = '<div><img src="'+monObjet.current_condition.icon_big+'" alt="icon météo"><h1>'+ monObjet.fcst_day_1.day_long +'</h1><h2> Temps actuelle: '+monObjet.current_condition.tmp+'<hr> Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</h2><p>Condition: '+ monObjet.fcst_day_1.condition +'<br>Humidité: '+monObjet.current_condition.humidity+'</p></div>';

//                      jour4
         var element4 = document.getElementById("jour4");
         element.innerHTML = '<div><img src="'+monObjet.current_condition.icon_big+'" alt="icon météo"><h1>'+ monObjet.fcst_day_1.day_long +'</h1><h2> Temps actuelle: '+monObjet.current_condition.tmp+'<hr> Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</h2><p>Condition: '+ monObjet.fcst_day_1.condition +'<br>Humidité: '+monObjet.current_condition.humidity+'</p></div>';

//                      jour5
         var element5 = document.getElementById("jour5");
         element5.innerHTML = '<div><img src="'+monObjet.current_condition.icon_big+'" alt="icon météo"><h1>'+ monObjet.fcst_day_1.day_long +'</h1><h2> Temps actuelle: '+monObjet.current_condition.tmp+'<hr> Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</h2><p>Condition: '+ monObjet.fcst_day_1.condition +'<br>Humidité: '+monObjet.current_condition.humidity+'</p></div>';

    } // success function
    }); // ajax 
    
    }); // ready