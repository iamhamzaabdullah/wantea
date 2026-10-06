const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
if(menuBtn) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-scroll]').forEach(a=>a.addEventListener('click',e=>{
 const target=document.querySelector(a.dataset.scroll);
 if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
}));
