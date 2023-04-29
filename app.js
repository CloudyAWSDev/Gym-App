$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
    });
  
    // Toggle mobile menu
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('show');
    });
  
    // Filter workouts by category
    $('.filter-btn').on('click', function() {
      var category = $(this).data('category');
      if (category == 'all') {
        $('.workout-item').show();
      } else {
        $('.workout-item').not('.' + category).hide();
        $('.workout-item').filter('.' + category).show();
      }
    });
  });
  