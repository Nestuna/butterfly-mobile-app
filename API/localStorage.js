import * as SecureStore from 'expo-secure-store';

export async function checkLogin(loginInput, passwordInput) {
    const login = await SecureStore.getItemAsync('login');
    const password = await SecureStore.getItemAsync('password');
    console.log('Login :', login,'; Password :', password)
    return (loginInput === login && passwordInput === password);
}
<<<<<<< HEAD

=======
>>>>>>> vincent-branch
