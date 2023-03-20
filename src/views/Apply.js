import { CCol } from '@coreui/react'
import BottomInfo from '../utils/BottomInfo'
import Navbar from '../utils/Navbar'
import JobsDescription from '../utils/JobsDescription'

const Apply = () => {
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
          <JobsDescription />
          {/* <div
          style={{
            backgroundColor: "white",
            height: "50vh",
          }}
        ></div> */}
        </CCol>
        <BottomInfo />
      </div>
    </>
  )
}

export default Apply
