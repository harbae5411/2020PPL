
// 명령에 필요한 버튼과 이미지를 변수에 저장함.
var btn = $("#btn li");
var content = $("#container>div");
var width = $(window).width();

// 슬라이드 기본셋팅
content.css({
    position:"fixed",
    top:"100%",
    left:0
});
 
var c;
// 고정버튼 클릭
btn.on({
    click : function(){
        var i = $(this).index();
        var nextImg = content.eq(i);
        var currentImg = content.eq(c);
        content.removeClass("on");
        nextImg.addClass("on").stop().animate({top:0},
        500,function(){
            content.eq(c).css({top:"100%"});
            c = i;
        });
        var w = $(window).width();
        if(w>=1220){
            $("body").css({
                overflow:"hidden"
            });
        }
        return false;
    }
});

//메인1 텍스트 동작
$(window).ready(function() {
    $(".show").removeClass("visible");
   $(".show").addClass("visible");
});

//단기렌터카 차량유형 클릭시
$(".kind li").click(function(){
   $(".kind li").removeClass("ka"); 
   $(this).addClass("ka");
});


//단기렌터카 내륙,제주 버튼
$(".main2-c-btn span").click(function(){
    $(".main2-c-btn span").removeClass("on");
    $(this).addClass("on");
});

//모바일 슬라이드
$(".mo-car-list").slick({
    arrows : false
});


//pc kind탭& 슬라이드
    $(".main2 .kind li").click(function(){
        var i = $(this).index();
        $(".main2 .car-list").removeClass("front");
        $(".main2 .car-list").eq(i).addClass("front");
        $('.main2 .car-listin').slick('setPosition');
       
    });  

    $(".main2 .car-listin").slick({
        speed : 0,
        touchMove : false
    });
    
    $(".pc-car-wrap a").click(function(){
        return false;
    });


// ---------------단기렌터카--------------------------//

//장기렌터카 텍스트 색상

$(".pc-main3").ready(function() {
   $(".pc-main3 .title .w1").addClass("point");
});

//장기렌터카 버튼, 탭, 슬라이드

    $(".pc-main3 .title li").click(function(){
        $(".pc-main3 .title li").removeClass("point");
        $(this).addClass("point");
        // title 클릭시 글자색 변경
        var i = $(this).index();
        $(".pc-main3 .pc-list").removeClass("view");
        $(".pc-main3 .pc-list").eq(i).addClass("view");
        $('.pc-main3 .info').slick('setPosition');
        // title 클릭시 보이는 리스트 변경
    });  

    $(".pc-main3 .info").slick();


// 모바일 메인3 슬라이드

$(".mo-listin").slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    arrows : false
});


// ---------------단기-달력--------------------------//

//달력 오픈

$(".main2-c-btn .d1").click(function(){
    $(".date").show();
    return false;
});

// 달력 취소버튼

$(".date .close").click(function(){
    $(".date").hide();
    return false;
});

$(".main2-c-btn .place dd a").click(function(){
    return false;
});
// ---------------달력--------------------------//


// left calendar

    document.addEventListener("DOMContentLoaded", function() {
        buildCalendar();
    });

    var today = new Date(); // @param 전역 변수, 오늘 날짜 / 내 컴퓨터 로컬을 기준으로 today에 Date 객체를 넣어줌
    var date = new Date();  // @param 전역 변수, today의 Date를 세어주는 역할

    /* @brief   이전달 버튼 클릭 */
    function prevCalendar() {
        this.today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        buildCalendar();    // @param 전월 캘린더 출력 요청
    }

    /* @brief   다음달 버튼 클릭 */
    function nextCalendar() {
        this.today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        buildCalendar();    // @param 명월 캘린더 출력 요청
    }

    /*  @brief   캘린더 오픈
        @details 날짜 값을 받아 캘린더 폼을 생성하고, 날짜값을 채워넣는다.
    */
    function buildCalendar() {
        
        var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        var tbCalendar = document.querySelector(".scriptCalendar > tbody");

        document.getElementById("calYear").innerText = today.getFullYear(); // @param YYYY월
        document.getElementById("calMonth").innerText = autoLeftPad((today.getMonth() + 1), 2);   // @param MM월

        // @details 이전 캘린더의 출력결과가 남아있다면, 이전 캘린더를 삭제한다.
        while(tbCalendar.rows.length > 0) {
            tbCalendar.deleteRow(tbCalendar.rows.length - 1);
        }

        
        // @param 첫번째 개행
        var row = tbCalendar.insertRow();
        // @param 날짜가 표기될 열의 증가값
        var dom = 1;

        // @details 시작일의 요일값( doMonth.getDay() ) + 해당월의 전체일( lastDate.getDate())을  더해준 값에서
        //               7로 나눈값을 올림( Math.ceil() )하고 다시 시작일의 요일값( doMonth.getDay() )을 빼준다.
        var daysLength = (Math.ceil((doMonth.getDay() + lastDate.getDate()) / 7) * 7) - doMonth.getDay();

        // @param 달력 출력

        // @details 시작값은 1일을 직접 지정하고 요일값( doMonth.getDay() )를 빼서 마이너스( - )로 for문을 시작한다.
        for(var day = 1 - doMonth.getDay(); daysLength >= day; day++) {

            var column = row.insertCell();

            // @param 평일( 전월일과 익월일의 데이터 제외 )
            if(Math.sign(day) == 1 && lastDate.getDate() >= day) {

                // @param 평일 날짜 데이터 삽입
                column.innerText = autoLeftPad(day, 2);

                // @param 일요일인 경우
                if(dom % 7 == 1) {
                    column.style.color = "#FF4D4D";
                }
                // @param 토요일인 경우
                if(dom % 7 == 0) {
                    column.style.color = "#4D4DFF";
                    row = tbCalendar.insertRow();   // @param 토요일이 지나면 다시 가로 행을 한줄 추가한다.
                }
            }

            // @param 평일 전월일과 익월일의 데이터 날짜변경
            else {
                var exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
                column.innerText = autoLeftPad(exceptDay.getDate(), 2);
                column.style.color = "#A9A9A9";
            }

            // @brief   전월, 명월 음영처리
            // @details 현재년과 선택 년도가 같은경우
            if(today.getFullYear() == date.getFullYear()) {

                // @details 현재월과 선택월이 같은경우
                if(today.getMonth() == date.getMonth()) {

                    // @details 현재일보다 이전인 경우이면서 현재월에 포함되는 일인경우
                    if(date.getDate() > day && Math.sign(day) == 1) {
                        column.style.backgroundColor = "#E5E5E5";
                    }

                    // @details 현재일보다 이후이면서 현재월에 포함되는 일인경우
                    else if(date.getDate() < day && lastDate.getDate() >= day) {
                        column.style.backgroundColor = "#FFFFFF";
                        column.style.cursor = "pointer";
                        column.onclick = function(){ calendarChoiceDay(this); }
                    }

                    // @details 현재일인 경우
                    else if(date.getDate() == day) {
                        column.style.backgroundColor = "#FFFFE6";
                        column.style.cursor = "pointer";
                        column.onclick = function(){ calendarChoiceDay(this); }
                    }

                // @details 현재월보다 이전인경우
                } else if(today.getMonth() < date.getMonth()) {
                    if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                        column.style.backgroundColor = "#E5E5E5";
                    }
                }

                // @details 현재월보다 이후인경우
                else {
                    if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                        column.style.backgroundColor = "#FFFFFF";
                        column.style.cursor = "pointer";
                        column.onclick = function(){ calendarChoiceDay(this); }
                    }
                }
            }

            // @details 선택한년도가 현재년도보다 작은경우
            else if(today.getFullYear() < date.getFullYear()) {
                if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                    column.style.backgroundColor = "#E5E5E5";
                }
            }

            // @details 선택한년도가 현재년도보다 큰경우
            else {
                if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                    column.style.backgroundColor = "#FFFFFF";
                    column.style.cursor = "pointer";
                    column.onclick = function(){ calendarChoiceDay(this); }
                }
            }
            dom++;
        }
    }

    /*
      @brief   날짜 선택
      @details 사용자가 선택한 날짜에 체크표시를 남긴다.
     */
    function calendarChoiceDay(column) {

        // @param 기존 선택일이 존재하는 경우 기존 선택일의 표시형식을 초기화 한다.
        if(document.getElementsByClassName("choiceDay")[0]) {
            document.getElementsByClassName("choiceDay")[0].style.backgroundColor = "#FFFFFF";
            document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");
        }

        // @param 선택일 체크 표시
        column.style.backgroundColor = "#FF9999";

        // @param 선택일 클래스명 변경
        column.classList.add("choiceDay");
        
        var m = $("#calMonth").text();
        var d = $(".choiceDay").text();
        $(".left-layer .check-date").text(m+"월 "+d+"일 "); 
    }
        
    /*
     * @brief   숫자 두자릿수( 00 ) 변경
     * @details 자릿수가 한지라인 ( 1, 2, 3등 )의 값을 10, 11, 12등과 같은 두자리수 형식으로 맞추기위해 0을 붙인다.
     * @param   num     앞에 0을 붙일 숫자 값
     * @param   digit   글자의 자릿수를 지정 ( 2자릿수인 경우 00, 3자릿수인 경우 000 … )
     */
    function autoLeftPad(num, digit) {
        if(String(num).length < digit) {
            num = new Array(digit - String(num).length + 1).join("0") + num;
        }
        return num;
    }
    
     /*
        날짜,시간 데이터 출력
    */

    $(".left-layer .l-time, .left-layer .l-timeb").change(function(){
        var t = $("select[name=l-time] option:selected").text();
        var tb = $("select[name=l-timeb] option:selected").text();
        $(".left-layer .check-time").text(t +" "+ tb);
    });




// right calendar

    document.addEventListener("DOMContentLoaded", function() {
        buildCalendar1();
    });

    var today = new Date(); // @param 전역 변수, 오늘 날짜 / 내 컴퓨터 로컬을 기준으로 today에 Date 객체를 넣어줌
    var date = new Date();  // @param 전역 변수, today의 Date를 세어주는 역할

    /* @brief   이전달 버튼 클릭 */
    function prevCalendar1() {
        this.today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        buildCalendar1();    // @param 전월 캘린더 출력 요청
    }

    /* @brief   다음달 버튼 클릭 */
    function nextCalendar1() {
        this.today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
        buildCalendar1();    // @param 명월 캘린더 출력 요청
    }

    /*  @brief   캘린더 오픈
        @details 날짜 값을 받아 캘린더 폼을 생성하고, 날짜값을 채워넣는다.
    */
    function buildCalendar1() {
        
        var doMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

        var tbCalendar = document.querySelector(".scriptCalendar1 > tbody");

        document.getElementById("calYear1").innerText = today.getFullYear(); // @param YYYY월
        document.getElementById("calMonth1").innerText = autoLeftPad((today.getMonth() + 1), 2);   // @param MM월

        // @details 이전 캘린더의 출력결과가 남아있다면, 이전 캘린더를 삭제한다.
        while(tbCalendar.rows.length > 0) {
            tbCalendar.deleteRow(tbCalendar.rows.length - 1);
        }



        // @param 첫번째 개행
        var row = tbCalendar.insertRow();
        // @param 날짜가 표기될 열의 증가값
        var dom = 1;

        // @details 시작일의 요일값( doMonth.getDay() ) + 해당월의 전체일( lastDate.getDate())을  더해준 값에서
        //               7로 나눈값을 올림( Math.ceil() )하고 다시 시작일의 요일값( doMonth.getDay() )을 빼준다.
        var daysLength = (Math.ceil((doMonth.getDay() + lastDate.getDate()) / 7) * 7) - doMonth.getDay();

        // @param 달력 출력

        // @details 시작값은 1일을 직접 지정하고 요일값( doMonth.getDay() )를 빼서 마이너스( - )로 for문을 시작한다.
        for(var day = 1 - doMonth.getDay(); daysLength >= day; day++) {

            var column = row.insertCell();

            // @param 평일( 전월일과 익월일의 데이터 제외 )
            if(Math.sign(day) == 1 && lastDate.getDate() >= day) {

                // @param 평일 날짜 데이터 삽입
                column.innerText = autoLeftPad(day, 2);

                // @param 일요일인 경우
                if(dom % 7 == 1) {
                    column.style.color = "#FF4D4D";
                }
                // @param 토요일인 경우
                if(dom % 7 == 0) {
                    column.style.color = "#4D4DFF";
                    row = tbCalendar.insertRow();   // @param 토요일이 지나면 다시 가로 행을 한줄 추가한다.
                }
            }

            // @param 평일 전월일과 익월일의 데이터 날짜변경
            else {
                var exceptDay = new Date(doMonth.getFullYear(), doMonth.getMonth(), day);
                column.innerText = autoLeftPad(exceptDay.getDate(), 2);
                column.style.color = "#A9A9A9";
            }

            // @brief   전월, 명월 음영처리
            // @details 현재년과 선택 년도가 같은경우
            if(today.getFullYear() == date.getFullYear()) {

                // @details 현재월과 선택월이 같은경우
                if(today.getMonth() == date.getMonth()) {

                    // @details 현재일보다 이전인 경우이면서 현재월에 포함되는 일인경우
                    if(date.getDate() > day && Math.sign(day) == 1) {
                        column.style.backgroundColor = "#E5E5E5";
                    }

                    // @details 현재일보다 이후이면서 현재월에 포함되는 일인경우
                    else if(date.getDate() < day && lastDate.getDate() >= day) {
                        column.style.backgroundColor = "#FFFFFF";
                        column.style.cursor = "pointer";
                        column.onclick = function(){ calendarChoiceDay1(this); }
                    }

                    // @details 현재일인 경우
                    else if(date.getDate() == day) {
                        column.style.backgroundColor = "#FFFFE6";
                        column.style.cursor = "pointer";
                        column.onclick = function(){ calendarChoiceDay1(this); }
                    }

                // @details 현재월보다 이전인경우
                } else if(today.getMonth() < date.getMonth()) {
                    if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                        column.style.backgroundColor = "#E5E5E5";
                    }
                }

                // @details 현재월보다 이후인경우
                else {
                    if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                        column.style.backgroundColor = "#FFFFFF";
                        column.style.cursor = "pointer";
                        column.onclick = function(){ calendarChoiceDay1(this); }
                    }
                }
            }

            // @details 선택한년도가 현재년도보다 작은경우
            else if(today.getFullYear() < date.getFullYear()) {
                if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                    column.style.backgroundColor = "#E5E5E5";
                }
            }

            // @details 선택한년도가 현재년도보다 큰경우
            else {
                if(Math.sign(day) == 1 && day <= lastDate.getDate()) {
                    column.style.backgroundColor = "#FFFFFF";
                    column.style.cursor = "pointer";
                    column.onclick = function(){ calendarChoiceDay1(this); }
                }
            }
            dom++;
        }
    }

    function calendarChoiceDay1(column) {

        if(document.getElementsByClassName("choiceDay1")[0]) {
            document.getElementsByClassName("choiceDay1")[0].style.backgroundColor = "#FFFFFF";
            document.getElementsByClassName("choiceDay1")[0].classList.remove("choiceDay1");
        }

        column.style.backgroundColor = "#FF9999";

        column.classList.add("choiceDay1");
            
        
        var rm = $("#calMonth1").text();
        var rd = $(".choiceDay1").text();
        $(".right-layer .check-date").text(rm+"월 "+rd+"일 ");        
        
    }

    function autoLeftPad(num, digit) {
        if(String(num).length < digit) {
            num = new Array(digit - String(num).length + 1).join("0") + num;
        }
        return num;
    }
    
    /*
        날짜,시간 데이터 출력
    */
    
    $(".right-layer .r-time, .right-layer .r-timeb").change(function(){
        var t = $("select[name=r-time] option:selected").text();
        var tb = $("select[name=r-timeb] option:selected").text();
        $(".right-layer .check-time").text(t +" "+ tb);
    });


    // 달력 확인

    $(".date .layer-check .ok a").click(function(){
        var Leftlastdate =  $(".left-layer .check-date").text();
        var Leftlasttime =  $(".left-layer .check-time").text();
        var Righlastdate =  $(".right-layer .check-date").text();
        var Rightlasttime =  $(".right-layer .check-time").text();
        $(".main2-c-btn dd .d1").text(Leftlastdate +" "+Leftlasttime);
        $(".main2-c-btn dd .d2").text(Righlastdate +" "+Rightlasttime);
        $(".date").hide();
        return false;
    });
