/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";

import './index.css';
import Redactor from './pages/redactor/redactor';
import Homepage from './pages/homepage/homepage';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}
render(() => (
	<Router>
		<Route path='/' component={Homepage}/>
		<Route path='/redactor' component={Redactor}/>
	</Router>
), root);
