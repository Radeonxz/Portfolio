$(document).ready(function(){
    var flag=1;

    $(".l_btn").click(function(){
        if(flag==1){
            $(".l_btn").text("CLOSE");
            $(".l_laptop").css({transform:"translate(-50%,-50%) scale(1.5)",opacity:"0"});
            $(".l_box").css({height:"100vh",width:"100%"});
            $(".l_blackbox").css({left:"0%"});
            $(".l_imagebox").css({left:"100%"});
            $(".l_img").animate({left:"0%",opacity:"1"},500);
            $(".l_msg").animate({right:"10%",opacity:"1"},1000);

            $(".r_laptop").css({opacity:"0"});
            $(".r_imagebox").css({opacity:"0"});
            $(".r_box").css({opacity:"0"});
            $(".r_btn").css({opacity:"0"});

            $(".m_laptop").css({opacity:"0"});
            $(".m_imagebox").css({opacity:"0"});
            $(".m_box").css({opacity:"0"});
            $(".m_btn").css({opacity:"0"});

            $(".nav").css({opacity:"0"});
            flag=0;
        }
        else{
            $(".l_btn").text("EXPLORE MORE");
            $(".l_laptop").css({transform:"translate(-50%,-50%) scale(1)",opacity:"1"});
            $(".l_box").css({height:"21.5%",width:"16.5%"});
            $(".l_blackbox").css({left:"0%"});
            setTimeout(l_imgbox,200);         // i want image box after some dealy
            function l_imgbox(){
                $(".l_imagebox").css({left:"0%"});
            }
            $(".l_img").animate({left:"-30%",opacity:"0"},500);
            $(".l_msg").animate({right:"-15%",opacity:"0"},200);

            $(".r_laptop").css({opacity:"1"});
            $(".r_imagebox").css({opacity:"1"});
            $(".r_box").css({opacity:"1"});
            $(".r_btn").css({opacity:"1"});

            $(".m_laptop").css({opacity:"1"});
            $(".m_imagebox").css({opacity:"1"});
            $(".m_box").css({opacity:"1"});
            $(".m_btn").css({opacity:"1"});

            $(".nav").css({opacity:"1"});
            flag=1;
        }
    });

    $(".m_btn").click(function(){
        if(flag==1){
            $(".m_btn").text("CLOSE");
            $(".m_laptop").css({transform:"translate(-50%,-50%) scale(1.5)",opacity:"0"});
            $(".m_box").css({height:"100vh",width:"100%"});
            $(".m_blackbox").css({left:"0%"});
            $(".m_imagebox").css({top:"100%"});
            $(".m_img").animate({top:"0%",opacity:"1"},500);
            $(".m_msg").animate({top:"75%",opacity:"1"},1000);

            $(".r_laptop").css({opacity:"0"});
            $(".r_imagebox").css({opacity:"0"});
            $(".r_box").css({opacity:"0"});
            $(".r_btn").css({opacity:"0"});

            $(".l_laptop").css({opacity:"0"});
            $(".l_imagebox").css({opacity:"0"});
            $(".l_box").css({opacity:"0"});
            $(".l_btn").css({opacity:"0"});

            $(".nav").css({opacity:"0"});
            flag=0;


        }
        else{
            $(".m_btn").text("EXPLORE MORE");
            $(".m_laptop").css({transform:"translate(-50%,-50%) scale(1)",opacity:"1"});
            $(".m_box").css({height:"21.5%",width:"16.5%"});
            $(".m_blackbox").css({left:"0%"});
            setTimeout(m_imgbox,200);         // i want image box after some dealy
            function m_imgbox(){
                $(".m_imagebox").css({top:"0%"});
            }
            $(".m_img").animate({top:"-10%",opacity:"0"},500);
            $(".m_msg").animate({top:"95%",opacity:"0"},200);

            $(".r_laptop").css({opacity:"1"});
            $(".r_imagebox").css({opacity:"1"});
            $(".r_box").css({opacity:"1"});
            $(".r_btn").css({opacity:"1"});

            $(".l_laptop").css({opacity:"1"});
            $(".l_imagebox").css({opacity:"1"});
            $(".l_box").css({opacity:"1"});
            $(".l_btn").css({opacity:"1"});

            $(".nav").css({opacity:"1"});
            flag=1;
        }
    });

    $(".r_btn").click(function(){
        if(flag==1){
            $(".r_btn").text("CLOSE");
            $(".r_laptop").css({transform:"translate(-50%,-50%) scale(1.5)",opacity:"0"});
            $(".r_box").css({height:"100vh",width:"100%"});
            $(".r_blackbox").css({left:"0%"});
            $(".r_imagebox").css({right:"100%"});
            $(".r_img").animate({right:"0%",opacity:"1"},500);
            $(".r_msg").animate({left:"10%",opacity:"1"},1000);

            $(".m_laptop").css({opacity:"0"});
            $(".m_imagebox").css({opacity:"0"});
            $(".m_box").css({opacity:"0"});
            $(".m_btn").css({opacity:"0"});

            $(".l_laptop").css({opacity:"0"});
            $(".l_imagebox").css({opacity:"0"});
            $(".l_box").css({opacity:"0"});
            $(".l_btn").css({opacity:"0"});

            $(".nav").css({opacity:"0"});

            flag=0;
        }
        else{
            $(".r_btn").text("EXPLORE MORE");
            $(".r_laptop").css({transform:"translate(-50%,-50%) scale(1)",opacity:"1"});
            $(".r_box").css({height:"21.5%",width:"16.5%"});
            $(".r_blackbox").css({left:"0%"});
            setTimeout(r_imgbox,200);         // i want image box after some dealy
            function r_imgbox(){
                $(".r_imagebox").css({right:"0%"});
            }
            $(".r_img").animate({right:"-30%",opacity:"0"},500);
            $(".r_msg").animate({left:"-15%",opacity:"0"},200);

            $(".m_laptop").css({opacity:"1"});
            $(".m_imagebox").css({opacity:"1"});
            $(".m_box").css({opacity:"1"});
            $(".m_btn").css({opacity:"1"});

            $(".l_laptop").css({opacity:"1"});
            $(".l_imagebox").css({opacity:"1"});
            $(".l_box").css({opacity:"1"});
            $(".l_btn").css({opacity:"1"});

            $(".nav").css({opacity:"1"});

            flag=1;
        }
    });


});
