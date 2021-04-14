import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

function Profile() {
    return (
        <Container>
            <Text style={{fontSize :24}}> profile </Text>
           
        </Container>
    )
}

export default Profile
