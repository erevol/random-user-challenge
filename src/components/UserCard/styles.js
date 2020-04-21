import styled from '@emotion/styled';
import { fonts, colors } from '../../common';

const StyledContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px 0px 0px 1px ${colors.citylights};
    transition: all 0.5s ease-in-out;
    box-sizing: border-box;
    border-radius: 48px;
  }
`;

const StyledImage = styled.img`
  margin: 10px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-size: cover;
  background-image: url(${props => props.image || "https://randomuser.me/api/portraits/men/1.jpg"});
`;

const StyledLabel = styled.p`
  font-family: ${fonts.primary};
  font-weight: bold;
`;

export {
  StyledContainer,
  StyledImage,
  StyledLabel,
};
