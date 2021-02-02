/*  ----- 팝업  ----- */

$(".popup strong").click(function(){
    $(".popup").hide();
});

/*  ----- 인트로1 클릭버튼 등장, 이벤트  ----- */

$("#click").delay(5700).fadeIn();

$("#click").click(function(){
  $("#click").animate({
      width : "3300",
      height : "3300"
  }, 800);
    $(".in_text2").fadeIn();
    $(".intro1_right").delay(1000).fadeIn(function(){
        $(".number1").addClass("show");
        setTimeout(function(){
            $(".number1 img").css({
                display : "none"
            });
        },4550);
    });
});

/*  ----- 스크롤 효과 ----- */

$(window).scroll(function(){
     
    // 스크롤 현재 위치 값   
    var height = $(window).scrollTop();
        scroll(height);

    // Protfilo영역 트랜스폼 효과를 위해 클래스 부여    
        var intro2 = $(".intro2").offset().top-600;
        var pctop = $(".pc").offset().top-200;
        var respontop = $(".responsive").offset().top-200;
        var topnav = $(".Profile").offset().top;
        var i = $(window).scrollTop();
    if(i >= intro2){
        $("#click").css({
            position : "absolute"
        });
    }else{
        $("#click").css({
            position : "fixed"
        });
    }
    if(i >= pctop){
        $(".pc").addClass("on");
     } else{
        $(".pc").removeClass("on"); 
     }
    if(i >= respontop){
        $(".responsive").addClass("on");
     } else{
        $(".responsive").removeClass("on");
     }
        // TOPNAV를 Profile영역부터 고정
        // TOP버튼 보이기,숨기기
    if(i >= topnav){
        $(".top_nav").css({
            position: "fixed"
        });
        $(".top_nav").show().animate({
            height : "80",
            delay : "1000"
        });
        $("#TOP").show();
     }else{
        $(".top_nav").css({
            position: "absolute"
        });
         $("#TOP").hide();
     } // TOPNAV를 Profile영역부터 고정
});	  

/*  ----- TOP버튼 페이지 맨위로  ----- */

$("#TOP").click(function(){
    $("html,body").animate({
        scrollTop : 0
    }, 700);
});

/*  -----스크롤 위치 텍스트 값 ----- */

function scroll(str){
    $('#scroll').text(str);
}

/* ----- 인트로1 타이핑효과 ----- */

var typingBool = false; 
var typingIdx = 0; 
var dtIndex = 0;
var dtLength = $(".in_text .text p").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".in_text .text p").eq(dtIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  $(".in_text .typing p").removeClass("on");
   $(".in_text .typing p").eq(dtIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".in_text .typing p").eq(dtIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(dtIndex<dtLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       dtIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".in_text .text p").eq(dtIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(dtIndex==dtLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
        }
    } 
}  

/*  ----- 인트로2 버튼 해당페이지 이동 ----- */

$(".intro_btnlist li").click(function(){
    var i = $(this).index();
    var target = $(".content").eq(i);
    var targettop = target.offset().top;
    
    $("html, body").animate({
        scrollTop : targettop
    },600);
});

/*  ----- TOPNAV 버튼 해당페이지 이동 ----- */

$(".top_btnlist li").click(function(){
    var i = $(this).index();
    var target = $(".content").eq(i);
    var targettop = target.offset().top;
    
    $("html, body").animate({
        scrollTop : targettop
    },600);
});

/*  ----- animation영역 슬라이드 효과 ----- */

    var animation = new Swiper('.animation_in', {
       pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        }
    });

/*  ----- image sequence 효과 ----- */

var imgNum = 1;
var img = new Image();
var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');

playSequence();

img.src = "../img/crow0.png";

function playSequence() {
    var timer = setInterval(function() {
        //console.log("Time Interval"); 
        
        if (imgNum > 86) {
            imgNum = 0;
        }
        
        player(imgNum);
        imgNum++;
    }, 30);
}

function player(num) {
   console.log("image num: " + num);
    
    img.src = "./img/crow" + num + ".png";
}

img.addEventListener('load', function(e) {
    console.log("img load");
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
});

/*  ----- mouse X좌표에 따라 이미지 효과 ----- */ 

$(window).mousemove(function(e){
    var slide = document.getElementById("moon");
    var x = e.clientX;
    slide.style.left = x+"px"; 
});


/*  ----- 마우스 휠 효과 ----- */ 

window.onload = function () {
    var elm = ".section";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
}
/*  ----- 마우스 휠 끝 ----- */
