  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' , {
  type: 'slide',
  perPage: 3,
  gap: '1rem',
  breakpoints: {
		992: {
			perPage: 2,
		},
    768: {
			perPage: 1,
		},
  }
} );
    splide.mount();
  } );