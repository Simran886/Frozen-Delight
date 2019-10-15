$(document).ready(function(){
    $(".my-4").ripples({
        dropRadius: 25,
        perturbance: 0.6,       
      });
      //magnefic popup
      $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
      });
});

