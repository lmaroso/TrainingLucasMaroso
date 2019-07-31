import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Todo from '../screens/Todo';
// import DummyScreen from '../screens/DummyScreen';
import Books from '../screens/Books';

import Routes from './routes';

const tabNavigator = createBottomTabNavigator(
  {
    [Routes.Todo]: {
      screen: Todo
    },
    [Routes.Books /* DummyScreen */]: {
      screen: Books // DummyScreen
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 18
      },
      style: {
        paddingBottom: 10
      },
      pressColor: 'blue'
    },
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.routes[navigation.state.index].routeName}`
    })
  }
);

const stackNavigator = createStackNavigator(
  {
    Home: tabNavigator
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#87ceeb'
      }
    }
  }
);

export default createAppContainer(stackNavigator);
