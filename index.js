'use strict';

//burger menu appear then disappear
let menu = document.getElementById('menu'),
    btn = document.querySelector('button');

btn.addEventListener('click', function () {
  
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    setTimeout(function () {
      menu.classList.remove('visuallyhidden');
    }, 20);
  } else {
    menu.classList.add('visuallyhidden');    
    menu.addEventListener('transitionend', function(e) {
      menu.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
  
}, false);

//menu links to sections on page
const aboutMe = document.getElementById('about-btn');
const projects = document.getElementById('projects-btn');
const skills = document.getElementById('skills-btn');

const aboutSection = document.getElementById('about-me');
const projectsSection = document.getElementById('my-projects');
const skillsSection = document.getElementById('my-skills');

aboutMe.addEventListener('click', function(){
    const xy = aboutSection.getBoundingClientRect();
    window.scrollTo({
        top: xy.y,
        left: xy.x,
        behavior: 'smooth'
    })
});

projects.addEventListener('click', function(){
    const xy = projectsSection.getBoundingClientRect();
    window.scrollTo({
        top: xy.y,
        left: xy.x,
        behavior: 'smooth'
    })
});

skills.addEventListener('click', function(){
    const xy = skillsSection.getBoundingClientRect();
    window.scrollTo({
        top: xy.y,
        left: xy.x,
        behavior: 'smooth'
    })
});
