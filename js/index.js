$(document).ready(function() {
  $('li a, a.button.blue, a.learnmore, a.readmore, a').click(function(event) {
  	event.preventDefault();
});


$(".readmore").click(function(){
        $("p").slideDown();
        $(".readmore").hide();
        $(".readless").show();
});


$(".readless").click(function(){
        $(".hide").slideUp();
        $(".readmore").show();
        $(".readless").hide();
});


$(".learnmore").click(function(){
        $(".hide#learnmoretext").slideDown();
        $(".learnmore").hide();
});

});



/*


$("show-this-on-click").click(function(){
 $("p").slideUp();
   });

});

/*
// Hide the extra content initially, using JS so that if JS is disabled, no problemo:
$('.readmore').addClass('hide')
$('.readmore, .readless hide').removeClass('hide')


// Set up the toggle effect:
$('.readmore').on('click', function(e) {
  $(this).next('.readmore').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

// Changes contributed by @diego-rzg
$('.readmore').on('click', function(e) {
  var p = $(this).parent('.readmore');
  p.addClass('hide');
  p.prev('.readmore').removeClass('hide'); // Hide only the preceding "Read More"
  e.preventDefault();


 //$("#show").click(function(){
       


 //$("#show").click(function(){
       




//    $(".readless").click(function(){
  //      $("p").slideDown();
    // });

});


// This will prevent the default action of the anchor
    

    // Failing the above, you could use this, however the above is recommended
    // return false;

/*
$('.readmore, .readless').addEventListener('click', function(event);

$('.blue').addEventListener('click', function(event){
    event.preventDefault()

a, h3, a.learnmore, a.readmore, a.button.blue, h4.logo, img


************************************************************************************
$('h2 a').on('click', function(){
  $(this).next('p').slideToggle();
  $(this).toggleClass('is-active');
************************************************************************************


$(document).ready(function() {
	$('#js-stop-button').on('click', illuminateRed);
	$('#js-slow-button').on('click', illuminateOrange);
	$('#js-go-button').on('click', illuminateGreen);

	function illuminateRed() {
		clearLights();
		$('#js-stop-light').css('background-color', 'red');
	}

	function illuminateOrange() {
		clearLights();
		$('#js-slow-light').css('background-color', 'orange');
	}

	function illuminateGreen() {
		clearLights();
		$('#js-go-light').css('background-color', 'green');
	}

	function clearLights() {
		$('#js-stop-light').css('background-color', 'black');
		$('#js-slow-light').css('background-color', 'black');
		$('#js-go-light').css('background-color', 'black');
	}
});

$(".readmore").addEventListener("click", function(event){
    event.preventDefault()

If a user clicks "Read More" on the primary column:

have the text in the <p> tag slide down along with a "Read Less" link in the blog post using $.slideDown() and $.show()
hide the "Read More" link using $.hide()
*/


                  
      