// Menu Fixo 

var w = $(window);

w.on("scroll", function() {
    if (w.scrollTop() != 0) {
        sTelaInicial();
    } else {
        eTelaInicial();
    }
});

function sTelaInicial() {
    $("#menuFixo").css({ "background-color": "snow", "box-shadow": "0px 2px 2px rgba(0, 0, 0, 0.2), 0px 4px 16px rgba(0, 0, 0, 0.2)" });
    $("#menuFixo a.logoMenuFixo").css({ "margin-top": "0px" });
    $("#menuFixo nav a").css({ "color": "#626870" });
}

function eTelaInicial() {
    $("#menuFixo").css({ "background-color": "transparent", "box-shadow": "none" });
    $("#menuFixo a.logoMenuFixo").css({ "margin-top": "-150px" });
    $("#menuFixo nav a").css({ "color": "snow" });
}

$(document).ready(function() {
    
    $(".gtInicio").click(function() {
        $('html, body').animate({
            scrollTop: $("#telaInicial").offset().top
        }, 750);
    });

    $(".gtProjeto").click(function() {
        $('html, body').animate({
            scrollTop: $("#telaProjeto").offset().top
        }, 750);
    });

    $(".gtSobre").click(function() {
        $('html, body').animate({
            scrollTop: $("#telaSobre").offset().top
        }, 750);
    });

    $(".gtEquipe").click(function() {
        $('html, body').animate({
            scrollTop: $("#telaEquipe").offset().top
        }, 750);
    });

    $(".gtContato").click(function() {
        $('html, body').animate({
            scrollTop: $("#telaContato").offset().top
        }, 750);
    });

    // Parallax

    $("main#telaInicial").each(function(){
    var obj = $(this);

        $(window).scroll(function() {

            var yPos = -($(window).scrollTop() / 5); 

            var bgpos = "50% "+ yPos + "px";

            obj.css('background-position', bgpos );

        }); 

    });

    // Modal fotos

    $("#modals").click(function() {
        $("#modals").fadeOut(200);
        $(".modal1").hide();
        $(".modal2").hide();
        $(".modal3").hide();
    });

    $(".openModal1").click(function() {
        $("#modals").fadeIn(200);
        $(".modal1").show();
    });

    $(".openModal2").click(function() {
        $("#modals").fadeIn(200);
        $(".modal2").show();
    });

    $(".openModal3").click(function() {
        $("#modals").fadeIn(200);
        $(".modal3").show();
    });

});