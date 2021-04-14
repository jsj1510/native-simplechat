import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

function ChannelList({ navigation }) {
    return (
        <Container>
            <Text style={{ fontSize:24 }}>Channel List</Text>
            <Button
                title="chnnel creation"
                onPress={() => navigation.navigate('Channel creation')}
            />
        </Container>
    )
}

export default ChannelList
