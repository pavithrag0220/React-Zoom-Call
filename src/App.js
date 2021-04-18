import child from './child.jpg';
import './App.css';
import Zoom from './Zoom';
import { useState } from 'react';
import { Container,Row,Col, } from 'react-bootstrap';
import NavBar from './NavBar';

function App() {
  var ReactRotatingText = require('react-rotating-text');
  const [joinMeeting, setjoinMeeting] = useState(false);
  const [meetingNumber, set_meetingNumber] = useState("");
  const [passWord, set_passWord] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setjoinMeeting(true);
  }
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
          <label className="text-info">Get Demo Meeting by calling  </label>
          <label><b>+91 234567891</b> </label>
          <form className="form-group" onSubmit={(e) => {submitForm(e)}}>
          <label>
            <input className="form-control "  
              placeholder="Enter meeting ID" 
              type="text" value={meetingNumber} 
              onChange={(e) => set_meetingNumber(e.target.value)}>
            </input>
          </label>
          <label>
            <input className="form-control" 
              placeholder="Enter Password" 
              type="text" value={passWord} 
              onChange={(e) => set_passWord(e.target.value)}>
            </input>
          </label>

            <button type="submit" className="text-info">Click on <strong>"join zoom meeting"</strong></button>

          </form>
          {
            joinMeeting ? <Zoom credentials={{meetingNumber, passWord}} /> : (
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
