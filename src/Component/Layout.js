import { Component, PropTypes } from 'react';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isLogged: PropTypes.bool.isRequired,
    fetchMe: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (!this.props.isLogged) {
      this.props.fetchMe();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isLogged && !prevProps.isLogged) {
      this.props.fetchMe();
    }
  }

  render() {
    return this.props.children;
  }
}
