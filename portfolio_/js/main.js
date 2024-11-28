const icons = ["img/icon1.ico", "img/icon2.ico", "img/icon3.ico", "img/icon4.ico"];
let currentIndex = 0;

function changeFavicon() {
  const favicon = document.getElementById("dynamic-favicon");
  favicon.href = icons[currentIndex];
  currentIndex = (currentIndex + 1) % icons.length; // 순환
}

setInterval(changeFavicon, 700); // 0.5초 간격으로 변경


AOS.init();
/* 로고시작 */
const target = document.querySelector("#dynamic");

function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

/* 로고 끝 */

/* nav 버튼 시작 */

$('.ham_btn,.x_btn').click(function () {
  $(this).parent('nav').addClass('on');

});

$('.x_btn').click(function () {
  $(this).parent('nav').removeClass('on');

});

$(".ham_btn").click(function () {
  // 버튼 교체
  $(".ham_btn").hide();
  $(".x_btn").show();
});

$(".x_btn").click(function () {
  // 버튼 교체
  $(".x_btn").hide();
  $(".ham_btn").show();
});




/* nav 버튼 끝 */


/* 메인 비쥬얼 텍스트 효과 시작*/

let typingBool = false;
let typingIdx = 0;
let liIndex = 0;
let liLength = $(".typing-txt>ul>li").length;
let del = -1;
let repeatInt = null;
let tyInt = null;


// 타이핑될 텍스트를 가져온다 
let typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

typingTxt = typingTxt.split(""); // 한글자씩 자른다. 

if (typingBool == false) {
  // 타이핑이 진행되지 않았다면 
  typingBool = true;
  tyInt = setInterval(typing, 200); // 첫번재 반복동작 
}

function typing() {
  if (typingIdx < typingTxt.length) {
    // 타이핑될 텍스트 길이만큼 반복 
    $(".typing").append(typingTxt[typingIdx]);
    // 한글자씩 이어준다. 
    typingIdx++;
    if (typingIdx == typingTxt.length) {
      //첫번째 단어가 써지면 1분쉰다.
      clearInterval(tyInt);
      setTimeout(function () {
        tyInt = setInterval(typing, 150);
      }, 1000);
    }
  } else {

    //한문장이끝나면
    if (-typingTxt.length - 1 < del) {
      //한글자씩 지운다.
      $(".typing").html(typingTxt.slice(0, del))
      del--;
    } else {
      if (liIndex >= liLength - 1) {
        liIndex = 0;
      } else {
        liIndex++;
      }

      //변수초기화 
      typingIdx = 0;
      del = -1;
      typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

      //1분후 다음분장 타이핑 
      clearInterval(tyInt);
      setTimeout(function () {
        tyInt = setInterval(typing, 150);
      }, 1000);
    }


  }
}

/* 메인 비쥬얼 텍스트 효과 끝*/


/* 텍스트 스크롤 이벤트 */

$('.txtAniBox .txtAni1').simplyScroll({
  speed: 2,
  direction: 'forwards',
  pauseOnHover: true,
  pauseOnTouch: false,
  clone: true,
});

$('.txtAniBox .txtAni2').simplyScroll({
  speed: 2,
  direction: 'backforwards',
  pauseOnHover: true,
  pauseOnTouch: false,
  clone: true,
});

$('.txtAniBox .txtAni3').simplyScroll({
  speed: 2,
  direction: 'forwards',
  pauseOnHover: true,
  pauseOnTouch: false,
  clone: true,
});

/* 텍스트 스크롤 이벤트 끝 */


$('section.con5_skill .container article').hover(function () {
  $(this).stop().addClass('on');
}, function () {
  $(this).stop().removeClass('on');
})

