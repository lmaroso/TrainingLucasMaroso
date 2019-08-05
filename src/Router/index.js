import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Todo from '../components/Todo';
import DummyScreen from '../components/DummyScreen';

import Routes from './routes';

const tabNavigator = createBottomTabNavigator(
  {
    [Routes.Todo]: {
      screen: Todo
    },
    [Routes.DummyScreen]: {
      screen: DummyScreen
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
