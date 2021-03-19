var scrollBefore = 0;
let nav=document.getElementsByTagName("nav")[0]
let logoImage = document.getElementById('logoImage');
let tsf = document.getElementById('tsf');
let logoText = document.getElementById('logo-text');
let menu= document.getElementById('menu');
  window.addEventListener('scroll', function(e) {
    const scrolled = window.scrollY;
    if(scrollBefore == scrolled){
        console.log("ScrollUP");
        scrollBefore = scrolled;
        nav.style.display="flex";
        nav.style.height="15vh";
        logoImage.style.height="14vh";
        tsf.style.top="12.9vh";
        tsf.style.left="-.3vw";
        tsf.style.fontSize ="1vh";
        logoText.style.fontSize = "5vh";
        menu.style.fontSize = "4vh"
        //Desired action
    }else{
        console.log("ScrollDOWN");
        console.log(scrolled);
        nav.style.display="flex";
        nav.style.height="10vh";
        logoImage.style.height="9vh";
        tsf.style.top="8.3vh";
        tsf.style.left="-.2vw";
        tsf.style.fontSize =".63vh";
        logoText.style.fontSize = "3vh";
        logoText.style.marginLeft = "1vh";
        menu.style.fontSize = "3vh"
        
    }
      });
      
