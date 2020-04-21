import styled from '@emotion/styled';
import { colors, fonts, devices } from '../../common';

const StyledScrollToTop = styled.button`
  cursor: pointer;
  text-decoration: underline;
  width: 100%;
  font-weight: bold;
  margin: 30px 0;

  @media(min-width: ${devices.tablet}) {
    display: none;
  }
`;

const StyledScrollToTopText = styled.span`
  display: inline-block;
  font-family: ${fonts.primary};
  font-size: 11px;
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
  cursor: pointer;
  user-select: none;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translate(-50%, 0%);
    }
    40% {
      transform: translate(-50%, -20%);
    }
    60% {
      transform: translate(-50%, -10%);
    }
  }
  svg {
    display: inline-block;
    width: 9px;
    height: 7px;
    position: relative;
    margin-left: 11px;
    animation: bounce 2s infinite;
    transition: all 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000);
  }
  @media(min-width: ${devices.mobile}) {
    &:after {
      font-size: 25px;
      margin-left: 20px;
    }
  }
  &:hover {
    color: ${colors.oceanBlue};
    svg {
      fill: ${colors.oceanBlue};
    }
  }
`;

export {
  StyledScrollToTop,
  StyledScrollToTopText,
};
