const carouselStyles = () => ({
  '@global': {
    /* Slider */
    '.slick-slider': {
      position: 'relative',
      display: 'block',
      boxSizing: 'border-box',
      touchAction: 'pan-y',
      '-ms-touch-action': 'pan-y',
      '-webkit-tap-highlight-color': 'transparent',
    },
    '.slick-slider .slick-list, .slick-slider .slick-track': {
      transform: 'translate3d(0, 0, 0)',
    },
    '.slick-list': {
      position: 'relative',
      display: 'block',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    },
    '.slick-list:focus': {
      outline: 'none',
    },
    '.slick-list.dragging': {
      cursor: 'hand',
    },
    '.slick-track': {
      position: 'relative',
      top: 0,
      left: 0,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.slick-track::before, .slick-track::after': {
      display: 'table',
      content: '',
    },
    '.slick-track::after': {
      clear: 'both',
    },
    '.slick-loading .slick-track': {
      visibility: 'hidden',
    },
    '.slick-slide': {
      display: 'none',
      float: 'left',
      height: '100%',
      minHeight: '1px',
    },
    '[dir="rtl"] .slick-slide': {
      float: 'right',
    },
    '.slick-slide img': {
      display: 'block',
    },
    '.slick-slide.slick-loading img': {
      display: 'none',
    },
    '.slick-slide.slick-dragging img': {
      pointerEvents: 'none',
    },
    '.slick-initialized .slick-slide': {
      display: 'block',
    },
    '.slick-loading .slick-slide': {
      visibility: 'hidden',
    },
    '.slick-vertical .slick-slid': {
      display: 'block',
      height: 'auto',
      border: '1px solid transparent',
    },

    /* Arrows */
    '.slick-prev, .slick-next': {
      fontSize: 0,
      lineHeight: 0,
      position: 'absolute',
      top: '50%',
      display: 'block',
      padding: '0',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'transparent',
      zIndex: 9,
      opacity: 0.75,
    },
    '.slick-prev:hover, .slick-prev:focus, .slick-next:hover, .slick-next:focus': {
      outline: 'none',
      opacity: 1,
    },
    '.slick-prev.slick-disabled, .slick-next.slick-disabled': {
      opacity: 0.25,
    },
    '.slick-prev': {
      left: '0px',
    },
    '[dir="rtl"] .slick-prev': {
      right: '0px',
    },
    '.slick-next': {
      right: '0px',
    },
    '[dir="rtl"] .slick-next': {
      right: 'auto',
      left: '0px',
    },
    '.slick-arrow.slick-hidden': {
      display: 'none',
    },

    /* Dots */
    '.slick-dots': {
      position: 'absolute',
      bottom: '.5em',
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      textAlign: 'center',
    },
    '.slick-dots li': {
      position: 'relative',
      display: 'inline-block',
      margin: '0 0.375em',
      padding: 0,
      cursor: 'pointer',
    },
    '.slick-dots li button': {
      display: 'block',
      cursor: 'pointer',
      width: '.5rem',
      height: '.5rem',
      padding: 0,
      lineHeight: 0,
      textIndent: '-999px',
      borderRadius: '50%',
      background: 'transparent',
      opacity: 0.5,
      border: `1px solid #999`,
    },
    '.slick-dots li button:hover, .slick-dots li button:focus': {
      opacity: 0.75,
      border: `1px solid #6D1B7B`,
    },
    '.slick-dots li.slick-active button': {
      opacity: 1,
      border: `1px solid #9c27b0`,
      background: `#9c27b0`,
    },
  },
});

export default carouselStyles;
