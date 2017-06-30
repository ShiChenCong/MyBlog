import React from 'react'
import { Route, Link, Switch,  BrowserRouter as Router, Redirect} from 'react-router-dom'
import IndexPage from '../container/IndexPage'
import EditorPage from '../container/EditorPage'
import BlogPage from '../container/BlogPage'
const ParamsExample = (store, history) => (
    <Router>
    	<Switch>
            <Route exact path="/" render={() => (
                 <Redirect to="/index"/>
             )}/>
            <Route  path='/index' component={ IndexPage }/>
            <Route  path='/blog' component={ BlogPage }/>
            <Route  path='/editor' component={ EditorPage }/>
        </Switch>
    </Router>
)

export default ParamsExample
