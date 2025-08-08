import React from 'react';
import { AppRegistry } from 'react-native';
import { createRoot } from 'react-dom/client';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

const rootTag = document.getElementById('root');
const { element } = AppRegistry.getApplication(appName);
const root = createRoot(rootTag);
root.render(element);
