import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import './Loader.css';

const InsideDiv = ({ color }) =>
  color ?
    <div style={{ borderColor: color }} /> :
    <div />
;

class Loader extends Component {
  static propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { className, color, ...props } = this.props;

    const classes = cn('loader', className);

    return (
      <div className={classes} {...props}>
        <div className="ball-scale-ripple-multiple">
          <InsideDiv color={color} />
          <InsideDiv color={color} />
          <InsideDiv color={color} />
        </div>
      </div>
    );
  }
}

export default Loader;