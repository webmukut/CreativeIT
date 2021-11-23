$(function() {
  $('body').jpreLoader({

    // default CSS classes for the preloader
    preMainSection:     '#main-preloader',
    prePerText:         '.preloader-percentage-text',
    preBar:             '.preloader-bar',
  
    // show percentage value
    showPercentage:     true,
  
    // enable debug mode
    debugMode:          false,
  
    // function
    splashFunction:     function() {}
    
  })


});