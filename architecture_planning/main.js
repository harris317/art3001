$(document).ready( function() {    
    
    $(".img-container").hover(function() {
        $(this).children(".img-title").fadeIn();
        $(this).children(".img-title").css({"background-color": $(this).attr("color-id")})
    }, function() {
        $(this).children(".img-title").fadeOut();
    })
})
