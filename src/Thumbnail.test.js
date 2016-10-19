import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnail from './Thumbnail';

it('renders without crashing', () => {
  var  div = document.createElement('div');
  ReactDOM.render(
    <Thumbnail
      image="http://demo.opium.sitioweb.fr/2909-vallon-moy-res-jpg/thumbs/200-200"
      title="Alps"
    />,
    div
  );
});
