const config = window.EVANGEL_CONFIG;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function learner(kind='left') {
 const right=kind==='right';
 return `<svg viewBox="0 0 330 380" role="img" aria-label="Illustration of a learner with books"><path d="M31 118C-4 28 126 2 183 30s107 8 127 85-17 191-91 222S24 279 31 218s28-41 0-100Z" fill="${right?'#e7c3df':'#e5d36a'}"/><g stroke="#173f34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M59 327q6-94 50-101l105-3q62 24 72 103Z" fill="${right?'#d981a4':'#f5f1df'}"/><path d="M124 207v31q30 30 53 0v-39" fill="#d9a179"/><path d="M99 111q0-65 65-62t62 71l-13 61q-33 58-71 25-33-26-43-95" fill="#e9b78d"/>${right?'<path d="M111 89q-10 83-19 102l-23 33q-26-50-4-123 14-65 76-64 88-14 102 72 13 66-2 125l-36-17q22-53-3-105-10-10-18-32-41 36-73 9Z" fill="#263e38"/>':'<path d="M100 137q-27-25-19-52-20-29 6-39-1-28 28-19 17-31 41-12 24-24 43 2 33-11 36 15 30 7 17 34 18 28-5 42-1 36-21 36l-7-51q-35 18-65-6-16 21-39 10Z" fill="#263e38"/>'}<path d="M135 136l7-1m41-1 7 2m-31 5-4 19 10 1" fill="none"/><path d="M143 177q20 18 39-2" fill="#fff8ee"/><path d="M111 233l26 39 24-25 23 25 30-47M139 274l-5 49m54-51 4 49" fill="none"/><path d="M78 238q-12 35-4 78m143-78q17 24 20 65" stroke-width="13" fill="none"/><path d="M113 291l103-25 29 95-103 13Z" fill="${right?'#497f67':'#5c8f75'}"/><path d="M122 299l96-22m-92 32 96-22" stroke="#fff7db"/><path d="M100 302q-18-6-21 10t15 25l56 10q18-2 13-14Z" fill="#e9b78d"/></g><path d="M32 59 18 45m23 3-1-23M285 242l22 8m-18-23 19-5" stroke="${right?'#cf8ac1':'#e9a824'}" stroke-width="5" stroke-linecap="round"/></svg>`;
}
document.querySelector('#learner-left').innerHTML=learner();
document.querySelector('#learner-right').innerHTML=learner('right');
const toggle=document.querySelector('.menu-toggle'), menu=document.querySelector('#mobile-menu');
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');menu.classList.remove('open');menu.inert=true;}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menu.classList.toggle('open',open);menu.inert=!open;});
menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu()}});
window.addEventListener('scroll',()=>document.querySelector('header').classList.toggle('scrolled',scrollY>20),{passive:true});

