
$(document).ready(function){
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("showing");
    });
});
// Scrolling Effect
$(window).on("scroll",Function(){
             if($window.scrollTop()){
    $('nav').addClass('black');
}
else{
    $('nav').removeClass('black');
}
             })
