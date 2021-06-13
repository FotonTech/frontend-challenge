import React from 'react';
import { Container } from './styles';

import Tabbar from '../../components/Tabbar';

const Profile: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Profile Page</h1>
      </Container>
      <Tabbar />
    </>
  );
};

export default Profile;
