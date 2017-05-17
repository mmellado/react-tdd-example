import React from 'react';
import ColorGallery from '../components/ColorGallery.js';

describe('<ColorGallery />', () => {
  it('should create a div for the active color', () => {
    const wrapper = render(
      <ColorGallery colors={['blue', 'green', 'red', 'yellow']} />
    );
    expect(wrapper.find('.cg-active-content')).to.have.tagName('div');
  });

  it('should create an li for every color', () => {
    const wrapper = render(
      <ColorGallery colors={['blue', 'green', 'red', 'yellow']} />
    );
    expect(wrapper.find('li.cg-option')).to.have.length(4);
  });

  it('should set the first color as the color for the big square', () => {
    const wrapper = render(
      <ColorGallery colors={['blue', 'green', 'red', 'yellow']} />
    );
    expect(wrapper.find('.cg-active-content')).to.have.style('background', 'blue');
  });

  it('should use the state to handle the active color', () => {
    const wrapper = shallow(
      <ColorGallery colors={['blue', 'green', 'red', 'yellow']} />
    );

    expect(wrapper.state('active')).to.eql('blue');
  });

  it('should change the color of the big box when clicking any color tile', () => {
    const wrapper = shallow(
      <ColorGallery colors={['blue', 'green', 'red', 'yellow']} />
    );

    expect(wrapper.state('active')).to.eql('blue');
    wrapper.find('ul').childAt(1).simulate('click');
    expect(wrapper.state('active')).to.eql('green');
  });

  it('should set a white border on the active color tile', () => {
    const wrapper = shallow(
      <ColorGallery colors={['blue', 'green', 'red', 'yellow']} />
    );

    expect(wrapper.find('ul').childAt(0)).to.have.style('border', '3px solid white');
    expect(wrapper.find('ul').childAt(1)).not.to.have.style('border', '3px solid white');
    wrapper.find('ul').childAt(1).simulate('click');
    expect(wrapper.find('ul').childAt(1)).to.have.style('border', '3px solid white');
    expect(wrapper.find('ul').childAt(0)).not.to.have.style('border', '3px solid white');
  });
});


