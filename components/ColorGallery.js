import React, { Component } from 'react';

export default class ColorGallery extends React.Component {
  render() {
    return (
      <div className="cg">
        <div className="cg-active-content" style={{background: 'blue'}} />
        <ul>
          {
            this.props.colors.map(color => <li className="cg-option" key={color} style={{background: color}} />)
          }
        </ul>
      </div>
    );
  }
}