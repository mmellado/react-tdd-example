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
});


