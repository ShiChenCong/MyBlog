import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import Routes from './route/route.js';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore.js';
import {ConnectedRouter} from 'react-router-redux'

const store = configureStore();
const history = createHistory();

class App extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<Routes  />
					</ConnectedRouter>
				</Provider>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>, document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}
