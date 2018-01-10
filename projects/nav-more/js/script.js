/*
    Aufgabe1 - Navigation
    1. Initial Navigation geschlossen
        -> Ul-Tag nicht sichtbar, Nav-Btn ist Burger
    2. Bei Click auf Nav-Btn
        -> Ul-Tag entweder sichtbar oder nicht sichtbar
        -> Nav-Btn entweder Burger oder Close

    Aufgabe2 - Mehr Button
    1. Bei Click auf Mehr-Btn
        -> Text sichtbar oder verstecken
        -> Mehr-Btn Text anpassen, entweder 'Mehr anzeigen' oder 'weniger anzeigen'
*/

"use strict";

{

  let navState = false; //false => navi closed, true => navi opened
  let descState = false;

  const init = () => {
    initEventListener();
  };

  const initEventListener = () => {
    document.querySelector('.nav-btn').addEventListener('click', handleClickOnNavBtn);
    document.querySelector('.more-btn').addEventListener('click', handleClickOnMoreBtn)
  };

  const handleClickOnNavBtn = () => {
    let ul = document.querySelector('.main-nav ul');
    let img = document.querySelector('.main-nav img');

    ul.classList.toggle('open');
    img.src = navState ? 'img/menu.png' : 'img/cancel.png';

    navState = !navState;
  };

  const handleClickOnMoreBtn = () => {
    let descText = document.querySelector('.desc');
    let moreBtn = document.querySelector('.more-btn')

    descText.classList.toggle('open');
    descText.classList.contains('open') ? moreBtn.textContent = "read less" : moreBtn.textContent = "read more";

  };


  init();

}
