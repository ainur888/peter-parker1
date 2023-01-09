$(document).ready(function(){

    //    mixitUp jquery plugin

    var mixer = mixitup('.grid-protfolio-container');


    //    scrollify jquery plugin

    $(function() {
        $.scrollify({
          section : ".scroll",
          setHeights: false,
          updateHash: false,
          scrollSpeed: 900,
          
        });
      });

})

//   humburger menu

function openMenu() {
    document.getElementById('navbar').style.height = "100%";
}

function closeMenu() {
    document.getElementById('navbar').style.height = "0%";
}

$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        
        return false;
    });
});








