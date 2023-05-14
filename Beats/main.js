const home = {
    page: document.querySelector('#home'),
    btn: document.querySelector('#homeBtn')
};
const specs = {
    page: document.querySelector('#specs'),
    btn: document.querySelector('#specsBtn')
};
const cases = {
    page: document.querySelector('#case'),
    btn: document.querySelector('#caseBtn')
};

const products = {
    page: document.querySelector('#products'),
    btn: document.querySelector('#productsBtn')
};

const burger = document.querySelector('.menu__burger');
const pages = [home, specs, cases, products]

function onScreen (obj){
    obj.page.addEventListener('mouseover', function(){
        obj.btn.style.color = "#fff";
        obj.page.addEventListener('mouseout', function(){
            obj.btn.style.color = '';
        })
    })
}
for (let i = 0; i < pages.length; i++){
     onScreen(pages[i]);
}

burger.addEventListener('click', function(){
    const menuBody = document.querySelector('.navigation__body');
    const body = document.body
    const nav = document.querySelector('.header__navigation')
    menuBody.classList.toggle('active');
    body.classList.toggle('lock');
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})