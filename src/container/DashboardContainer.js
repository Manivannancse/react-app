import React from 'react'
import Dashboard from '../component/dashboard'
import CourseList from '../component/courseList'
import TyclLayout from '../component/layout'
import { Row, Col } from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const DashboardContainer = () => {
  const style = { overflow: 'hidden' };

  return (
    <Router>
      <TyclLayout>
        <Switch>
          <Route path="/enroll-course">
            <h3>Course</h3>
          </Route>
          <Route path="/profile">
            <h3>Profile</h3>
          </Route>
          <Route path="/">
            <>
              <Dashboard />
              <Row gutter={16}>
                {
                  [1, 2, 3, 4].map((key) => (
                    <Col key={key} span={6} className="gutter-row">
                      <div style={style} >
                        <CourseList course={key} />
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </>
          </Route>
        </Switch>
      </TyclLayout>
    </Router>
  )
}

export default DashboardContainer; 