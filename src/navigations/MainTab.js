import React, { useContext, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, ChannelList } from '../screens';

const Tab = createBottomTabNavigator();

// const TabBarIcon = ({ focused, name }) => {
//   const theme = useContext(ThemeContext);
//   return (
//     <MaterialIcons
//       name={name}
//       size={26}
//       color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
//     />
//   );
// };

const MainTab = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Channels"
        component={ChannelList}
     
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MainTab;