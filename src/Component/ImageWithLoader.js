import React, { Component, PropTypes } from 'react';
import Loader from './Loader';
import { loadImage } from '../ImageLoader';

class ImageWithLoader extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
    loaderProps: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.componentMounted = true;

    loadImage(this.props.src)
      .then(() => {
        if (this.componentMounted) {
          this.setState({ isLoaded: true });
        }

        if (this.props.onLoad) {
          this.props.onLoad();
        }
      })
    ;
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }

  render() {
    const { loaderProps } = this.props;

    if (this.state.isLoaded) {
      if (!this.props.children) {
        return null;
      }

      return this.props.children;
    }

    return <div>
       <Loader color="#594F3F" {...loaderProps} />
    </div>
  }
}

export default ImageWithLoader;
