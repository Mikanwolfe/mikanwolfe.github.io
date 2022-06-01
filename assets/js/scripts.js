// Initialise for Magnific Popup
//  Based on Moon https://github.com/TaylanTatli/Moon
$(document).ready(function() {
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

	$('.image-popup').magnificPopup({

    type: 'image',
    tLoading: 'Loading image #%curr%...',

    gallery: {
      enabled: true,
      preload: [1,2],
      navigateByImgClick: false,
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
    },
    
    image: { 
        tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        titleSrc: 'title'
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    mainClass: 'mfp-fade',
  });
});
