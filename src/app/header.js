import $ from 'jQuery';

const ResponsiveMenu = () => {
  $(() => {
    let mobile_header = $('#mobile_header');
    let menu_open_button = $('#toggle',mobile_header);
    let menu_close_button = $('#close',mobile_header);
    let menu = $('.mobile_menu',mobile_header);
    let search_form = $('#search_form');
    let search_form_close = $('.search_close',search_form);
    let search_form_open = $('#search',mobile_header);



    menu_open_button.click((e) => {
      menu.addClass('active');
    });

    menu_close_button.click((e) => {
      menu.removeClass('active');
    });


    search_form_open.click((e) => {
      search_form.fadeIn();
      e.preventDefault()
    });

    search_form_close.click((e) => {
      search_form.fadeOut();
      e.preventDefault()
    });
  });
}


export default ResponsiveMenu
