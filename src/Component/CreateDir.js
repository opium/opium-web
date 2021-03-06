import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './Button';
import { createDir } from '../Action/DirectoryAction';

class CreateDir extends PureComponent {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.input = null;
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.onCreateDir(this.input.value, this.props.directorySlug);
  }

  render() {
    const { directorySlug } = this.props;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" ref={(input) => this.input = input} required />
        <div>
          <Button
            secondary
            tag={Link}
            to={`/${directorySlug && `${directorySlug}/`}`}
          >
            Back
          </Button>

          <Button type="submit" primary>
            Create directory
          </Button>
        </div>
      </form>
    )
  }
}

CreateDir.propTypes = {
  onCreateDir: PropTypes.func.isRequired,
  directorySlug: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  directorySlug: ownProps.match.params.directorySlug || '',
});

const mapDispatchToProps = {
  onCreateDir: createDir,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDir);
