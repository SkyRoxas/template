import $ from 'jquery'

const tableSlide = ()=>{
  $(document).ready(function(){
    $('tr').on('click', function(){
      $(this).next().find('.view').slideToggle()
    })
  })
}

export default tableSlide
