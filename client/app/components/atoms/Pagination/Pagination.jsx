import React from 'react';
import {
  object,
  arrayOf,
  shape,
  bool,
  oneOfType,
  func,
  number,
  oneOf,
} from 'prop-types';
import classnames from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import paginationStyles from './Pagination.style';

const propTypes = {
  classes: object.isRequired,
  pages: arrayOf(
    shape({
      active: bool,
      disabled: bool,
      text: oneOfType([number, oneOf(['PREV', 'NEXT', '...'])]).isRequired,
      onClick: func,
    })
  ).isRequired,
  color: oneOf(['primary', 'info', 'success', 'warning', 'error']),
};

const defaultProps = {
  color: 'primary',
};

/* eslint-disable react/no-array-index-key, no-console */
const Pagination = ({ ...props }) => {
  const { classes, pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classnames({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => console.log(`you've clicked ${prop.text}`)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

Pagination.defaultProps = defaultProps;
Pagination.propTypes = propTypes;

export default withStyles(paginationStyles)(Pagination);
