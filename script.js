
// back-to-top button  & sideBar fixed
const backToTopBtn = document.querySelector('#back-to-top')
const docElem = document.documentElement
let offset
let srollPos
let docHeight

docHeight = docElem.offsetHeight;
if(docHeight != 'undefined') {
    offset = docHeight / 4;
}

let sideBar = document.querySelector('.side-bar')
scrollPos = docElem.scrollTop;
window.addEventListener('scroll', () => {
    scrollPos = docElem.scrollTop;
    backToTopBtn.className = (scrollPos > offset) ? 'visible' : '';
    // console.log(scrollPos)
    sideBar.style.top = `${scrollPos}px`     // sideBar fixed (한줄 추가)    
});

backToTopBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    scrollTop();
});

function scrollTop() {
    const scrollInterval = setInterval(() => {
        if(scrollPos != 0) {
            window.scrollBy(0, -55);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

// 메뉴 버튼의 링크 작동 차단
const linkPrevent = document.querySelectorAll('.menu-item>a')
for(menu of linkPrevent){
    menu.addEventListener('click', (e) => {
        e.preventDefault();
    })
};

// --------Layer-pop-close------------
if(location.pathname == '/index.html') {
    const closeBtn = document.querySelector('#layer-pop-close')
    const layerPop = document.querySelector('#layer-pop')
        closeBtn.addEventListener('click' ,function() {
            if(!layerPop.classList.contains('disabled')){
                layerPop.classList.add('disabled');
            } 
    })
} else {
    
}