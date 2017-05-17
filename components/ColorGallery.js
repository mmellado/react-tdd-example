import React, { Component } from 'react';

export default class ColorGallery extends React.Component {
  render() {
    return (
      <div className="cg">
        <div className="cg-active-content" style={{background: this.props.colors[0]}} />
        <ul>
          {
            this.props.colors.map(color => <li className="cg-option" key={color} style={{background: color}} />)
          }
        </ul>
      </div>
    );
  }
}