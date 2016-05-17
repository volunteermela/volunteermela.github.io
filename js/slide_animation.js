var $animation_elements = $('.animation-element');
var $window = $(window);
var scrollpos_prev = 0;
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var scrollpos_curr = $(this).scrollTop();

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if (scrollpos_curr >= scrollpos_prev) {
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
          $element.addClass('slideUp');
        } else {
          $element.removeClass('slideUp');
        }
      }
    });
    scrollpos_prev = scrollpos_curr;
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');