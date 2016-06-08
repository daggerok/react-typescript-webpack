/**
 * Created by mak on 6/8/16.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hi } from './index/main';

let app: HTMLElement = document.getElementById('tsx-app');

ReactDOM.render(
  <Hi compiler="TypeScript" framework="React"/>, app
);
