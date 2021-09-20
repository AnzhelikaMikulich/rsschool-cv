const burger = document.querySelector('.icon-menu');
const header_menu = document.querySelector('.menu_body');
const body = document.querySelector('body');
const header__list = document.querySelector('.menu_list_li');

burger.onclick = function(){
    burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('lock');
}

// header__list.onclick = function () {
//     header__list.classList.remove('active');
//     back.classList.toggle('lock');
// }
 const menu_links = document.querySelectorAll('.menu_link[data-goto]')
 if(menu_links.length>0){
   menu_links.forEach(menu_links=>{
     menu_links.addEventListener('click',onMenuLinksClick)
   })
 }
 function onMenuLinksClick(e){
   const menu_link = e.target;
   if (menu_link.dataset.goto && document.querySelector(menu_link.dataset.goto)) {
     const gotoBlock = document.querySelector(menu_link.dataset.goto);
     const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
     if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      header_menu.classList.remove('active');
      body.classList.remove('lock');
       
     }
     window.scrollTo({
       top:gotoBlockValue,
       behavior: 'smooth'
     });
     e.preventDefault()
   }
 }