/** @format */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../screens/Login';
import { Signup } from '../screens/Signup';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarActiveTintColor: '#256eff',
					tabBarInactiveTintColor: '#333333',
				})}>
				<Tab.Screen name='Login' component={Login} />
				<Tab.Screen name='Signup' component={Signup} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
