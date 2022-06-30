
// document.addEventListener("scroll",avvertiUtente) 

document.addEventListener('scroll',()=>{
    var nav = document.getElementById('nav');

    // console.log(nav.classList.contains('nav-active'))
    if(nav.getBoundingClientRect().top === 0) {
        if(!nav.classList.contains('nav-active')){
            nav.classList.add('nav-active')
        }
    } else {

        nav.classList.remove('nav-active')
    
        
    }
})

window.addEventListener('load',()=>{
    let elemento = ""

        for (let index = 0; index < 15; index++) {
            elemento = elemento +   `
            <div class="prodotto">
            <div class="foto-prodotto">
            <a href="./prodotto.html">
            <img src="content/img/icepeak-ibague-bikini.jpg" alt="">
            </a>
            </div>
                    <div class="divisore"></div>
                    <div class="info-prodotto">
                    
                        <div>
                        <div class="nome-prod">Sophia</div>
                        <div class="prezzo-prod">49,90 €</div>
                    </div>
    
                    <svg width="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="16.6738" y="2" width="0.652174" height="30" fill="black" stroke="black" stroke-width="3"/>
                    <rect x="2" y="17.3262" width="0.652174" height="30" transform="rotate(-90 2 17.3262)" fill="black" stroke="black" stroke-width="3"/>
                    </svg>
                        
                    </div>
                </div>
                           
            `
            
        }
    var griglia = document.getElementById('griglia-prodotti')

    if (griglia !== null) {
        griglia.innerHTML = elemento
        
    }
    
})


window.addEventListener('scroll',()=>{
    if(document.getElementById('sali-su') !== null){
    var puls = document.getElementById('sali-su')
    var altezzaIntro = document.getElementsByClassName('intro-container')[0].getBoundingClientRect().height
    // console.log(window.scrollY + ' | '+ document.getElementsByClassName('intro-container')[0].getBoundingClientRect().height)

    if(window.scrollY > (altezzaIntro*1.25)){
        if(isVisible('footer')){

            puls.classList.remove('sali-visibile')
        } else {
        puls.classList.add('sali-visibile')
        }
    } 
    else{
        puls.classList.remove('sali-visibile')
    }
}
})


function isVisible (parametro){
    let xx = document.getElementById(parametro).getBoundingClientRect();
        let x = document.getElementById(parametro);

        return res =
            xx.top >= 0 &&
            xx.left >= 0 &&
            xx.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + x.offsetHeight) &&
            xx.right <= (window.innerWidth || document.documentElement.clientWidth);
        

}


function gallery () {

    let galleria = document.getElementById('immagine');
    let imgs = document.querySelectorAll(".container-thumbnail div img")

    imgs.forEach(x => {
        x.addEventListener('click',function(){
            // console.log(this.src)
            galleria.src = this.src
            
        })
    })

}

// gallery()

window.onload = gallery;