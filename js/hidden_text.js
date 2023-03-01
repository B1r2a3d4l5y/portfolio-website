$(document).ready(function(){
    $("#welcome").click(function () {
        $("#about").show().animate({opacity:1})
     })
     $("#welcome").click(function(){
        $("#description").show().animate({opacity:1})
     });
     $("#welcome").click(function(){
      $("#projects").show().animate({opacity:1});

     });
     //project links and projects images
     $("#welcome").click(function(){
      $(".project-links").show().animate({opacity:1});


     });
     $("#welcome").click(function(){
      $(".name").show().animate({opacity:1});
      $(".email").animate({opacity:1}).show();
      $(".comment").animate({opacity:1}).show();
      $("#submit").animate({opacity:1}).show()
     })

      



      })



   
