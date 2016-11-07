import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Map, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DirectoryMapInner = ({ bounds, markers, ...rest }) =>
  <Map
    bounds={[[bounds.get('top'), bounds.get('left')], [bounds.get('bottom'), bounds.get('right')]]}
    {...rest}
  >
    <TileLayer
      url='//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    {markers.map((marker, i) =>
      <Marker key={i} position={marker} />
    )}
  </Map>
;

class DirectoryMap extends Component {
  static propTypes = {
    directory: PropTypes.object,
    findDirectory: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
    mapHeight: PropTypes.number.isRequired,
  }

  componentDidMount() {
    if (!this.props.directory) {
      this.props.findDirectory(this.props.slug);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.props.findDirectory(this.props.slug);
    }
  }

  render() {
    const { directory } = this.props;

    if (!directory) {
      return null;
    }

    const markers = directory.children
      .filter(child => !!child.position)
      .map(child => [child.position.get('lat'), child.position.get('lng')]);


    return (
      <div>
        <Helmet title={`${directory.name} - World Map`} />

        <DirectoryMapInner
          bounds={directory.getPositionBounds()}
          markers={markers}
          style={{ height: this.props.mapHeight }}
        />
      </div>
    );
  }
}

export default DirectoryMap;
