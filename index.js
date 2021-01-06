 
            'use strict';

<<<<<<< HEAD
            //Below js is for responsive sidebar navigation menu of header navigation======
=======
            //Below js is for responsive sidebar navigation menu of header navigation
>>>>>>> 0b56f3fe00175135e906530cc01bdf8ebe465ae2
           function openNav(){
                  document.getElementById('mySidenav').style.width="200px";
           }

            function closeNav(){
<<<<<<< HEAD
                  document.getElementById('mySidenav').style.width="0px";
=======
                  document.getElementById('mySidenav').style.width="0";
>>>>>>> 0b56f3fe00175135e906530cc01bdf8ebe465ae2
           }
            
            //Below js is for changing actived or clicked nav menu color to red 
               $(document).on('click', 'ul li', function(){
                 $(this).addClass('active').siblings().removeClass('active')
               });

            //Below js is for well working of go to top button
           $(document).ready(function(){
              $(window).scroll(function(){
                 if($(this).scrollTop()>100){
                     $('#topBtn').fadeIn();
                 }
                 else{
                     $('#topBtn').fadeOut(); 
                 }
              });

              $("#topBtn").click(function(){
                 $('html','body').animate({scrollTop:0},300);
              });
           });
           
           // Below js is for animations start on scroll over particular div ===taken fron waypoints website
                  // ====do not forget to make opacity of div 0 initially====
          
          //======== anm in j&c section
             $(document).ready(function(){
                $('.anm1').waypoint(function (direction){
                 $('.anm1').addClass('animate__animated animate__backInLeft')
                },{offset: '600px'}  )
             });

             $(document).ready(function(){
                $('.anm2').waypoint(function (direction){
                 $('.anm2').addClass('animate__animated animate__backInRight')
                },{offset: '600px'}  )
             });

             // ================animations for services==========================
              $(document).ready(function(){
                $('.servicesAnm').waypoint(function (direction){
                 $('.servicesAnm').addClass('animate__animated animate__rollIn')
                },{offset: '400px'}  )
             });
  
