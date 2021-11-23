$(document).ready(function(){
                  $('.venobox').venobox({
                    arrowsColor : '#B6B6B6', 
                    framewidth : '80%',                            // default: ''
                    share      : ['facebook'], // default: []
                    titleattr  : 'data-title',                       // default: 'title'
                    numeratio  : true,                               // default: false
                    infinigall : true,                               // default: false
                  }); 
                 
              });
        

        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

        new WOW().init();

       



