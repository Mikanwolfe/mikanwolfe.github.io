// Initialise for Magnific Popup
//  Based on Moon https://github.com/TaylanTatli/Moon
$(document).ready(function() {
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

	$('.image-popup').magnificPopup({

    type: 'image',
    tLoading: 'Loading image #%curr%...',

    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    
    image: { 
        tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        titleSrc: 'title'
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    mainClass: 'mfp-fade',
  });
});
