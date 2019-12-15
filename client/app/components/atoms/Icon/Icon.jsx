import React from 'react';
import { string, object, func } from 'prop-types';
import classnames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';

/**
 * @param {string} type The name of the icon file in ./app/assets/icons
 * @param {string} className Allows for custom styling to be passed to the component.
 * @param {string} height Determines the height of icon
 * @param {string} width Determines the width of icon
 * @param {string} focusable Determines whether an icon can be focused on - Icon in a button VS a standalone icon
 */
const propTypes = {
  classes: object.isRequired,
  type: func.isRequired,
  className: string,
  height: string,
  width: string,
  focusable: string,
};

const defaultProps = {
  className: null,
  height: '18px',
  width: '18px',
  focusable: 'false', // Stop SVGs from gaining focus in ie11
};

const iconStyles = {
  icon: {},
};

/**
 * A component that renders svg icon files
 *
 */
const Icon = ({ classes, type, className, height, width, focusable }) => (
  <svg
    className={classnames(classes.icon, className)}
    height={height}
    width={width}
    viewBox={type.viewBox}
    focusable={focusable}
    tabIndex={focusable === 'false' ? -1 : 0}
    aria-hidden={focusable === 'false'}
    aria-disabled={focusable === 'false'} // For VoiceOver to not call out the image.
  >
    <use xlinkHref={`#${type.id}`} />
  </svg>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withStyles(iconStyles)(Icon);
