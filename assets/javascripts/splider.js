  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' , {
  type: 'slide',
  perPage: 3,
  breakpoints: {
		640: {
			perPage: 1.5,
		},
  }
} );
    splide.mount();
  } );