import React, { Component } from 'react';

export default class ColorGallery extends React.Component {
  render() {
    return (
      <div className="cg">
        <div className="cg-active-content" />
        <ul>
          <li className="cg-option" />
          <li className="cg-option" />
          <li className="cg-option" />
          <li className="cg-option" />
        </ul>
      </div>
    );
  }
}