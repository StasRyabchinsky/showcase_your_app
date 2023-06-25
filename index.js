{//header scroll
    window.onscroll = function(){stickyHeaderNav()};
    const headerNav = document.querySelector('.header__nav');
    const menuBtn = document.querySelector('.header__burger');
    
    const header = document.getElementById('Header');
    const stickyhead = header.offsetTop;
    
    
    function stickyHeaderNav(){
        if(window.pageYOffset >= stickyhead) {
            headerNav.classList.add("navSticky","navBackgroundHeader" );
            menuBtn.classList.add('scroll')
        } else {
            headerNav.classList.remove("navSticky" ,"navBackgroundHeader" );
            menuBtn.classList.remove('scroll')
        }
    }
}
{//header burger
let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.nav__links');
let menuLink = document.querySelector('.nav__link')
let bodyNotScroll = document.getElementById('body')

const menuToggle = () =>{
    menu.classList.toggle('active');
}
const menuBtnToggle =() =>{
    menuBtn.classList.toggle('active');
}
const bodyNotScrollToggle =() =>{
    bodyNotScroll.classList.toggle('active');
}
menuBtn.addEventListener('click', e => {
    e.stopPropagation();
    menuBtnToggle();
    menuToggle();
    bodyNotScrollToggle();
})
document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_menuBtn = target == menuBtn;
    let menu_is_active = menu.classList.contains('active');
    
    if(its_menu,its_menuBtn,menu_is_active){
        bodyNotScrollToggle()
        menuToggle();
        menuBtnToggle();
    }
  })
}
{//scroll1
    const sliderBlock = document.querySelectorAll('.smplBtfl__main__container');
    const sliderLine = document.querySelector('.smplBtfl__main__line');
    const sliderDots = document.querySelectorAll('.smplBtfl__scroll__dot');

    let sliderCount = 0;
    let sliderWidth;


  window.addEventListener('resize',showSlide);

  function showSlide(){
    sliderWidth = document.querySelector('.smplBtfl__main').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderBlock.length + 'px';
    sliderBlock.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider()
  }
  showSlide();

    function rollSlider(){
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
    }

    function thisSlide(index){
        sliderDots.forEach(item => item.classList.remove('dot__active'));
        sliderDots[index].classList.add('dot__active');
    }
    sliderDots.forEach((dot, index) =>{
        dot.addEventListener('click' , () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        })
    })
}
{//scroll2
    const sliderBlock = document.querySelectorAll('.review__main__card');
    const sliderLine = document.querySelector('.review__main__line');
    const sliderDots = document.querySelectorAll('.review__scroll__dot');

    let sliderCount = 0;
    let sliderWidth;


  window.addEventListener('resize',showSlide);

  function showSlide(){
    sliderWidth = document.querySelector('.review__main__slide').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderBlock.length + 'px';
    sliderBlock.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider()
  }
  showSlide();

    function rollSlider(){
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
    }

    function thisSlide(index){
        sliderDots.forEach(item => item.classList.remove('active__dot'));
        sliderDots[index].classList.add('active__dot');
    }
    sliderDots.forEach((dot, index) =>{
        dot.addEventListener('click' , () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        })
    })
}
{//formSubscribe

    document.addEventListener('DOMContentLoaded', function(){
        const formSubscribe = document.getElementById('formSubscribe');
        formSubscribe.addEventListener('submit', formSendSubscribe);
        // const spinner = document.querySelector('.spinner')

        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        const userEmail = document.getElementById('userEmailSubscribe')

        async function formSendSubscribe(e){
            e.preventDefault();
            formSubscribe.classList.add('spinner');
            if(isEmailValid(userEmail.value)){

                emailjs.sendForm('service_treeny', 'contact_form19', this)
                    .then(function(){
                        formSubscribe.classList.remove('spinner');

                        console.log('SUCCESS');
                    }, function(error){
                        console.log('ERROR');}
                    )
            }else{
                alert('Введите корректный адрес почты')
            }
        }
        function isEmailValid(value) {
            return EMAIL_REGEXP.test(value);
        }
    })
}
{//accordion
    let details = document.querySelectorAll("details");
    for(i=0;i<details.length;i++) {
    details[i].addEventListener("toggle", accordion);
    }
    function accordion(event) {
    if (!event.target.open) return;
        let details = event.target.parentNode.children;
        for(i = 0; i < details.length; i++) {
        if (event.target == details[i]) {
            continue;
        }
        details[i].removeAttribute("open");
        }
    }
}
{//formFooter

    document.addEventListener('DOMContentLoaded', function(){
        const formFooter = document.getElementById('formFooter');
        formFooter.addEventListener('submit', formSendFooter);

        const userNameFooter = document.getElementById('userName');
        const userEmailFooter = document.getElementById('userEmail');
        const userSubjectFooter = document.getElementById('userSubject');
        const userMessageFooter = document.getElementById('userMessage');

        const NAME_REGEXP = /^[A-Z][a-z]+$/;
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        const SUBJECT_REGEXP = /^[A-Z][a-z]+$/;
        const MESSAGE_REGEXP = /[^\s]/;

        async function formSendFooter(e){
            e.preventDefault();
            if((isNameValid(userNameFooter.value))&&(isEmailValid(userEmailFooter.value))&&(isSubjectValid(userSubjectFooter.value))&&(isMessageValid(userMessageFooter.value))){
                formFooter.classList.add('spinner');

                emailjs.sendForm('service_treeny', 'contact_form19', this)
                    .then(function(){
                        formFooter.classList.remove('spinner');
                        console.log('SUCCESS__footer');
                    }, function(error){
                        console.log('ERROR__footer');}
                    )
            }else{
                alert('Ошибка отправки формы')
            }
        }
            function isNameValid(value) {
                if(NAME_REGEXP.test(value) == false){
                    alert('Введите корректрое имя');
                }else{return true;}
            }
            function isEmailValid(value) {
                if(EMAIL_REGEXP.test(value) == false){
                    alert('Введите корректный адрес почты');
                }else{return true;}
            }
            function isSubjectValid(value) {
                if(SUBJECT_REGEXP.test(value) == false){
                    alert('Введите корректный предмет');
                }else{return true;}
            }
            function isMessageValid(value) {
                if(MESSAGE_REGEXP.test(value) == false){
                    alert('Введите корректное сообщение');
                }else{return true;}
            }
        
    });

}
