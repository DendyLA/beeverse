const roadmapItem = document.querySelectorAll('.roadmap__item');
const roadmapPopup = document.querySelectorAll('.roadmap__popup');


roadmapItem.forEach((i, n) => {
    i.addEventListener('click', () => {
        if(roadmapPopup[n].classList.contains('active')){
            roadmapPopup[n].classList.remove('active')
        }else{
            roadmapPopup[n].classList.add('active');
            roadmapPopup.forEach(item => {
                if(item == roadmapPopup[n]){
                    return;
                }else{
                    item.classList.remove('active')
                }
            })
        }
    })
})


//mobile menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const headerItem = document.querySelector('.header__item');

function toggleMenu() {
    burger.classList.toggle('active');
}

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggleMenu();
})

headerItem.addEventListener('click', () => {
    nav.classList.remove('active');
    toggleMenu();
})

