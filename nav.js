const navToggle = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
const overlay = document.getElementById('overlay');

navToggle.addEventListener('click', ()=>{
    
    let visibility = mainNav.getAttribute('data-visible');


    if(visibility === "false"){
        mainNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);

    }else{
        mainNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

})