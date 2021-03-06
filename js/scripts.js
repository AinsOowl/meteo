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
         element.innerHTML = '<div><img id="icon1" class="iconsauj" src="'+monObjet.current_condition.icon_big+'" alt="icon météo"><h1> <div class="dayname">'+ monObjet.fcst_day_1.day_long +'</div><br><div class"date">'+ monObjet.current_condition.date+'</div></h1><div class="nomville">'+ville+'</div><h2> <div class="ville"'+ville+'</div><br> <div class="tempact"> Temps actuelle: '+monObjet.current_condition.tmp+'</div><br> <div class="tempM"> Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</div></h2><p><div class="condition"><p>Condition: '+ monObjet.current_condition.condition +'</div><br><p><div class="humidite"><p>Humidité: '+monObjet.current_condition.humidity+'% </p></div><br><div class="dirvent"><p>Direction du vent: '+monObjet.current_condition.wnd_spd+'m/s</p></div><div class="vitvent"><p>Vitesse du vent: '+monObjet.current_condition.wnd_dir+'</p></div><div class="pression"><p>Pression: '+monObjet.current_condition.pressure+' bars</p></div></p></div>';


//                      icones jour 1
         if (monObjet.current_condition.condition_key=="ensoleille"|| monObjet.current_condition.condition_key=="eclaircies"||monObjet.current_condition.condition_key=="averses-de-pluie-faible"||
         monObjet.current_condition.condition_key=="pluie-forte"|| monObjet.current_condition.condition_key=="neige-moderee"||
         monObjet.current_condition.condition_key=="nuit-nuageuse"||
         monObjet.current_condition.condition_key=="brouillard"||
         monObjet.current_condition.condition_key=="faibles-passages-nuageux") {
             $('#icon1').attr("src","img/"+monObjet.current_condition.condition_key+".png");
             $('#imgfond').attr("src","img/"+monObjet.current_condition.condition_key+".jpeg");
        } else {
             $('#icon1').attr("src","https://prevision-meteo.ch/style/images/icon/"+monObjet.current_condition.condition_key+"-big.png");  
         }


//                      jour2
         var element2 = document.getElementById("jour2");
         element2.innerHTML = '<div class="joursui"><img id="icon2" class="icons" src="'+monObjet.fcst_day_1.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_1.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_1.date+'</div></h1><h2><div class="tempM"> Temps Min/Max: '+ monObjet.fcst_day_1.tmin +'°/'+ monObjet.fcst_day_1.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_1.condition +'</p></div>';


//                      icones jour 2
         if (monObjet.fcst_day_1.condition_key=="ensoleille"|| monObjet.fcst_day_1.condition_key=="eclaircies"||monObjet.fcst_day_1.condition_key=="averses-de-pluie-faible"||
         monObjet.fcst_day_1.condition_key=="pluie-forte"|| monObjet.fcst_day_1.condition_key=="neige-moderee"||
         monObjet.fcst_day_1.condition_key=="brouillard"||
         monObjet.fcst_day_1.condition_key=="faibles-passages-nuageux") {
             $('#icon2').attr("src","img/"+monObjet.fcst_day_1.condition_key+".png");
         } else {
              $('#icon2').attr("src","https://prevision-meteo.ch/style/images/icon/"+monObjet.fcst_day_1.condition_key+"-big.png");  
         }


//                      jour3
         var element3 = document.getElementById("jour3");
         element3.innerHTML = '<div class="joursui"><img id="icon3" class="icons" src="'+monObjet.fcst_day_2.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_2.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_2.date+'</div></h1><h2><div class="tempM"> Temps Min/Max: '+ monObjet.fcst_day_2.tmin +'°/'+ monObjet.fcst_day_2.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_2.condition +'</p></div>';


//                      icones jour 3
         if (monObjet.fcst_day_2.condition_key=="ensoleille"|| monObjet.fcst_day_2.condition_key=="eclaircies"||monObjet.fcst_day_2.condition_key=="averses-de-pluie-faible"||
         monObjet.fcst_day_2.condition_key=="pluie-forte"|| monObjet.fcst_day_2.condition_key=="neige-moderee"||
         monObjet.fcst_day_2.condition_key=="brouillard"||
         monObjet.fcst_day_2.condition_key=="faibles-passages-nuageux") {
             $('#icon3').attr("src","img/"+monObjet.fcst_day_2.condition_key+".png");
         } else {
               $('#icon3').attr("src","https://prevision-meteo.ch/style/images/icon/"+monObjet.fcst_day_2.condition_key+"-big.png");  
         }

//                      jour4
        var element4 = document.getElementById("jour4");
        element4.innerHTML = '<div class="joursui"><img id="icon4" class="icons" src="'+monObjet.fcst_day_3.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_3.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_3.date+'</div></h1><h2 class="tempM">  Temps Min/Max: '+ monObjet.fcst_day_3.tmin +'°/'+ monObjet.fcst_day_3.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_3.condition +'</p></div>';


//                      icones jour 4
        if (monObjet.fcst_day_3.condition_key=="ensoleille"|| monObjet.fcst_day_3.condition_key=="eclaircies"||monObjet.fcst_day_3.condition_key=="averses-de-pluie-faible"||
         monObjet.fcst_day_3.condition_key=="pluie-forte"|| monObjet.fcst_day_3.condition_key=="neige-moderee"||
         monObjet.fcst_day_3.condition_key=="brouillard"||
         monObjet.fcst_day_3.condition_key=="faibles-passages-nuageux") {
             $('#icon4').attr("src","img/"+monObjet.fcst_day_3.condition_key+".png");
         } else {
             $('#icon4').attr("src","https://prevision-meteo.ch/style/images/icon/"+monObjet.fcst_day_3.condition_key+"-big.png");
         }

//                      jour5
        var element5 = document.getElementById("jour5");
        element5.innerHTML = '<div class="joursui"><img id="icon5" class="icons" src="'+monObjet.fcst_day_4.icon_big+'" alt="icon météo"><h1><div class="dayname">'+ monObjet.fcst_day_4.day_long +'</div><br><div class="date">'+ monObjet.fcst_day_4.date+'</div></h1><h2 class="tempM"> Temps Min/Max: '+ monObjet.fcst_day_4.tmin +'°/'+ monObjet.fcst_day_4.tmax+'°'+'</h2><p class="condition">Condition: '+ monObjet.fcst_day_4.condition +'</p></div>';

//                      icones jour 5
        if (monObjet.fcst_day_4.condition_key=="ensoleille" || monObjet.fcst_day_4.condition_key=="eclaircies"||monObjet.fcst_day_4.condition_key=="averses-de-pluie-faible"||
         monObjet.fcst_day_4.condition_key=="pluie-forte"|| monObjet.fcst_day_4.condition_key=="neige-moderee"||
         monObjet.fcst_day_4.condition_key=="brouillard"||
         monObjet.fcst_day_4.condition_key=="faibles-passages-nuageux") {
             $('#icon5').attr("src","img/"+monObjet.fcst_day_4.condition_key+".png");
         } else {
             $('#icon5').attr("src","https://prevision-meteo.ch/style/images/icon/"+monObjet.fcst_day_4.condition_key+"-big.png");
         }

} // success function
                 
}); // ajax






}



});