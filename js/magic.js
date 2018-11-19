setTimeout(function(){ 
    if (window.innerWidth < 800){
        $('body').css("margin-left","0");
        $('.drawer').addClass('hidden-drawer');
        $('.drawer-button').addClass('hidden-button');
    }
}, 1000);

$('.container').before("<ul></ul>")

$('.introduction').attr('id', 'introduction');
$(".drawer ul").append('<li><a href="#introduction">Introducción</a></li>');


$('h3').each(function (index){
    $(this).attr('id', 'menu_' + index);
    $(".drawer ul").append('<li><a href="#menu_' + index + '">' + $(this).html() + '</a></li>');

});



// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/* Drawer Menu */
$('.drawer-button').click(function() {
    if (!$('.drawer').hasClass('hidden-drawer')){
        $('.drawer').addClass('hidden-drawer');
        $('.drawer-button').addClass('hidden-button');
        $('body').css("margin-left","0");
    } else{
        $('.drawer').removeClass('hidden-drawer');
        $('.drawer-button').removeClass('hidden-button');
        $('body').css("margin-left","250px");
    }
});

/* Smooth link scrolling */

$('a[href^="#"]').click(function(e) {    
    var id = $(this).attr('href');  
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    console.log($id.offset().top);

    var pos = $id.offset().top + 2;
    console.log(pos);
    $('body,html').animate({
        scrollTop: pos
    }, 1000);
});

