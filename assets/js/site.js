(function(){var h=document.querySelector('.hd');if(!h)return;
document.addEventListener('click',function(e){var t=e.target.closest('.nav-toggle');if(t){var o=h.classList.toggle('open');t.setAttribute('aria-expanded',o)}});
window.addEventListener('scroll',function(){h.classList.toggle('sm',window.scrollY>40)},{passive:true});
if(location.hash){var el=document.getElementById(location.hash.slice(1));if(el)setTimeout(function(){el.scrollIntoView()},50)}
})();
