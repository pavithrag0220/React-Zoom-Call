import child from './child.jpg';
import './App.css';
import Zoom from './Zoom';
import { useState } from 'react';
import { Container,Row,Col, } from 'react-bootstrap';
import NavBar from './NavBar';

function App() {
  var ReactRotatingText = require('react-rotating-text');
  const [joinMeeting, setjoinMeeting] = useState(false);
  return (
    <>
    <NavBar/>
    <Container>
      <Row>
        <label className="bng">E-Learning For Kids</label>
        <Col md={12} className="banner">
            <div className="bng-txt text-center">
              <label><ReactRotatingText items={['Free and fun digital education ']}/><br/>
              for all children worldwide</label>
              <img src={child} width="55%" height="50%" />
            </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="banner2" >
          Our vision is to be the source
          for childhood learning on the internet
          available from anywhere and without charge.
          </div>
        </Col>
        <Col md={{ span: 4, offset: 2 }}></Col>
        <Col md={3}>
        <div className="sd-txt">
          <label className="text-info pt-4">Get Demo Meeting by calling  </label>
          <label><b>+91 234567891</b> </label>
          <label className="text-info">Click on <strong>"join zoom meeting"</strong></label>
          {
            joinMeeting ? <Zoom /> : (
              <header className="App-header">
                <button className="btn2" onClick={() => setjoinMeeting(true)}>Join Zoom Meeting</button>
              </header>
            )}
        </div>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
