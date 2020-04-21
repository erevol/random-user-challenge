/* eslint-disable max-len */
import styled from '@emotion/styled';
import { colors, fonts } from '../../common';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: flex-end;
  align-items: center;
  padding: 35px;
  color: ${colors.white};
`;

const StyledFullnameLabel = styled.h3`
  font-family: ${fonts.primary};
`;

const StyledGroupLabel = styled.p`
  font-family: ${fonts.primary};
`;

const StyledProfileImageContainer = styled.div`
  height: 350px;
  overflow: hidden;
  position:relative;
`;

const StyledProfileDetailsContainer = styled.div`
  display: block;
  height: 300px;
  border-left: 1px solid ${colors.citylights};
  padding: 40px;

  h5, p {
    font-family: ${fonts.primary};
    line-height: 1;
  };

  p {
    font-size: 0.8em;
  }
`;

const StyledProfileImage = styled.div`
  position: absolute;
  z-index: -1;
  left:-15px;
  right:-15px;
  top:-15px;
  bottom:-15px;
  background-size: cover;
  filter: blur(5px) brightness(0.75);
  background-image: url(${props => props.largeImg || "https://randomuser.me/api/portraits/men/1.jpg"});
`;

const StyledRoundImage = styled.img`
  position: absolute;
  top: 75px;
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-size: cover;
  border: 3px solid ${colors.white};
  background-image: url(${props => props.mediumImg || "https://randomuser.me/api/portraits/men/1.jpg"});
`;

export {
  StyledContainer,
  StyledProfileImage,
  StyledRoundImage,
  StyledLabel,
  StyledFullnameLabel,
  StyledGroupLabel,
  StyledProfileImageContainer,
  StyledProfileDetailsContainer,
};
