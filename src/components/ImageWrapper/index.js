import React from 'react';
import PropTypes from 'prop-types';

const ImageWrapper = props => {
  const { url, alt, width, height } = props;
  const size = {
    width: width || 'auto',
    height: height || 'auto',
  };
  return (
    <div className="image-wrapper" style={size}>
      <img src={url} alt={alt || ''} width="100%" />
    </div>
  );
};

ImageWrapper.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
