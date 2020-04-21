import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledImage, StyledLabel } from './styles';

const UserCard = ({ name, image }) => {
  return (
    <StyledContainer>
      <StyledImage image={image}/>
      <StyledLabel>{name}</StyledLabel>
    </StyledContainer>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserCard;