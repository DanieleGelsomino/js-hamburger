//console check
console.log('JS OK!')

// seleziono l'icona dell'hamburger menu
const dropDown = document.querySelector(".fa-bars")
// aggiungo evento display block al click
dropDown.addEventListener('click', function(){
    let menuBlock = document.querySelector(".hamburger-menu");
    menuBlock.style.display='block';

});


