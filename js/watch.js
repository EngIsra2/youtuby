$(document).ready (function() {
    $("#myBnt").on ("click", function() {
        read();
    });
    $(".reply").click (function() {
        $(this).parents("div.row").next("div.card").toggle();
    });
});

function read() {
    var dots =document.getElementById("dots");
    var moreText= document.getElementById("more");
    var bntText= document.getElementById("myBnt");

    if (dots.style.display==="none"){
        dots.style.display ="inline";
        bntText.innerHTML="عرض المزيد";
        moreText.style.display="none";
    }else{
        dots.style.display="none";
        bntText.innerHTML="عرض عناصر أقل";
        moreText.style.display="inline";
    }
}