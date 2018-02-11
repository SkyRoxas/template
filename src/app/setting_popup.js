import $ from 'jquery'

const jimmy8646_settingPopup = () => {
  $(document).ready(()=>{
    $('form.id-setting-form .popup').on('click', function(){
      $(this).next().fadeToggle()
    })
    $('.popuptext .close').on('click', function(){
      $(this).parents('.popuptext').prev().trigger('click')
    })
  })
}

export default jimmy8646_settingPopup
