import React from 'react'
import { Route, Link, Switch,  BrowserRouter as Router, Redirect} from 'react-router-dom'
import IndexPage from '../container/IndexPage'
import EditorPage from '../container/EditorPage'

const ParamsExample = (store, history) => (
    <Router>
    	<Switch>
            <Route exact path="/" render={() => (
                 <Redirect to="/editor"/>
             )}/>
            <Route  path='/index' component={ IndexPage }/>
            <Route  path='/editor' component={ EditorPage }/>
        </Switch>
    </Router>
)

export default ParamsExample
