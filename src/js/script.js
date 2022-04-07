const navToggleElement = document.getElementById('main-menu');
const navMenuElement = document.querySelector('.nav');

let isMenuExpanded = false;

navToggleElement.addEventListener('click', () => {
  if (isMenuExpanded) {
    navToggleElement.ariaExpanded = 'true';
    navMenuElement.dataset.expanded = 'true';
  } else {
    navToggleElement.ariaExpanded = 'false';
    navMenuElement.dataset.expanded = 'false';
  }
  isMenuExpanded = !isMenuExpanded;
});

let buttonChecked = false;

// navToggle.addEventListener('click', () => {
//   if (nav.style.transform === 'translateX(100%)') {
//     buttonChecked = true;
//     nav.style.transform = 'translateX(0%)';
//   } else if (nav.style.transform === 'translateX(0%)') {
//     buttonChecked = false;
//     nav.style.transform = 'translateX(100%)';
//   } else {
//     buttonChecked = true;
//     nav.style.transform = 'translateX(0%)';
//   }
// });

// window.addEventListener('resize', () => {
//   if (document.documentElement.clientWidth >= 562) {
//     if (nav.style.transform === 'translateX(100%)') {
//       nav.style.transform = 'translateX(0%)';
//     }
//   }
// });

// window.addEventListener('resize', () => {
//   if (document.documentElement.clientWidth < 562) {
//     if (buttonChecked === true) {
//       nav.style.transform = 'translateX(0%)';
//     } else {
//       nav.style.transform = 'translateX(100%)';
//     }
//   }
// });

// let resizeTimer;

// window.addEventListener('resize', () => {
//   document.body.classList.add('resize-animation-stopper');
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove('resize-animation-stopper');
//   }, 400);
// });
