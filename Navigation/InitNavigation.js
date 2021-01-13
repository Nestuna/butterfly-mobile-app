// /Navigation/ConnexionStackNavigation.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../Components/Login';
import CreateLogin from '../Components/CreateLogin'
import ForgotLogin from '../Components/ForgotLogin';
import Conversation from '../Components/Conversation';
import CreateConversation from '../Components/CreateConversation'
import Home from '../Components/Home.js';



// NAVIGATION CONNEXION ----------------
//// SCREENS
function LoginScreen({navigation}) {
	return (
		<Login navigation = {navigation} />
	);
}
function CreateLoginScreen({navigation}) {
	return (
		<CreateLogin navigation= {navigation} />
	);
}

function ForgotLoginScreen({navigation}) {
	return (
		<ForgotLogin navigation = {navigation} />
	);
}

function ConversationScreen({navigation}) {
	return (
		<Conversation navigation = {navigation} />
	);
}

function CreateConversationScreen({navigation}) {
	return (
		<CreateConversation navigation = {navigation} />
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
						headerLeftContainerStyle: {paddingLeft: 10, color: 'white'},
						headerBackTitleVisible: false
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
								title: 'Butterfly',
								headerStyle: {
									backgroundColor : '#9299A3',
								},
								headerTitleAlign: 'center',
								headerTitleStyle: {
									fontSize: 30
								}
								// headerTransparent: true
							}
						)
					}
				/>
				<Stack.Screen 
					name = 'create_login'
					component = {CreateLoginScreen}
					options = { 
						({navigation}) => (
							{
								title: 'Créer un compte',
								headerStyle: {
									backgroundColor : '#9299A3',
								},
								headerTitleAlign: 'center'
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
					name = 'conversation'
					component = {ConversationScreen}
					options = { 
						({navigation}) => (
							{
								title: '#456788',
								headerStyle: {
									backgroundColor : '#9299A3',
								},
								headerTitleAlign: 'center',
							}
						)
					}
				/>
				<Stack.Screen 
					name = 'create_conversation'
					component = {CreateConversationScreen}
					options = { 
						({navigation}) => (
							{
								title: 'Créer une conversation',
								headerStyle: {
									backgroundColor : '#9299A3',
								},
								headerTitleAlign: 'center',
							}
						)
					}
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
