//For scrolling the page
//Extends jquery
//not sure how well it will work on mobile,
//but this is how I was planning on moving to
//to the next part of the screen.
$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 300);

        updateProgress();
    });
}



$(document).ready(function() {
  //Fit the front page logo to the screen width
  $("#main-logo").fitText(0.8);

  //Hide the input/map
  $("#schedule-input").slideUp(0);
  $("#location-input").slideUp(0);
  $("#map-options").slideUp(0);

  //show/hide on button presses
  $("#schedule-start").click(function () {
    $("#schedule-input").slideToggle(1000);
  });

  $("#location-start").click(function () {
    $("#location-input").slideToggle(1000);
  });

  $(".continue-location").click(function () {
    $("#map-options").slideToggle(1000);
  });
});