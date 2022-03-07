//console check
console.log('JS OK!')

// seleziono l'icona dell'hamburger menu
const dropDown = document.querySelector(".fa-bars")
// aggiungo evento display block al click
dropDown.addEventListener('click', function(){
    let menuBlock = document.querySelector(".hamburger-menu");
    menuBlock.style.display='block';

});

// seleziono l'icona close
const closeDropDown = document.querySelector('.fa-times');
// aggiungo evento display block al click
closeDropDown.addEventListener('click', function(){ 
    let closeMenu = document.querySelector(".hamburger-menu");
    closeMenu.style.display='none';
});

