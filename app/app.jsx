import React from 'react';
import ReactDOM from 'react-dom';

import App from './components';

import style from './style';


ReactDOM.render(
	<App className={style.content}/>,
	document.getElementById('app')
);
