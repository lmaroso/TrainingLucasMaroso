import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Todo from '../screens/Todo';
import Books from '../screens/Books';

import Routes from './routes';

const tabNavigator = createBottomTabNavigator(
  {
    [Routes.Todo]: {
      screen: Todo
    },
    [Routes.Books]: {
      screen: Books
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
    [Routes.TabNavigator]: tabNavigator
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
