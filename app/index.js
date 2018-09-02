
import 'purecss/build/pure.css';


import React from 'react';
import { render } from 'react-dom';


import {Router, browserHistory} from 'react-router-3';

import routes from './routes';
import stores from './stores';
import {Provider} from 'mobx-react';


render(
  <Provider contacts={stores.contacts} >
	<Router routes={routes} history={browserHistory} />
	</Provider>,
	document.getElementById('app')
);
