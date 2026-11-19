function rain(list,n){
  for(var i=0;i<n;i++){
    var s=document.createElement('span');
    s.className='fall';
    s.textContent=list[Math.floor(Math.random()*list.length)];
    s.style.left=Math.random()*100+'vw';
    s.style.fontSize=(16+Math.random()*22)+'px';
    s.style.animationDuration=(2.5+Math.random()*3)+'s';
    s.style.animationDelay=Math.random()+'s';
    document.body.appendChild(s);
    (function(el){setTimeout(function(){el.remove()},7000)})(s);
  }
}
document.getElementById('go').onclick=function(){document.getElementById('carta').scrollIntoView({behavior:'smooth'})};

var env=document.getElementById('envelope'),letter=document.getElementById('letter'),hint=document.getElementById('hint');
function openEnv(){
  var o=env.classList.toggle('open');
  letter.classList.toggle('show',o);
  hint.textContent=o?'lee con calma 💕':'toca el sobre para abrirlo';
  if(o)rain(['💗','💙','🎀'],18);
}
env.onclick=openEnv;
env.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openEnv()}};

var vales=[["Un abrazo gigante","válido siempre, sin límite"],["Una tarde de Morat","con música, snacks y cantar a gritos"],["Un maratón de lo que tú elijas","yo pongo la compañía"],["Un audio de 10 minutos","para contarme todo, sin prisa"],["Una salida juntos","tú eliges el plan"]];
var box=document.getElementById('vales');
vales.forEach(function(v){
  var d=document.createElement('div');d.className='vale';
  var t=document.createElement('div');
  var a=document.createElement('strong');a.textContent=v[0];
  var b=document.createElement('span');b.textContent=v[1];
  t.appendChild(a);t.appendChild(b);
  var btn=document.createElement('button');btn.textContent='Canjear';
  btn.onclick=function(){d.classList.add('done');rain(['💖','⭐','🎀'],14)};
  d.appendChild(t);d.appendChild(btn);box.appendChild(d);
});

var hugs=["Un abrazo apretado de tu amigo 🤗","Gracias por existir, Scarleth 💗","Eres de lo mejor que me ha pasado 💙","Que todo te salga increíble este año 🎀","Te quiero muchísimo 🫶"];
var hi=0;
document.getElementById('hug').onclick=function(){
  document.getElementById('hugMsg').textContent=hugs[hi%hugs.length];hi++;
  rain(['💗','💙','🖤','🎶','🎀','🫂'],34);
};
