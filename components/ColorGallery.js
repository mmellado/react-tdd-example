import React, { Component } from 'react';

export default class ColorGallery extends React.Component {
  state = {
    active: this.props.colors[0],
  }

  updateActiveColor = (color) => {
    this.setState({
      active: color,
    })
  }

  render() {
    const { active } = this.state;

    return (
      <div className="cg">
        <div className="cg-active-content" style={{background: this.state.active}} />
        <ul>
          {
            this.props.colors.map(color => (
              <li
                className="cg-option"
                key={color}
                style={{
                  background: color,
                  border: active === color ? '3px solid white' : null,
                }}
                onClick={() => this.updateActiveColor(color)}
              />))
          }
        </ul>
      </div>
    );
  }
}