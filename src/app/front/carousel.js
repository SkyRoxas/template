import $ from 'jquery'
import slick from 'slick-carousel'

const carousel = () => {
  $(document).ready(function() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      zIndex: 1,
      asNavFor: '.slider-nav'
    })
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    })
  })
}

export default carousel
