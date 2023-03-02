import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Navbar from './utils/Navbar'
import { CButton, CCol, CContainer, CRow } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
  return (
    <div className="App">
    <Navbar />
    <div style={{height: '50em'}}>
    <CCol style={{backgroundColor: '#a8d5e5', height: '12em'}}>
      </CCol>
    <CCol style={{backgroundColor: 'white', height: '30em'}}>
      </CCol>
      <CCol style={{backgroundColor: '#ECEEEE', height: '12.5em'}}>
      </CCol>
    </div>
    </div>
  )
  }
}

export default App;
