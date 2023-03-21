import { CCol } from '@coreui/react'
import BottomInfo from '../utils/BottomInfo'
import Navbar from '../utils/Navbar'
import JobsDescription from '../utils/JobsDescription'
import { useLocation } from 'react-router-dom'
import React from 'react';
import RouteGuard from './RouteGuard';

const Apply = () => {
  const { state } = useLocation();
  if (localStorage.getItem("token") == undefined)
  return (<div>
    <RouteGuard/>
  </div>)
  else
  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }}>
        <Navbar isLoggedIn={true} />
        <CCol style={{ height: '74vh', width: '100vw', float: 'left' }}>
          <div
            style={{
              backgroundColor: '#9DDAF6',
              height: '22vh',
              position: 'absolute',
              width: '100vw',
              zIndex: '-1',
            }}
          ></div>
          <JobsDescription job={state.job} />
        </CCol>
        <BottomInfo />
      </div>
    </>
  )
}

export default Apply
