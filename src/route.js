import React from 'react'
import { Route, Switch, BrowseRouter, Router } from 'react-router'
import App from "./App.js"
import Story from "./storyList.js"

const routes = [
    {
        path:'/stories',
        main: Story
    },
]

function Route () {
    return (
        <div className="Test">
            <Router>
                <Switch>
                    {
                        routes.map((route, index) => {
                            <Route path={ route.path } component={ route.main }/>
                        })
                    }
                </Switch>
                <Switch>
                    <Route exact path="/" component={ App } />
                    <Route path="/story" component={ Story } />
                </Switch>
            </Router>
        </div>
    )
}

export default Route;
