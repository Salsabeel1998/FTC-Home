$(document).ready(function(){
    $(".nextLine").css('background-color', '#08546C');
    $(".carousel-control-next-icon").css('color', '#08546C');
    $(".prevLine").css('background-color', '#E7E7E7');
    $(".carousel-control-prev-icon").css('color', '#E7E7E7');
})
var count = 1;
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
   count--;
   if (count <= 0) {
       $('.carousel').carousel('pause');
   }
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide =5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
             
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                
               
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');

            }
        }
    }
});
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
/*$(function () {
    $('#carousel-example').carousel({
        interval: 2000
    });
    $('#carousel-example').on('slid.bs.carousel', function (e) {
        if ($('.carousel-inner .item:last').hasClass('active')) {
            $('#myCarousel').carousel('pause');
        }
        if ($('.carousel-inner .item:first').hasClass('active')) {
            $('#myCarousel').carousel('cycle');
        }
    });
});*/
