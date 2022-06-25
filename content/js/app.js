document.addEventListener("scroll",avvertiUtente)





function avvertiUtente() {
    var nav = document.getElementById('nav');

    if(nav.getBoundingClientRect().top === 0) {

        nav.classList.add('center')
    } else {

        nav.classList.remove('center')
    
        
    }
     

    }
    

    document.getClas