
require('../../../css/page/special_page/red_envelopes_popup.less');

$(()=>{
  "use strict";
  const  redEnvelopesPopup = (()=>{
    "use strict";
    return (el)=>{
      let dom = $(el);
      let receiveBtn = dom.find('.receive_btn');
      let imgBox = dom.find('.img_box');
      let imgBoxActive = dom.find('.img_box_active');
      if(dom.hasClass('active')){
        $('body,html').css({
          height:100+'%',
          overflow:'hidden'
        })
      }else{
        $('body,html').css({
          height:'auto',
          overflow:'auto'
        })
      }
      receiveBtn.on('click',()=>{
        imgBox.hide();
        imgBoxActive.show();
      })
    }
  })();

  redEnvelopesPopup('.red_envelopes_popup');
  let closeBtn = $('.img_box_active').find('.close_btn');
  closeBtn.on('click',()=>{
    $('.red_envelopes_popup').removeClass('active');
    $('body,html').css({
      height:'auto',
      overflow:'auto'
    })
  });
});


