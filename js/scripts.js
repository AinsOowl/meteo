$(document).ready(function(){

    MaFonctionAjax("Bruxelles-1");
    
	$( "#go" ).click(function() {
        let ville = $('#ville').val();
        MaFonctionAjax(ville);
        console.log(ville)
        }); 

        function MaFonctionAjax(ville) {

    $.ajax( {
    
    url:'https://www.prevision-meteo.ch/services/json/'+ville,
    method: "GET",
    success:function(monObjet) {
     console.log(monObjet);
     //aujourd'hui
     var element = document.getElementById("auj");
         element.innerHTML = '<div><img class="iconsauj" src="'+monObjet.current_condition.icon_big+'" alt="icon météo"><h1> <div class="dayname">'+ monObjet.fcst_day_1.day_long +'</div><br><div class"date">'+ monObjet.current_condition.date+'</div></h1><h2> <div class="ville"'+ville+'</div><br> <div class="tempact"> Temps actuelle: '+monObjet.current_condition.tmp+'</div><hr> <div class="tempM"> Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</div></h2><p><div class="condition">Condition: '+ monObjet.fcst_day_1.condition +'</div><br><div class="humidite">Humidité: '+monObjet.current_condition.humidity+'% </div><br><div class="dirvent">Direction du vent: '+monObjet.current_condition.wnd_spd+'m/s</div><div class="vitvent">Vitesse du vent: '+monObjet.current_condition.wnd_dir+'</div><div class="pression">Pression: '+monObjet.current_condition.pressure+' bars</div></p></div>';

//                      jour2
         var element2 = document.getElementById("jour2");
         element2.innerHTML = '<div><img class="icons" src="'+monObjet.fcst_day_1.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_1.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_1.date+'</div></h1><h2><div class="tempM"> Temps Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_1.condition +'</p></div>';

//                      jour3
         var element3 = document.getElementById("jour3");
         element3.innerHTML = '<div><img class="icons" src="'+monObjet.fcst_day_2.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_2.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_2.date+'</div></h1><h2><div class="tempM"> Temps Min/Max: '+ monObjet.fcst_day_2.tmin +'°/'+ monObjet.fcst_day_2.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_2.condition +'</p></div>';

//                      jour4
        var element4 = document.getElementById("jour4");
        element4.innerHTML = '<div><img class="icons" src="'+monObjet.fcst_day_3.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_3.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_3.date+'</div></h1><h2 class="tempM" Temps> Min/Max: '+ monObjet.fcst_day_3.tmin +'°/'+ monObjet.fcst_day_3.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_3.condition +'</p></div>';

//                      jour5
        var element5 = document.getElementById("jour5");
        element5.innerHTML = '<div><img class="icons" src="'+monObjet.fcst_day_4.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_4.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_4.date+'</div></h1><h2> class="tempM" Temps> Min/Max: '+ monObjet.fcst_day_4.tmin +'°/'+ monObjet.fcst_day_4.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_4.condition +'</p></div>';

} // success function
                 
}); // ajax






}



});