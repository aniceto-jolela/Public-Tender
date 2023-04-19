import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../src/admin/profile';
import Companies from '../src/admin/companies';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Companies"
          component={Companies}
          options={{title: 'Companies'}}
        />
        <Stack.Screen name="Profile" options={{title: 'Perfil'}} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;