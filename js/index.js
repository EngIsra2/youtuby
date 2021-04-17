$(document).ready(function() {
    $(".first-list-element").addClass(".active");
$(".nav-item").click(function () {
    $(".nav-item").removeclass("active");
    $(this).addClass("active");
         });

$("#toggler").click(function(event){
    $('#wrap').toggleClass('toggled');

    var right = $('.sidebar').css("right");
    if (right == '0px')//هنا عندما تكن القائمةمفتوحة ونضغط على الزر
    {
        $('.sidebar').css({'right' : '-17rem'}); //الناتج هو غلق القائمة
        $('.layer').fadeOut();
       }

        else //وهنا عندما تكن القائمة مغلقة ونضغط على الزر 
        {
            $('.sidebar').css({'right':'0'});//الناتج هو فتح القائمة 
            $('.layer').fadeIn();
        } 

         });
         $('.layer').click(function () {
            $('.sidebar').css({'right' : '-17rem'});
            $('.layer').fadeOut();
        });
        $(".search-icon").click(function () {
            $(".search-input").slideToggle("slow");
        });  
});