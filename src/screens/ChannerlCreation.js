import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

function ChannerlCreation() {
    return (
        <Container>
            <Text style={{ fontSize:24 }}>Chennel Creation</Text>
            <Button title="Channel" onPress={() => NavigationContainer.navigate('Channel')} />
        </Container>
    )
}

export default ChannerlCreation;
