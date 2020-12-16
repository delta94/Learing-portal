import React from 'react'
import Course from './Course'
import GroupCirculum from './Circulum/GroupCirculum'
import { Route, Switch } from 'react-router-dom'
import GroupCourse from './Course/GroupCourse'
import Page404 from 'modules/404page/component/404'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={`/learning-portal/course/:id`}>
          <GroupCourse />
        </Route>
        <Route path={`/learning-portal/circulum`}>
          <GroupCirculum />
        </Route>
        <Route path="/learning-portal/course">
          <GroupCourse />
        </Route>
        <Route exact path="/learning-portal">
          <Course />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  )
}