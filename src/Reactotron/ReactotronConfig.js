import Reactotron, { trackGlobalErrors, asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

const reactotron = Reactotron.configure({ name: 'Training' })
  .use(asyncStorage(), reactotronRedux())
  .connect();

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'test', host: scriptHostname })
    .use(asyncStorage(), trackGlobalErrors())
    .use(reactotronRedux({ onRestore: state => state }))
    .connect();
    console.tron = Reactotron; //eslint-disable-line
}

export default reactotron;
