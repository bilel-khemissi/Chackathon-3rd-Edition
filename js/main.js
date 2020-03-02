// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {
  // number count for stats, using jQuery animate
// funtion + 
  $('.countingp').each(function() {
    var $this = $(this),
        countTop = $this.attr('data-count');
    
    $({ countNump: $this.text()}).animate({
      countNump: countTop
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNump));
      },
      complete: function() {
        $this.text('+' +' ' + this.countNump);
        //alert('finished');
      }
  
    })} );  
  
// function + DT

$('.countingdt').each(function() {
  var $this = $(this),
      countTop = $this.attr('data-count');
  
  $({ countNump: $this.text()}).animate({
    countNump: countTop
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNump));
    },
    complete: function() {
      $this.text('+' +' '+ this.countNump + ' ' + 'DT');
      //alert('finished');
    }

  })} );  

  //////


  $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  


});

(function () {
   'use strict';
   
   /*====================================
    Page a Link Smooth Scrolling 
    ======================================*/
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Menu Active Calling Scroll Spy
    ======================================*/
    $('body').scrollspy({ 
      target: '.navmenu',
      offset: 80,
    });


    /* ==============================================
	Testimonial Slider
	=============================================== */ 

	$(document).ready(function() {
	 
	  $("#testimonial").owlCarousel({
	 
	      navigation : false, // Show next and prev buttons
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
	      autoHeight : true
	 
	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false
	 
	  });
	 
	});
 

 


}());


// Set the date we're counting down to
var countDownDate = new Date("Apr 4, 2020 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var dayss = " Days ";
  var result1 = dayss.fontcolor("#FF3106");

  var hourss = " Hours ";
  var result2 = hourss.fontcolor("#FF3106");

  var min = " Minutes ";
  var result3 = min.fontcolor("#FF3106");

  var sec = " Seconds ";
  var result4 = sec.fontcolor("#FF3106");
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + result1 + hours + result2
  + minutes + result3 + seconds + result4;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




}
main();