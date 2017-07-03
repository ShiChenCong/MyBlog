import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less'
import ParamsExample from './route/route.js';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore.js';
import {ConnectedRouter} from 'react-router-redux'
import Side from './component/Side/side.js'
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

const store = configureStore();
const history = createHistory();

class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<Layout style={{ height: '100vh' }}>
					<Sider>
						<Side />
					</Sider>
					<Layout>
						<Provider store={store}>
							<ConnectedRouter history={history}>
								{ParamsExample()}
							</ConnectedRouter>
						</Provider>
					</Layout>
				</Layout>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>, document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}
