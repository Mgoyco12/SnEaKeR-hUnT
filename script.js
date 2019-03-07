$("button").click(function(){
 $("#direction2").show();   
$("#direction2").text("double click here");

});
$("#img2").hide();
$("#direction2").dblclick(function(){
    $("#img2").show(); });
    $("#img2").dblclick(function(){
        $("#img2").text("click here");
    });
$("#no2").dblclick(function(){
    $("body").css("background-color","red");
    $("#direction").text("hover over");
    $("#direction").css("color","white");
    });
    $("#direction").hover(function(){
        $("#img3").hide();
        });
