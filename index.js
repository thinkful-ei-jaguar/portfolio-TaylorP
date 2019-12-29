'use strict';

//burger menu appear then disappear
let menu = document.getElementById('menu'),
    btn = document.querySelector('.burger-button');

btn.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
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
}
}, false);


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

let getTopAbout = function(){
    let w = window.innerWidth;
    let x;

    if (w>750) {
        x = 212;
    }
    else {
        x =292;
    }

    return x;
}

let getTopProject = function(){
    let w = window.innerWidth;
    let x;

    if (w>750) {
        x = 621;
    }
    else {
        x =779;
    }

    return x;
}

let getTopSkills = function(){
    let w = window.innerWidth;
    let x;

    if (w>750) {
        x = 212;
    }
    else {
        x =669;
    }

    return x;
}
aboutMe.addEventListener('click', function(){
    const xy = document.body.getBoundingClientRect();
    window.scrollTo({
        top: getTopAbout(),
        left: xy.x,
        behavior: 'smooth'
    })

});
aboutMe.addEventListener('keypress', function(event){
    if (event.keyCode ===13) {
      const xy = document.body.getBoundingClientRect();
      window.scrollTo({
        top: getTopAbout(),
        left: xy.x,
        behavior: 'smooth'
      })
    }
});

projects.addEventListener('click', function(){
    const xy = projectsSection.getBoundingClientRect();
    window.scrollTo({
        top: getTopProject(),
        left: xy.x,
        behavior: 'smooth'
    })
});

projects.addEventListener('keypress', function(event){
  if (event.keyCode === 13){
    const xy = projectsSection.getBoundingClientRect();
    window.scrollTo({
        top: getTopProject(),
        left: xy.x,
        behavior: 'smooth'
    })
  }
});

skills.addEventListener('click', function(){
    const xy = skillsSection.getBoundingClientRect();
    window.scrollTo({
        top: getTopSkills(),
        left: xy.x,
        behavior: 'smooth'
    })
});

skills.addEventListener('keypress', function(event){
  if(event.keyCode === 13) {
    const xy = skillsSection.getBoundingClientRect();
    window.scrollTo({
        top: getTopSkills(),
        left: xy.x,
        behavior: 'smooth'
    })
  }
});
