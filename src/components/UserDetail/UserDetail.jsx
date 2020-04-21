import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledProfileImage,
  StyledRoundImage,
  StyledLabel,
  StyledFullnameLabel,
  StyledGroupLabel,
  StyledProfileImageContainer,
  StyledProfileDetailsContainer,
} from './styles';

const UserDetail = ({ user }) => {

  const { large, medium } = user.picture;
  const fullName = user.name.first + ' ' + user.name.last;

  return (
    <StyledContainer>
      <StyledProfileImageContainer>
        <StyledProfileImage largeImg={large} />
        <StyledRoundImage mediumImg={medium}/>
        <StyledLabel>
          <StyledFullnameLabel>{fullName}</StyledFullnameLabel>
          <StyledGroupLabel>{user.group}</StyledGroupLabel>
        </StyledLabel>
      </StyledProfileImageContainer>
      <StyledProfileDetailsContainer>
        <h5>Short Bio</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolore?</p>
        <h5>The direction of the profession</h5>
        <p>Lorem, ipsum.</p>
        <h5>Email Address</h5>
        <p>{user.email}</p>
        <h5>Phone Number</h5>
        <p>{user.phone}</p>
      </StyledProfileDetailsContainer>
    </StyledContainer>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetail;
