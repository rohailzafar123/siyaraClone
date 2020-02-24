import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Login from './App';
import Signup from './screen/Signup'
import Verifica from './screen/Verification'
import Home from './screen/HomeScreen'
import Map from './screen/Map'
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
// const Drawer = createDrawerNavigator(
//   {
//     Map
//   },
//   {
//     headerModer: 'none',

//   },
// );
export default createAppContainer(AppNavigator)
