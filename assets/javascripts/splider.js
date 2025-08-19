  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#postslisting' , {
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


  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#worksplider' , {
  type: 'slide',
  start  : 5,
  perPage: 3,
  gap: '1rem',
  breakpoints: {
		992: {
			perPage: 2,
		},
    768: {
			perPage: 2,
		},
  }
} );
    splide.mount();
  } );


  document.addEventListener( 'DOMContentLoaded', function() {
  var gallerySplider = new Splide( '#gallerysplider' , {
} );
    gallerySplider.mount();
  } );

