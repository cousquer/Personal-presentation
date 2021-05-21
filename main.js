"use strict";

var startExperienteBtn = document.querySelector('#start_experience');

var efface = function(){
    document.querySelector('#container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto';
};

startExperienteBtn.addEventListener("click", efface); 