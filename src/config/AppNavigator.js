import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import {Main, Settings} from '../screens';

const AppNavigator = createStackNavigator(
  {
    Main: {screen: Main},
    Settings: {screen: Settings},
  },
  {
    initialRouteName: 'Main',
  }
);

export default createAppContainer(AppNavigator);
