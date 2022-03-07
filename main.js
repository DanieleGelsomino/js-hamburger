//console check
console.log('JS OK!')

// seleziono l'icona dell'hamburger menu
const dropDown = document.querySelector(".header-right > a")
// aggiungo evento display block al click
dropDown.addEventListener('click', function(){
    console.log('dropDown click');
    let menuBlock = document.querySelector(".hamburger-menu");
    menuBlock.style.display='block';

});

// seleziono l'icona close
const closeDropDown = document.querySelector('.close');
// aggiungo evento display block al click
closeDropDown.addEventListener('click', function(){ 
    console.log('closeDropDown click');
    let closeMenu = document.querySelector(".hamburger-menu");
    closeMenu.style.display='none';
});

