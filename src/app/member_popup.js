import $ from 'jquery'
import popups from 'popups'

const memberPopup = () => {

  const from = () => ($('.form_application').html())

  const popup = (str) => {
    popups.modal({
      content: str
    })
  }
  $(document).ready(function() {
    $('.member-page .btn-popup').click(function() {
      popup(from())
    })
  })
}

export default memberPopup
