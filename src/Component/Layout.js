import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.element,
    isLogged: PropTypes.bool.isRequired,
    fetchMe: PropTypes.func.isRequired,
    isFetchingMe: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    if (!this.props.isLogged) {
      this.props.fetchMe();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLogged && !prevProps.isLogged && !prevProps.isFetchingMe) {
      this.props.fetchMe();
    }
  }

  render() {
    return this.props.children || null;
  }
}
