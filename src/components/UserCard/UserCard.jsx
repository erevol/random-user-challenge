import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledImage, StyledLabel } from './styles';

const UserCard = ({ item, onClick }) => {
  return (
    <StyledContainer onClick={() => onClick(item)}>
      <StyledImage image={item.picture.thumbnail}/>
      <StyledLabel>{item.name.first + ' ' + item.name.last}</StyledLabel>
    </StyledContainer>
  );
};

UserCard.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserCard;
