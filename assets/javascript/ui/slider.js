export function slider() {
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  $('.slider').each(function (sliderIndex) {

    var $this = $(this),
      sliderId = $this.attr('id');

    // If slider elem have no id => generate id 
    if (sliderId == null || sliderId == undefined) {
      sliderId = 'slider-' + uuidv4();
      $this.attr('id', sliderId);
    }

    // Defalut slider args
    var sliderOpt = {
      asNavFor: `#${sliderId} .captions`,
      arrows: false,
      draggable: false,
      autoplay: false,
      autoplaySpeed: 2000,
    };
    // Defalut slider caption args
    // var captionsOpt = {
    //   asNavFor: `#${sliderId} .slides`,
    //   fade: true,
    //   draggable: false,
    //   appendArrows: $this.find('.pagination'),
    //   prevArrow: '<button class="button pagination__button border-none border-radius-0 effect-underline-inside-out m-0"><i class="icon scale-1-2 gg-arrow-left"></i></button>',
    //   nextArrow: '<button class="button pagination__button border-none border-radius-0 effect-underline-inside-out m-0"><i class="icon scale-1-2 gg-arrow-right"></i></button>'
    // };
    // Defalut thumbs args
    var thumbsOpt = {
      slidesToShow: 3,
      asNavFor: `#${sliderId} .slides`,
    };

    // Swiper slider
    // 
    if ($this.hasClass('swiper')) {
      console.log('slider has .swiper');
      delete sliderOpt.asNavFor;
      sliderOpt.arrows = true;
      sliderOpt.slidesToShow = $this.data('slider-slides-to-show') || 4;
      sliderOpt.slidesToScroll = 1;
    }

    // Thumbnail slider
    //
    // if ($this.hasClass('thumbnail')) {
    //   console.log('slider has .thumbnail');
    //   sliderOpt.asNavFor = `#${sliderId} .thumbs`;
    // }

    // CREATE INSTANCE OF SLIDER 
    $this.find('.slides').slick(sliderOpt);

    // CREATE INSTANCE OF CAPTIONS
    // $this.find(".captions").slick(captionsOpt)

    // CREATE INSTANCE OF THUMBS
    // $this.find(".thumbs").slick(thumbsOpt)
  });
}