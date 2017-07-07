import React from 'react'
import { Route, Link, Switch,  BrowserRouter as Router, Redirect} from 'react-router-dom'
import IndexPage from '../container/IndexPage/IndexPage'
import EditorPage from '../container/EditorPage/EditorPage'
import { Blog } from '../container/BlogPage'
import NavPage from '../container/NavPage/NavPage.js'

const Routes = (store, history) => (
    <Router>
        <Switch>
                <Route exact path='/' component={ IndexPage}/>
                <NavPage>
                    <Route  path='/blog' component={Blog}/>
                    <Route  path='/editor' component={EditorPage}/>
                </NavPage>
        </Switch>
    </Router>
)

export default Routes
