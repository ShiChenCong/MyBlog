import React from 'react'
import { Route, Link, Switch,  BrowserRouter as Router, Redirect} from 'react-router-dom'
import IndexPage from '../container/IndexPage/IndexPage'
import EditorPage from '../container/EditorPage/EditorPage'
import { Blog } from '../container/BlogPage'
import NavPage from '../container/NavPage/NavPage.js'
import BlogDetail from '../container/BlogDetailPage/BlogDetail'

const Routes = (store, history) => (

        <Switch>
                <Route exact path='/' component={ IndexPage}/>
                <NavPage>
                    <Route  path='/blog' component={Blog}/>
                    <Route  path='/editor' component={EditorPage}/>
                    <Route  path='/detail/:id' component={BlogDetail}/>
                </NavPage>
        </Switch>

)

export default Routes
