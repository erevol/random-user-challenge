import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';
import UserCard from '../UserCard/UserCard';

const UserList = ({ group, onClick }) => {

  return (
    <StyledContainer>
      {
        group.map((item) =>
          <UserCard
            key={item.email}
            item={item}
            onClick={onClick}
          />)
      }
    </StyledContainer>
  );
};

UserList.propTypes = {
  group: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserList;
