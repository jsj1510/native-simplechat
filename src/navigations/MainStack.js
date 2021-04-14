import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Channel, ChannelCreation } from '../screens';
import MainTab from './MainTab';

const Stack = createStackNavigator();

function MainStack() {
    const theme = useContext(ThemeContext);

    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTitle: 'center',
                headerTintColor: theme.headerTintColor,
                cardStyle: { backgroundColor: theme.backgroundColor},
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name="Main" component={MainTab} />
            <Stack.Screen name="Channel creation" component={ChannelCreation} />
            <Stack.Screen name="Channel" component={Channel} />
        </Stack.Navigator>
    )
}

export default MainStack
