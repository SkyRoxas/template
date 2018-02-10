import $ from 'jquery'

const search = ()=> {
  $(() => {
    let form = $('.search form')
    let button = $('input.submit',form)

    button.click((e) => {
      button.prev().toggleClass('active');
    });
  })
}

export default search
