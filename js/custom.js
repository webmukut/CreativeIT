// As A Vanilla JavaScript Plugin
var gallery = new SimpleLightbox('.gallery a', { 
  /* options */
  // spinner:true,
  // overlay:true,
	// nav:true, 
});

// As A jQuery Plugin -->
var gallery = $('.gallery a').simpleLightbox({
  /* options */
});

// wow box
// A $( document ).ready() block.
$( document ).ready(function() {
  wow.init();
});


// Back to top button

