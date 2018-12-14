/*****************************************
    CONTROLADOR WEB FORMACIÓN ONECLICK
    Noviembre 2018
******************************************/

/* 
 *  Creación de Drawer Menu
 */

$('.container').before("<ul></ul>")

// enlaza la introducción
$('.introduction').attr('id', 'introduction');
$(".drawer ul").append('<li><a href="#introduction">' + $('.introduction h2').text() + '</a></li>');

// toma los h3 como elementos del menú y los enlaza
$('h3').each(function (index){
    $(this).attr('id', 'menu_' + index);
    $(".drawer ul").append('<li><a href="#menu_' + index + '">' + $(this).text() + '</a></li>');

});


/* 
 *  Control botón Drawer Menu
 */

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

/* 
 *  Muestra el Drawer Menu y lo oculta en pantalla estrecha
 */

 setTimeout(function(){ 
    if (window.innerWidth < 800){
        $('body').css("margin-left","0");
        $('.drawer').addClass('hidden-drawer');
        $('.drawer-button').addClass('hidden-button');
    }
}, 1000);



/* 
 *  Smooth link scrolling 
 */

$('a[href^="#"]').click(function(e) {    
    var id = $(this).attr('href');  
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    console.log($id.offset().top);

    var pos = $id.offset().top - 20;
    console.log(pos);
    $('body,html').animate({
        scrollTop: pos
    }, 1000);
});



/* 
 *  Scroll to Top & Back to Index
 */

 $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);        
        $('#return-to-index').fadeOut(150);    

    } else {
        $('#return-to-top').fadeOut(200);  
        $('#return-to-index').fadeIn(150);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0   // Scroll to top of body
    }, 500);
});

