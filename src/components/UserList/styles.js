import styled from '@emotion/styled';
import { devices } from '../../common';

const StyledContainer = styled.div`
  display: block;
  margin: 20px 0;
  @media(min-width: ${devices.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export {
  StyledContainer,
};
