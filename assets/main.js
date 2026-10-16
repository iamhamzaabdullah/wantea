// Keep explicitly opened index files on their clean directory URL.
if(/^https?:$/.test(location.protocol)&&location.pathname.endsWith('/index.html')) location.replace(location.pathname.slice(0,-10)+location.search+location.hash);
const nav=document.querySelector('.nav'),menu=document.querySelector('.menu-btn');
const closeMenu=()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')};
menu?.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){closeMenu();menu.focus()}});
document.addEventListener('click',e=>{if(nav&&!nav.contains(e.target))closeMenu()});
document.querySelectorAll('.navlinks a').forEach(a=>{if(new URL(a.href).pathname.replace(/index.html$/,'')===location.pathname.replace(/index.html$/,''))a.setAttribute('aria-current','page');a.addEventListener('click',closeMenu)});
const sizes={250:['A moment to yourself.','The quick sip. A small pause in a busy Jakarta day.','250 ml',140],500:['Stay a little longer.','The daily one. More room for your afternoon and the thoughts that come with it.','500 ml',160],1000:['Bring it to the table.','The shared pour. For good company and conversations that keep going.','1 liter',190]};
document.querySelectorAll('[data-size]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-size]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));const [title,copy,label,width]=sizes[button.dataset.size];document.querySelector('#pour-title').textContent=title;document.querySelector('#pour-copy').textContent=copy;document.querySelector('#bottle-size').textContent=label;document.querySelector('#tea-bottle').style.width=width+'px'}));
const prompts={Philosophy:['What makes a life well lived?','Can we disagree and both learn something true?','When did you last change your mind about something important?'],Psychology:['How much of your attention do you choose to give?','Which everyday ritual helps you feel most like yourself?','What makes it easier to admit that we might be wrong?'],Politics:['What does it mean to be a good neighbour in a divided society?','How should a community decide what is fair?','What makes a public conversation worth having?'],Science:['What evidence would change your mind?','When does a useful explanation become a good one?','Which ordinary thing would you most like to understand?'],Religion:['What can people of different beliefs learn from one another?','How do our daily rituals express what we value?','What does it mean to approach a belief with both curiosity and respect?']};
document.querySelectorAll('.question-space').forEach(section=>{
 let topic='Philosophy',index=0;
 const question=section.querySelector('#question');
 const label=section.querySelector('#question-topic');
 const buttons=[...section.querySelectorAll('[data-topic]')];
 function render(){
  question.textContent=prompts[topic][index];
  label.textContent=topic.toUpperCase()+' / '+String(index+1).padStart(2,'0');
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.topic===topic)));
 }
 buttons.forEach(button=>button.addEventListener('click',()=>{
  if(!prompts[button.dataset.topic])return;
  topic=button.dataset.topic;index=0;render();
 }));
 section.querySelector('#next-question')?.addEventListener('click',()=>{index=(index+1)%prompts[topic].length;render()});
 render();
});
