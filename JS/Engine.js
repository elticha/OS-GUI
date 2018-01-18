$(document).ready(function(){
    $("#Desktop").hide();
    //$("#Desktop").show();
    //Mostramos únicamente el div de lockscreen
    
    $("#login").click(function(e){
        $("#LockScreen").fadeOut(1000,function(){
            $("#LockScreen").hide();
            
            //Mostrar el escritorio
            $("#Desktop").fadeIn(1000,function(){
                $("#Desktop").show();
            }).fadeIn(1000);
            
        }).fadeOut(1000);
    });
});