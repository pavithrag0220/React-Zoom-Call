// import './Zoom.css';
import { useEffect, useState } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import crypto, { sign } from 'crypto';
// const crypto = require('crypto') // crypto comes with Node.js

const Zoom = (props) => {

  let [meetingNumber, set_meetingNumber] = useState(props.credentials.meetingNumber);
  let [passWord, set_passWord] = useState(props.credentials.passWord);
  let [leaveUrl, set_leaveUrl] = useState("http://localhost:3000"); // our redirect url
  let [userName, set_userName] = useState("WebSDK");
  let [userEmail, set_userEmail] = useState("pavithra.g@abitechnologies.in");
  let [signature, set_signature] = useState("");
  let [apiKey, set_apiKey] = useState("d-sh6ErCQvSw2Rj-yCEPgg");

  function generateSignature(apiKey, apiSecret, meetingNumber, role) {

    return new Promise((res, rej) => {
      // Prevent time sync issue between client signature generation and zoom 
      const timestamp = new Date().getTime() - 30000;
      const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64');
      const hash = crypto
        .createHmac('sha256', apiSecret)
        .update(msg)
        .digest('base64');
      const signature = Buffer.from(
        `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
      ).toString('base64');
  
      res(signature);
    })
  }
  

  // loading zoom libraries before joing on component did mount
  useEffect(() => {
    var apiSecret = "lXMtvcTXRFGZ5UrO7Da5jMsagb7nfmR0D6lr";
    generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
      set_signature(res);
    }); // need to generate based on meeting ID
  }, []);

  useEffect(() => {
    if(signature) {
      showZoomDiv();
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    initiateMeeting();
    }
  }, [signature]);

  const showZoomDiv = () => {
    document.getElementById('zmmtg-root').style.display = 'block';
  }

  const initiateMeeting = () => {
    ZoomMtg.init({
      leaveUrl: leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error, signature)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  };

  return (
    <div className="App">
      <h1>Zoom</h1>
    </div>
  );
}

export default Zoom;
