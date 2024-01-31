
//버튼의 요소 노드 취득
const menuBtn = document.querySelector('header .menu-open');
const closeBtn = document.querySelector('.gnb .close');

const gnb = document.querySelector('.gnb');

//클릭 이벤트 생성
menuBtn.addEventListener('click', () => {
    gnb.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    gnb.classList.remove('open');
});

var bannerList = ["./imgsss/visual1.jpg", "./imgsss/visual2.jpg", "./imgsss/visual3.jpg", "./imgsss/visual4.jpg", "./imgsss/visual5.jpg", "./imgsss/visual6.jpg"];
var currentImageIndex = 0;
setInterval(function() {
    $("#bannerImage").attr("src", bannerList[currentImageIndex]);
    currentImageIndex++;

    if(currentImageIndex == bannerList.length) {
        currentImageIndex = 0;
    }
}, 2000); 
