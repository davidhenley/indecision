import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import App from './components/App';

render(<App />, document.querySelector('#root'))