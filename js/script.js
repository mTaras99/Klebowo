
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
let modalFooterId = $('#footer-gallery');

$(document)
  .getready(function () {

    loadGalleryFooter(true, 'a.footerko');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGalleryFooter(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGalleryFooter(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#footer-gallery-title')
          .text($sel.data('title'));
        $('#footer-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGalleryFooter($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalFooterId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalFooterId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });