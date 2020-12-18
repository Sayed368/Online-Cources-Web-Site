$(document).ready(function() {
    var winH=$(window).height();
    var navH=$(".navbar").innerHeight();
    // $(".slider , .carousel-item").height(winH - navH);
    $(".slider , .carousel-item").height(winH );

    $('.dropdown').hover(function(){ 
        $('.dropdown-toggle', this).trigger('click'); 
    });


///////////////////////////////////////////////////////////////

    // $(document).scroll(function() { 
    // if($(window).scrollTop() > -5) {
    //     $(".navbar").css({
    //         "background-color": "rgba(0,0,0,0.0)"
    //         // "opacity":1
    //     });
    // }
    // else
    // {
    //     $(".navbar").css({
    //         "background-color": "#fff"
    //     });

    // }
    // });

////////////////////////////////////////////////////

    var nav=document.getElementsByClassName("navbar");
    window.onscroll=function(){
        if(window.pageYOffset>100){
            $(".navbar").css({
                "background-color": "#fff"
            });
            $(".navbar-nav .nav-link").css({
                'color':'#171f32'
                
            });
            $(".navbar-brand img").attr("src","imgs/dark-logo.png");
            $("form.form-inline.my-2.my-lg-0 ").hide();
            
        }
        else{
            $(".navbar").css({
                // "background-color": "rgba(0,0,0,0.0)"
                "background": "transparent"
                // "opacity":1
            });
            $(".navbar-nav .nav-link").css({
                'color':"#fff"
                
            });
            $(".navbar-brand img").attr("src","imgs/lite-logo.png")
            $("form.form-inline.my-2.my-lg-0 ").show();
        }
    }




    // $('.accordion .card .card-header button').hover(function(){
    //     $(this).css({
    //         'color':'#fff',
    //         'background-color':'#FF5421'
    //     });},function(){
    //         $('.accordion .card .card-header button').css({
    //             'color':' #171f32',
    //             'background-color':'#FFF'

    //     });

    //     });

    // $('.accordion .card .card-header button').click(function(){
    //     $(this).css({
    //         'color':'#fff',
    //         'background-color':'#FF5421'
    //     });
    //     $('.accordion .card .card-header').css({
    //         'color':'black',
    //         'background-color':'#FFF'
    //     });
    
    // });

   

})