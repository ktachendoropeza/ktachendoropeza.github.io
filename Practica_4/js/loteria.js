$(document).ready(function($) {
    var c = 0;
    let baraja = [];
    let y = 0;
    //*Variables de puntuaciones
    var center_c1 = 0;   var center_c2 = 0;
    var four_c1 = 0;     var four_c2 = 0;
    var jet_c1_1 = 0;    var jet_c2_1 = 0;
    var jet_c1_2 = 0;    var jet_c2_2 = 0;
    var jet_c1_3 = 0;    var jet_c2_3 = 0;
    var jet_c1_4 = 0;    var jet_c2_4 = 0;
    var jet_c1_5 = 0;    var jet_c2_5 = 0;
    var jet_c1_6 = 0;    var jet_c2_6 = 0;
    var jet_c1_7 = 0;    var jet_c2_7 = 0;
    var jet_c1_8 = 0;    var jet_c2_8 = 0;
    var jet_c1_9 = 0;    var jet_c2_9 = 0;
    var jet_c1_10 = 0;   var jet_c2_10 = 0;
    var jet_c1 = new Boolean(false);
    var jet_c2 = new Boolean(false);
//*------Carta 1-------|------Carta 2--------
    $("#start").click(function(event) {
        //*Variables de puntuaciones
    center_c1 = 0;      center_c2 = 0;
    four_c1 = 0;        four_c2 = 0;
    jet_c1_1 = 0;       jet_c2_1 = 0;
    jet_c1_2 = 0;       jet_c2_2 = 0;
    jet_c1_3 = 0;       jet_c2_3 = 0;
    jet_c1_4 = 0;       jet_c2_4 = 0;
    jet_c1_5 = 0;       jet_c2_5 = 0;
    jet_c1_6 = 0;       jet_c2_6 = 0;
    jet_c1_7 = 0;       jet_c2_7 = 0;
    jet_c1_8 = 0;       jet_c2_8 = 0;
    jet_c1_9 = 0;       jet_c2_9 = 0;
    jet_c1_10 = 0;      jet_c2_10 = 0;
    jet_c1 = false;     jet_c2 = false;
//*------Carta 1-------|------Carta 2--------
        y++,
        document.title = "Juego #"+y+" - Lotería";
        $("#assign").fadeIn("slow");
        //* llenar carta 1
        let cards = [];
        for(var i = 1; i <= 16; i++){
            $("#c1_"+i).removeClass("cross");
            $("#c2_"+i).removeClass("cross");
        }
        
        for(var i = 1; i <= 16; i++){

            let b = true;

            while (b) {
                let exists = false;
                var n = Math.floor(Math.random()*54) + 1; 

                for (var j = 0; j < cards.length; j++) {
                    if (cards[j] == n) {
                        exists = true;
                    }
                    
                }
                if (!exists) {
                    $("#c1_"+i).attr("src", "img/"+n+".jpg");
                    $("#c1_"+i).attr("card", n);
                    b = false;
                    cards.push(n);
                }
            }

            cards.push(n);

            cards.forEach(function (elemento) {
                console.log(elemento);
            });

        }
        //*llenar carta 2

        let cards2 = [];

        for(var i = 1; i <= 16; i++){

            let b = true;

            while (b) {
                let exists = false;
                var n = Math.floor(Math.random()*54) + 1; 

                for (var j = 0; j < cards.length; j++) {
                    if (cards[j] == n) {
                        exists = true;
                    }
                    
                }
                if (!exists) {
                    $("#c2_"+i).attr("src", "img/"+n+".jpg");
                    $("#c2_"+i).attr("card", n);
                    b = false;
                    cards.push(n);
                }
            }

            cards.push(n);

            cards.forEach(function (elemento) {
                console.log(elemento);
            });
        }

        //*asignar baraja
        baraja = [];
        c = 0;
        for (let index = 1; index <= 54; index++) {
            baraja.push(index);
            
        }
        $("#lista").empty();
        baraja = baraja.sort(()=> Math.random() - 0.5)

        //*ocultar los indicadores de puntos
        $("#center_c1").hide();
        $("#center_c2").hide();
        $("#jet_c1").hide();
        $("#jet_c2").hide();
        $("#four_c1").hide();
        $("#four_c2").hide();
        //*ocultar winners
        $("#winner_c1").hide();
        $("#winner_c2").hide();

    });
    $("#assign").click(function(event){
        $("#lista").empty();
            if(c < 54){
                $("#lista").append(
                    "<div class='col'><img width='14%'; class='img-fluid' src='img/"+baraja[c]+".jpg'></div>"
                );
		//*tachar carta
		console.log(baraja[c]);
            for (let index = 1; index <=16 ; index++) {
                if($("#c1_"+index).attr("card") == baraja[c]){
                    $("#c1_"+index).addClass("cross");
                    }
                if($("#c2_"+index).attr("card") == baraja[c]){
                    $("#c2_"+index).addClass("cross");
                    }
                }
            //*centro
                if(center_c2 != 4){
                    if($("#c1_6").attr("card") == baraja[c]){
                        center_c1++;
                    }else if($("#c1_7").attr("card") == baraja[c]){
                        center_c1++;
                    }else if($("#c1_10").attr("card") == baraja[c]){
                        center_c1++;
                    }else if($("#c1_11").attr("card") == baraja[c]){
                        center_c1++;
                    }
                    if(center_c1 == 4){
                        $("#center_c1").fadeIn("slow");
                    }
                }
                if(center_c1 != 4){
                    if($("#c2_6").attr("card") == baraja[c]){
                        center_c2++;
                    }else if($("#c2_7").attr("card") == baraja[c]){
                        center_c2++;
                    }else if($("#c2_10").attr("card") == baraja[c]){
                        center_c2++;
                    }else if($("#c2_11").attr("card") == baraja[c]){
                        center_c2++;
                    }
                    if(center_c2 == 4){
                        $("#center_c2").fadeIn("slow");
                    }
                }
            //*chorro
            if(jet_c1 == false){
                //?top
                if($("#c1_1").attr("card") == baraja[c]){
                    jet_c1_1++;
                }else if($("#c1_2").attr("card") == baraja[c]){
                    jet_c1_1++;
                }else if($("#c1_3").attr("card") == baraja[c]){
                    jet_c1_1++;
                }else if($("#c1_4").attr("card") == baraja[c]){
                    jet_c1_1++;
                }
                if(jet_c2 == false){
                    if (jet_c1_1 == 4) {
                        jet_c1 = true;
                    }
                }
                //?mid1
                if($("#c1_5").attr("card") == baraja[c]){
                    jet_c1_2++;
                }else if($("#c1_6").attr("card") == baraja[c]){
                    jet_c1_2++;
                }else if($("#c1_7").attr("card") == baraja[c]){
                    jet_c1_2++;
                }else if($("#c1_8").attr("card") == baraja[c]){
                    jet_c1_2++;
                }
                if(jet_c2 == false){
                    if (jet_c1_2 == 4) {
                        jet_c1 = true;
                    }
                }
                //?mid2
                if($("#c1_9").attr("card") == baraja[c]){
                    jet_c1_3++;
                }else if($("#c1_10").attr("card") == baraja[c]){
                    jet_c1_3++;
                }else if($("#c1_11").attr("card") == baraja[c]){
                    jet_c1_3++;
                }else if($("#c1_12").attr("card") == baraja[c]){
                    jet_c1_3++;
                }
                if(jet_c2 == false){
                    if (jet_c1_3 == 4) {
                        jet_c1 = true;
                    }
                }
                //?bottom
                if($("#c1_13").attr("card") == baraja[c]){
                    jet_c1_4++;
                }else if($("#c1_14").attr("card") == baraja[c]){
                    jet_c1_4++;
                }else if($("#c1_15").attr("card") == baraja[c]){
                    jet_c1_4++;
                }else if($("#c1_16").attr("card") == baraja[c]){
                    jet_c1_4++;
                }
                if(jet_c2 == false){
                    if (jet_c1_4 == 4) {
                        jet_c1 = true;
                    }
                }
                //?vertical
                if($("#c1_1").attr("card") == baraja[c]){
                    jet_c1_5++;
                }else if($("#c1_5").attr("card") == baraja[c]){
                    jet_c1_5++;
                }else if($("#c1_9").attr("card") == baraja[c]){
                    jet_c1_5++;
                }else if($("#c1_13").attr("card") == baraja[c]){
                    jet_c1_5++;
                }
                if(jet_c2 == false){
                    if (jet_c1_5 == 4) {
                        jet_c1 = true;
                    }
                }
                //?vertical 2
                if($("#c1_2").attr("card") == baraja[c]){
                    jet_c1_6++;
                }else if($("#c1_6").attr("card") == baraja[c]){
                    jet_c1_6++;
                }else if($("#c1_10").attr("card") == baraja[c]){
                    jet_c1_6++;
                }else if($("#c1_14").attr("card") == baraja[c]){
                    jet_c1_6++;
                }
                if(jet_c2 == false){
                    if (jet_c1_6 == 4) {
                        jet_c1 = true;
                    }
                }
                //?vertical 3
                if($("#c1_3").attr("card") == baraja[c]){
                    jet_c1_7++;
                }else if($("#c1_7").attr("card") == baraja[c]){
                    jet_c1_7++;
                }else if($("#c1_11").attr("card") == baraja[c]){
                    jet_c1_7++;
                }else if($("#c1_15").attr("card") == baraja[c]){
                    jet_c1_7++;
                }
                if(jet_c2 == false){
                    if (jet_c1_7 == 4) {
                        jet_c1 = true;
                    }
                }
                //?vertical 4
                if($("#c1_4").attr("card") == baraja[c]){
                    jet_c1_8++;
                }else if($("#c1_8").attr("card") == baraja[c]){
                    jet_c1_8++;
                }else if($("#c1_12").attr("card") == baraja[c]){
                    jet_c1_8++;
                }else if($("#c1_16").attr("card") == baraja[c]){
                    jet_c1_8++;
                }
                if(jet_c2 == false){
                    if (jet_c1_8 == 4) {
                        jet_c1 = true;
                    }
                }
                //?transversal
                if($("#c1_4").attr("card") == baraja[c]){
                    jet_c1_9++;
                }else if($("#c1_7").attr("card") == baraja[c]){
                    jet_c1_9++;
                }else if($("#c1_10").attr("card") == baraja[c]){
                    jet_c1_9++;
                }else if($("#c1_13").attr("card") == baraja[c]){
                    jet_c1_9++;
                }
                if(jet_c2 == false){
                    if (jet_c1_9 == 4) {
                        jet_c1 = true;
                    }
                }
                //?transversal 2
                if($("#c1_1").attr("card") == baraja[c]){
                    jet_c1_10++;
                }else if($("#c1_6").attr("card") == baraja[c]){
                    jet_c1_10++;
                }else if($("#c1_11").attr("card") == baraja[c]){
                    jet_c1_10++;
                }else if($("#c1_16").attr("card") == baraja[c]){
                    jet_c1_10++;
                }
                if(jet_c2 == false){
                    if (jet_c1_10 == 4) {
                        jet_c1 = true;
                    }
                }
                if(jet_c1){
                    $("#jet_c1").fadeIn("slow");
                }
            }
            if(jet_c2 == false){
                //?top
                if($("#c2_1").attr("card") == baraja[c]){
                    jet_c2_1++;
                }else if($("#c2_2").attr("card") == baraja[c]){
                    jet_c2_1++;
                }else if($("#c2_3").attr("card") == baraja[c]){
                    jet_c2_1++;
                }else if($("#c2_4").attr("card") == baraja[c]){
                    jet_c2_1++;
                }
                if(jet_c1 == false){
                    if (jet_c2_1 == 4) {
                        jet_c2 = true;
                    }
                }
                //?mid1
                if($("#c2_5").attr("card") == baraja[c]){
                    jet_c2_2++;
                }else if($("#c2_6").attr("card") == baraja[c]){
                    jet_c2_2++;
                }else if($("#c2_7").attr("card") == baraja[c]){
                    jet_c2_2++;
                }else if($("#c2_8").attr("card") == baraja[c]){
                    jet_c2_2++;
                }
                if(jet_c1 == false){
                    if (jet_c2_2 == 4) {
                        jet_c2 = true;
                    }
                }
                //?mid2
                if($("#c2_9").attr("card") == baraja[c]){
                    jet_c2_3++;
                }else if($("#c2_10").attr("card") == baraja[c]){
                    jet_c2_3++;
                }else if($("#c2_11").attr("card") == baraja[c]){
                    jet_c2_3++;
                }else if($("#c2_12").attr("card") == baraja[c]){
                    jet_c2_3++;
                }
                if(jet_c1 == false){
                    if (jet_c2_3 == 4) {
                        jet_c2 = true;
                    }
                }
                //?bottom
                if($("#c2_13").attr("card") == baraja[c]){
                    jet_c2_4++;
                }else if($("#c2_14").attr("card") == baraja[c]){
                    jet_c2_4++;
                }else if($("#c2_15").attr("card") == baraja[c]){
                    jet_c2_4++;
                }else if($("#c2_16").attr("card") == baraja[c]){
                    jet_c2_4++;
                }
                if(jet_c1 == false){
                    if (jet_c2_4 == 4) {
                        jet_c2 = true;
                    }
                }
                //?vertical
                if($("#c2_1").attr("card") == baraja[c]){
                    jet_c2_5++;
                }else if($("#c2_5").attr("card") == baraja[c]){
                    jet_c2_5++;
                }else if($("#c2_9").attr("card") == baraja[c]){
                    jet_c2_5++;
                }else if($("#c2_13").attr("card") == baraja[c]){
                    jet_c2_5++;
                }
                if(jet_c1 == false){
                    if (jet_c2_5 == 4) {
                        jet_c2 = true;
                    }
                }
                //?vertical 2
                if($("#c2_2").attr("card") == baraja[c]){
                    jet_c2_6++;
                }else if($("#c2_6").attr("card") == baraja[c]){
                    jet_c2_6++;
                }else if($("#c2_10").attr("card") == baraja[c]){
                    jet_c2_6++;
                }else if($("#c2_14").attr("card") == baraja[c]){
                    jet_c2_6++;
                }
                if(jet_c1 == false){
                    if (jet_c2_6 == 4) {
                        jet_c2 = true;
                    }
                }
                //?vertical 3
                if($("#c2_3").attr("card") == baraja[c]){
                    jet_c2_7++;
                }else if($("#c2_7").attr("card") == baraja[c]){
                    jet_c2_7++;
                }else if($("#c2_11").attr("card") == baraja[c]){
                    jet_c2_7++;
                }else if($("#c2_15").attr("card") == baraja[c]){
                    jet_c2_7++;
                }
                if(jet_c1 == false){
                    if (jet_c2_7 == 4) {
                        jet_c2 = true;
                    }
                }
                //?vertical 4
                if($("#c2_4").attr("card") == baraja[c]){
                    jet_c2_8++;
                }else if($("#c2_8").attr("card") == baraja[c]){
                    jet_c2_8++;
                }else if($("#c2_12").attr("card") == baraja[c]){
                    jet_c2_8++;
                }else if($("#c2_16").attr("card") == baraja[c]){
                    jet_c2_8++;
                }
                if(jet_c1 == false){
                    if (jet_c2_8 == 4) {
                        jet_c2 = true;
                    }
                }
                //?transversal
                if($("#c2_4").attr("card") == baraja[c]){
                    jet_c2_9++;
                }else if($("#c2_7").attr("card") == baraja[c]){
                    jet_c2_9++;
                }else if($("#c2_10").attr("card") == baraja[c]){
                    jet_c2_9++;
                }else if($("#c2_13").attr("card") == baraja[c]){
                    jet_c2_9++;
                }
                if(jet_c1 == false){
                    if (jet_c2_9 == 4) {
                        jet_c2 = true;
                    }
                }
                //?transversal 2
                if($("#c2_1").attr("card") == baraja[c]){
                    jet_c2_10++;
                }else if($("#c2_6").attr("card") == baraja[c]){
                    jet_c2_10++;
                }else if($("#c2_11").attr("card") == baraja[c]){
                    jet_c2_10++;
                }else if($("#c2_16").attr("card") == baraja[c]){
                    jet_c2_10++;
                }
                if(jet_c1 == false){
                    if (jet_c2_10 == 4) {
                        jet_c2 = true;
                    }
                }
                if(jet_c2){
                    $("#jet_c2").fadeIn("slow");
                }
            }
            //*cuatro esquinas
            if(four_c2 != 4){
                if($("#c1_1").attr("card") == baraja[c]){
                    four_c1++;
                }else if($("#c1_4").attr("card") == baraja[c]){
                    four_c1++;
                }else if($("#c1_13").attr("card") == baraja[c]){
                    four_c1++;
                }else if($("#c1_16").attr("card") == baraja[c]){
                    four_c1++;
                }
                if(four_c1 == 4){
                    $("#four_c1").fadeIn("slow");
                }
            }
            if(four_c1 != 4){
                if($("#c2_1").attr("card") == baraja[c]){
                    four_c2++;
                }else if($("#c2_4").attr("card") == baraja[c]){
                    four_c2++;
                }else if($("#c2_13").attr("card") == baraja[c]){
                    four_c2++;
                }else if($("#c2_16").attr("card") == baraja[c]){
                    four_c2++;
                }
                if(four_c2 == 4){
                    $("#four_c2").fadeIn("slow");
                }
            }
        }
        c++;
        //console.log(c);
        //*selector
        var cont_1 = 0;
        var cont_2 = 0;
        if(c>16){
            for(let index = 1; index <= 16; index++){
                if ($("#c1_"+index).hasClass("cross")) {
                    cont_1++;
                }
                if ($("#c2_"+index).hasClass("cross")) {
                    cont_2++;
                }
            }
        //*winners
            if(cont_2 != 16){
                if(cont_1 == 16){
                    $("#winner_c1").fadeIn("slow");
                    $("#assign").hide();
                }
            }
            if(cont_1 != 16){
                if(cont_2 == 16){
                    $("#winner_c2").fadeIn("slow");
                    $("#assign").hide();
                }
            }
        }
    });
});