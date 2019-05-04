import React from 'react';
import { string, any, object, shape, oneOf } from 'prop-types';
import classnames from 'classnames';
import Slider from 'react-slick';

import withStyles from '@material-ui/core/styles/withStyles';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@material-ui/icons';

import carouselStyle from './Carousel.style';

/**
 * @param  {bool}   accessibility Enables tabbing and arrow key navigation. Defaults to `true`
 * @param  {bool}   adaptiveHeight Adjust the slide's height automatically. Defaults to `false`
 * @param  {func}   afterChange Callback function called after the current index changes. The new index is accessible in the first parameter of the callback function
 * @param  {bool}   arrows Should we show Left and right nav arrows. Defaults to `true`
 * @param  {string} arrowClass Class applied to arrow if they are enabled. Defaults to `''`
 * @param  {bool}   autoplay  Should it be auto scroll. Defaults to `false`
 * @param  {int}    autoplaySpeed Delay between each auto scroll (in ms). Defaults to `3000`
 * @param  {func}   beforeChange  Callback function called before the current index changes. The old and the new indexes are accessible in the first and the second parameters of the callback function respectively
 * @param  {bool}   centerMode  Should we centre to a single item. Defaults to `false`
 * @param  {string} centerPadding Padding for the slide in center. Defaults to `50px`
 * @param  {any}    children Child components or elements that the carousel accepts. This is a required prop
 * @param  {string} className CSS class for inner slider div. Defaults to `''`
 * @param  {func}   customPaging  Custom paging templates. Defaults to `i => <button>{i + 1}</button>`
 * @param  {bool}   dots  Should we show the dots at the bottom of the gallery. Defaults to `false`
 * @param  {string} dotsClass Class applied to the dots if they are enabled. Defaults to `slick-dots`
 * @param  {bool}   draggable Is the gallery scroll via dragging on desktop. Defaults to `true`
 * @param  {string} easing Behavior of scroll elements. Defaults to `linear`
 * @param  {bool}   fade  Slides use fade for transition. Defaults to `false`
 * @param  {bool}   focusOnSelect Go to slide on click. Defaults to `false`
 * @param  {bool}   infinite  Should the gallery infinitely wrap around its contents. Defaults to `true`
 * @param  {bool}   initialSlide  Which item should be the first to be displayed. Defaults to `0`
 * @param  {ondemand`/`progressive}   lazyLoad  Loads images or renders components on demand or progressively. Defaults to `null`
 * @param  {func}   onInit  componentWillMount callback. `() => void`. Defaults to `null`
 * @param  {func}   onLazyLoad  Callback after slides load lazily. `slidesLoaded => {...}`. Defaults to `null`
 * @param  {func}   onReInit  componentDidUpdate callback. `() => void`. Defaults to `null`
 * @param  {func}   onSwipe  Callback after slide changes by swiping. Defaults to `null`
 * @param  {bool}   pauseOnDotsHover  Prevents autoplay while hovering on dots. Defaults to `false`
 * @param  {bool}   pauseOnFocus  Prevents autoplay while focused on slides. Defaults to `false`
 * @param  {bool}   pauseOnHover  Prevents autoplay while hovering. Defaults to `true`
 * @param  {array}  responsive  Array of objects in the form of { breakpoint: int, settings: { ... } } The breakpoint int is the maxWidth so the settings will be applied when resolution is below this value. Breakpoints in the array should be ordered from smallest to greatest. Use 'unslick' in place of the settings object to disable rendering the carousel at that breakpoint. Example:  { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 100000, settings: 'unslick' }
 * @param  {int}    rows  Number of rows per slide in the slider, (enables grid mode). Defaults to `1`
 * @param  {bool}   rtl Reverses the slide order. Defaults to `false`
 * @param  {string} slide Slide container type. Defaults to `div`
 * @param  {int}    slidesPerRow  Number of slides to display in grid mode, this is useful with rows option. Defaults to `1`
 * @param  {int}    slidesToScroll  Number of slides to scroll for each navigation item. Defaults to `1`
 * @param  {int}    slidesToShow  Number of slides to be visible at a time. Defaults to `1`
 * @param  {int}    speed Animation speed in milliseconds. Defaults to `500`
 * @param  {bool}   swipe Enable swipe to change slides. Defaults to `true`
 * @param  {bool}   swipeToSlide  Allow users to drag or swipe directly to a slide irrespective of slidesToScroll. Defaults to `false`
 * @param  {bool}   touchMove Defaults to `true`
 * @param  {int}    touchThreshold Defaults to `5`
 * @param  {bool}   useCSS  Enable/Disable CSS Transitions. Defaults to `true`
 * @param  {bool}   useTransform  Enable/Disable CSS transforms. Defaults to `true`
 * @param  {bool}   variableWidth Defaults to `false`
 * @param  {bool}   vertical  Vertical slide mode. Defaults to `false`
 * @param  {React Element} nextArrow Allows to select a node or customize the HTML for the "Next" arrow. Defaults to `<button type="button" class="slick-next">Next</button>`
 * @param  {React Element} prevArrow Allows to select a node or customize the HTML for the "Previous" arrow. Defaults to `<button type="button" class="slick-prev">Previous</button>`
 * @param  {string} nextArrowClass Class applied to the next arrow only if arrows are enabled. Defaults to `''`
 * @param  {string} prevArrowClass Class applied to the previous arrow only if arrows are enabled. Defaults to `''`
 *
 * @return {html tag} <div> [return a container which represent the carousel
 */
const propTypes = {
  classes: object.isRequired,
  children: any.isRequired,
  customizeArrow: shape({
    color: oneOf([
      'inherit',
      'primary',
      'secondary',
      'action',
      'error',
      'disabled',
    ]),
    fontSize: oneOf(['inherit', 'default', 'small', 'large']),
    arrowClass: string,
    nextArrowClass: string,
    prevArrowClass: string,
  }),
};

const defaultProps = {
  customizeArrow: {
    color: 'primary',
    fontSize: 'default',
    arrowClass: '',
    nextArrowClass: '',
    prevArrowClass: '',
  },
};

/* eslint-disable react/prop-types */
/**
 * SlickPrevButton
 * extract `currentSlide` and `slideCount` from props to avoid passing these props to custom arrow slick container.
 * The reason of this is because these props are giving warning that `React does not recognize the slideCount and currentSlide prop on DOM element`.
 *
 * Fix is being taken from
 *  https://github.com/akiran/react-slick/issues/1195
 *
 */
const SlickPrevButton = ({ currentSlide, slideCount, children, ...props }) => (
  <div alt="alt-prevArrowButton" title="alt-prevArrowButton" {...props}>
    {children}
  </div>
);

/**
 * SlickNextButton
 * extract `currentSlide` and `slideCount` from props to avoid passing these props to custom arrow slick container.
 * The reason of this is because these props are giving warning that `React does not recognize the slideCount and currentSlide prop on DOM element`.
 *
 * Fix is being taken from
 *  https://github.com/akiran/react-slick/issues/1195
 *
 */
const SlickNextButton = ({ currentSlide, slideCount, children, ...props }) => (
  <div alt="alt-nextArrowButton" title="alt-nextArrowButton" {...props}>
    {children}
  </div>
);
/* eslint-enable react/prop-types */

/**
 * This carousel component is implementation of a third party library react-slick.
 * This document is copied from the original documentation of react-slick from github.
 * Please refer to that documentation for further information.
 *
 * @see Slider
 *
 */
class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(ref) {
    this.slick = ref;
  }

  /**
   * @function render
   */
  render() {
    const { children, customizeArrow } = this.props;

    const settings = {
      customPaging: i => (
        <button type="button" aria-label={`alt-viewSlide ${i + 1}`} />
      ),
      prevArrow: (
        <SlickPrevButton>
          <ChevronLeftOutlined
            aria-label="alt-prevArrowButton"
            className={classnames(
              customizeArrow.prevArrowClass,
              customizeArrow.arrowClass
            )}
            color={customizeArrow.color}
            fontSize={customizeArrow.fontSize}
          />
        </SlickPrevButton>
      ),
      nextArrow: (
        <SlickNextButton>
          <ChevronRightOutlined
            aria-label="alt-nextArrowButton"
            className={classnames(
              customizeArrow.nextArrowClass,
              customizeArrow.arrowClass
            )}
            color={customizeArrow.color}
            fontSize={customizeArrow.fontSize}
          />
        </SlickNextButton>
      ),
    };
    return (
      <Slider ref={this.setRef} {...settings} {...this.props}>
        {children}
      </Slider>
    );
  }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default withStyles(carouselStyle)(Carousel);
