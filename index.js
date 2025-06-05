if (typeof global.HTMLElement === 'undefined') {
  global.HTMLElement = class {};
}
if (typeof global.document === 'undefined') {
  global.document = {
    createElement: () => ({}),
  };
}

import './wdyr.js';

import 'node-libs-react-native/globals.js';

import { LogBox } from 'react-native';

import { registerRootComponent } from 'expo';

import App from './App';

LogBox.ignoreLogs([
  "The provided value 'ms-stream' is not a valid 'responseType'.",
  "The provided value 'moz-chunked-arraybuffer' is not a valid 'responseType'.",
  '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.',
  '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
  /Error: Failed to start the transport 'WebSockets': Error: WebSocket failed to connect\. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets\. If you have multiple servers check that sticky sessions are enabled\./,
]);




// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// // registerRootComponent happens in "expo-router/entry"
// import 'expo-router/entry'
