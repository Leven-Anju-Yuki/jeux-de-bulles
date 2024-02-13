let n=0;
const score=document.querySelector('h2 p');
function creerbulle() {
    //creation de bulle
    const bulle=document.createElement('p');
    bulle.classList.add("bulle");//ajout de la classe
    document.body.appendChild(bulle);
    //taille des bulles
    const taille=Math.ceil(Math.random()*100)+10+"px";
    bulle.style.width=taille;
    bulle.style.height=taille;
    //position des bulles
    const postop=Math.ceil(Math.random()*90)+100+"%";
    const postleft=Math.ceil(Math.random()*80)+"%";
    bulle.style.top=postop;
    bulle.style.left=postleft;
    //eclater les bulles
    bulle.addEventListener('click',()=>{
        bulle.remove();
        n++;
        score.innerHTML=n;
    })
    setTimeout(()=>{
        bulle.remove();
    },6000)
}

setInterval(creerbulle, 100);