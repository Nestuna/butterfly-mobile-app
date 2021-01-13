// /Navigation/ConnexionStackNavigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../Components/Login';
import ForgotLogin from '../Components/ForgotLogin';
import MainNavigation from '../Navigation/MainNavigation';
import Home from '../Components/Home.js';
import ConversationItem from '../Components/ConversationItem.js'


// NAVIGATION CONNEXION ----------------
//// SCREENS
function LoginScreen({navigation}) {
	return (
		<Login navigation = {navigation} />
	);
}
function ForgotLoginScreen({navigation}) {
	return (
		<ForgotLogin navigation = {navigation} />
	);
}
function MainNavigationScreen({navigation}) {
	return (
		<MainNavigation navigation = {navigation} />
	);
}
function HomeScreen({navigation}) {
	return (
		<Home navigation = {navigation} />
	);
}


// STACK ---------------------------------
const Stack = createStackNavigator();
export default class InitNavigation extends React.Component {
    render() {
        return(
			<Stack.Navigator
				screenOptions = {
					{
						headerTintColor: 'white',
						headerLeftContainerStyle: {paddingLeft: 10, color: 'white'}
					}
				}
				initialRouteName = 'login'
			>
				<Stack.Screen
					name = 'login'
					title = "Login"
					component = {LoginScreen}
					options = {
						({navigation}) => (
							{
								headerShown: false,
							}
						)
					}
				/>
				<Stack.Screen
					name = 'forgot_login'
					component = {ForgotLoginScreen}
					options = {
						({navigation}) => (
							{
								title: null,
								headerStyle: {
									backgroundColor : 'transparent',
								},
								headerTransparent: true
							}
						)
					}
				/>
				<Stack.Screen
					name = 'main_navigation'
					component = {MainNavigationScreen}
					options = {({navigation}) => ({headerShown: false})}
				/>
				<Stack.Screen
					name = 'home'
					title = "Home"
					component = {Home}
					options = {
						({navigation}) => (
							{
								headerShown: false,
							}
						)
					}
				/>

			</Stack.Navigator>
		);
    }
}
