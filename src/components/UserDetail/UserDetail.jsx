import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';

const UserDetail = ({ user }) => {

  return (
    <StyledContainer>
      {user.email}
    </StyledContainer>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetail;