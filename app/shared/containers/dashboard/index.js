import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Profile from './Profile'
import Setting from './Setting'

class Dashboard extends Component {
  static propTypes = {
    match: PropTypes.object
  }
  render() {
    const { match } = this.props
    const getDashboard = () => {
      return (
        <div className="dashboard">
          <h1 align="center">Developer Portal</h1>
          <Link to={`${match.url}`}>Dashboard</Link>
          <Link to={`${match.url}/setting`}>Setting</Link>
          <Switch>
            <Route exact path={`${match.url}/`} component={Profile}/>
            <Route exact path={`${match.url}/setting`} component={Setting}/>
          </Switch>
        </div>
      )
    }
    return (
      <div>{ getDashboard()}</div>
    )
  }
}

export default Dashboard
