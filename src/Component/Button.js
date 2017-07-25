import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Button.css';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      active,
      className,
      primary,
      secondary,
      large,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = cn(
      className,
      'OpiumBtn',
      primary && 'OpiumBtn--primary',
      secondary && 'OpiumBtn--secondary',
      large && 'OpiumBtn--large',
      { active, disabled: this.props.disabled }
    );

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={classes}
        onClick={this.onClick}
      />
    );
  }
}

Button.defaultProps = {
  primary: false,
  secondary: false,
  large: false,
  tag: 'button',
  disabled: false,
  active: false,
  onClick: null,
  children: null,
  className: '',
}

Button.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  large: PropTypes.bool,
  secondary: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
