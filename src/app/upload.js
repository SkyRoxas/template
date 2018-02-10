import $ from 'jQuery';

const upload = () => {
  $(() => {
    let upload_picutes_wrap = $('.upload_picutes_wrap');
    let buttons = $('button:not(.submit)',upload_picutes_wrap);

    buttons.click((e) => {
      let $this = e.currentTarget;
      $($this).prev().click();
      e.preventDefault();
    })
  })
}

export default upload
