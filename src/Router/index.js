import { createStackNavigator, createAppContainer } from 'react-navigation';

import DummyScreen from '../components/DummyScreen';
import Todo from '../components/Todo';

import Routes from './Routes';

const screens = createStackNavigator(
  /* {
    [Routes.home]: {
      screen: 
    }
  } */ {
    home: Todo,
    test: DummyScreen
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Todo List',
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#87ceeb'
      } // , headerLayoutPreset: 'center' NO FUNCIONA
    }
  }
);

export default /* screens; // */ createAppContainer(screens);
