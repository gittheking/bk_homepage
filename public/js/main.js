'use strict';
(() => {

  const header              = document.querySelector('header');
  const body                = document.querySelector('body');
  const name                = document.querySelector('h1');

  header.style.height       = `${window.innerHeight}px`;
  header.style.width        = `${window.innerWidth}px`;
  name.style.height         = `${window.innerHeight}px`;
  name.style.width          = `${window.innerWidth}px`;
  name.style.backgroundSize = 'auto auto';

  document.addEventListener('mousemove', event => {
    const middleX          = window.innerWidth / 2;
    const middleY          = window.innerHeight / 2;
    header.style.transform = `perspective(1000px) 
                              rotateX(${(-1)*(middleY - event.clientY)/50}deg) 
                              rotateY(${(middleX - event.clientX)/100}deg)`;
  });

  window.addEventListener('resize', event => {
    header.style.height       = `${window.innerHeight}px`;
    header.style.width        = `${window.innerWidth}px`;
    name.style.height         = `${window.innerHeight}px`;
    name.style.width          = `${window.innerWidth}px`;
    name.style.backgroundSize = 'auto auto';
  });

})();