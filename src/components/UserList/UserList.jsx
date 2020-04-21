import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';
import UserCard from '../UserCard/UserCard';

const UserList = ({ results }) => {

  return (
    <StyledContainer>
      {
        results.map((item) =>
          <UserCard
            key={item.email}
            image={item.picture.thumbnail}
            name={item.name.first + ' ' + item.name.last}
          />)
      }
    </StyledContainer>
  );
};

UserList.propTypes = {
  results: PropTypes.array.isRequired,
};

export default UserList;