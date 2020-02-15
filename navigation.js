import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Login from './App';
import Signup from './screen/Signup'
import Verifica from './screen/Verification'
import Home from './screen/HomeScreen'

const AppNavigator = createStackNavigator(
    {
    Login,
    Signup,
    Verifica,
    Home,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
      headerForceInset: { top: 'never', bottom: 'never' },
    },
  },
);
export default createAppContainer(AppNavigator)
