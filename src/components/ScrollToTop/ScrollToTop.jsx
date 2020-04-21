import React from 'react';
import {
  StyledScrollToTop,
  StyledScrollToTopText,
} from './styles';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledScrollToTop onClick={scrollToTop}>
      <StyledScrollToTopText>
        Scroll to top
        <svg viewBox="0 0 10 7">
          <path d="M9.927 5.393L5.859
          1.657v-.001L4.897.772l-.001.001-.001-.001-.963.884.002.001-4.07
          3.736.963.884 4.069-3.736 4.068 3.736.963-.884z"/>
        </svg>
      </StyledScrollToTopText>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
