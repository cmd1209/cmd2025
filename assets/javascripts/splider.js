  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' , {
  type: 'slide',
  perPage: 3,
  gap: '1rem',
  breakpoints: {
		640: {
			perPage: 1,
		},
  }
} );
    splide.mount();
  } );