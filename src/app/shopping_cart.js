import $ from 'jquery';

const cart = () => {
  $(() => {
    let products = $('.product_list');

    products.find('.content_wrap').click((e) => {
      let $this = e.currentTarget;
      $($this).parent().toggleClass('active');
    });


    let product_quantity_wrap = $('.product_quantity_wrap');
    let minus = $('.minus',product_quantity_wrap);
    let plus = $('.plus',product_quantity_wrap);
    let product_price = $('.product_price');

    minus.each((index,element) => {
      $(element).click((e) => {
        let $this = e.currentTarget;
        let quantity = $($this).next().val();
        let price = product_price.eq(index).find('.price span:not(.currency)').text();

        if(quantity > 1) {
          -- quantity;
          $($this).next().focus().val(quantity);
          $($this).parent().next().children('span:not(.currency)').text(quantity*price);
        }
      });
    });

    plus.each((index,element) => {
      $(element).click((e) => {
        let $this = e.currentTarget;
        let quantity = $($this).prev().val();
        let price = product_price.eq(index).find('.price span:not(.currency)').text();

        ++ quantity;
        $($this).prev().focus().val(quantity);
        $($this).parent().next().children('span:not(.currency)').text(quantity*price);
      });
    });

  });
}

export default cart
