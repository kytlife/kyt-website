;(function ($) {
  'use strict' // Start of use strict

  // Smooth scrolling using anime.js
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        anime({
          targets: 'html, body',
          scrollTop: target.offset().top - 72,
          duration: 1000,
          easing: 'easeInOutExpo',
        })
        return false
      }
    }
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide')
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100,
  })
})(jQuery) // End of use strict

var submitted = false
$('#gform').on('submit', function (e) {
  $('#intouch').animate(
    {
      opacity: 'toggle',
      fontSize: 'toggle',
    },
    500
  )
  $('#gform *').animate(
    {
      opacity: '0',
      height: '0px',
      width: '0px',
    },
    500
  )
})
