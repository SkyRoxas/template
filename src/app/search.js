import $ from 'jquery'

const search = ()=> {
  $(function() {
    let form = $('.search form')
    let button = $('input.submit',form)

    button.click((e) => {
      button.prev().toggleClass('active');
    });
  })
}

export default search
