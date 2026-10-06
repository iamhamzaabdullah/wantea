
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
if(menuBtn) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

const els=[...document.querySelectorAll('[data-en][data-id]')];
let lang=localStorage.getItem('wantea-lang')||'en';
function applyLang(){
  document.documentElement.lang=lang;
  els.forEach(el=>{el.textContent=el.dataset[lang]});
  document.querySelectorAll('[data-lang-label]').forEach(el=>el.textContent=lang.toUpperCase());
}
document.querySelectorAll('.lang').forEach(btn=>btn.addEventListener('click',()=>{
  lang=lang==='en'?'id':'en'; localStorage.setItem('wantea-lang',lang); applyLang();
}));
applyLang();

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-scroll]').forEach(a=>a.addEventListener('click',e=>{
 const target=document.querySelector(a.dataset.scroll);
 if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
}));
