window.onload=()=>{

    isExpanded.onclick = (e)=>{
    const isExpanded = document.getElementById('isExpanded');
    let leftArrow=document.getElementById('leftArrow');
    let hambBar = document.getElementById('hambBar');
    let mainRow = document.getElementById('mainrow');
    let ariaEx = isExpanded.ariaExpanded;
    
    if(ariaEx=="false" || ariaEx===null){
        console.log(ariaEx+" bej")
         document.body.style.overflow = 'hidden';
        leftArrow.style.display = "block";
        hambBar.style.display = "none";
        
    }
    else{
       console.log(ariaEx); document.body.style.overflow = 'initial';
        leftArrow.style.display = "none";
        hambBar.style.display = "block";
        
    };
    };
    const toggleMenu=()=>{
        document.body.style
    }
  /*
    let navBar = document.getElementsByClassName('stickyBar');
window.addEventListener('scroll', (e) => { 
    console.log(navBar);
     if (window.scrollY > 500) {
        navBar.addClass('fixed-top');
     }
      if (window.scrollY < 500) {
        navBar.removeClass('fixed-top');
     }
}
)*/
/*closeSignUp.onclick = (e) => {
    let close = document.getElementById('signUp');
    let body = document.body;
    close.style.display = 'none';
    let modalBackground = document.getElementsByClassName('modal-backdrop');
    console.log(modalBackground);
    body.classList.remove('modal-open');
    body.style.paddingRight = '0';
    body.removeChild(modalBackground);
};
*/    
};