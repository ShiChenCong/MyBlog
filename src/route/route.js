import React from 'react'
import { Route, Link, Switch,  BrowserRouter as Router, Redirect} from 'react-router-dom'
import IndexPage from '../container/IndexPage'


const ParamsExample = (store, history) => (
    <Router>
    	<Switch>
            <Route exact path="/" render={() => (
                 <Redirect to="/index"/>
             )}/>
            <Route  path='/index' component={ IndexPage }/>
        </Switch>
    </Router>
)

export default ParamsExample
