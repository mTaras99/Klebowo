window.onload=()=>{

    isExpanded.onclick = (e)=>{
    const isExpanded = document.getElementById('isExpanded');
    let leftArrow=document.getElementById('leftArrow');
    let hambBar = document.getElementById('hambBar');
    let mainRow = document.getElementById('mainrow');
    let ariaEx = isExpanded.ariaExpanded;
    console.log(ariaEx+" bej")
    if(ariaEx=="false" || ariaEx===null){
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
}


