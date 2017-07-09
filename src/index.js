/* React */
import React    from 'react';
import ReactDOM from 'react-dom';

/* CSS */
import './css/index.css';

/* JS */
import App                   from './js/App';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
