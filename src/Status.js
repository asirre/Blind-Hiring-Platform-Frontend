import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, signout } = useContext(AccountContext);

  useEffect(()=> {
    getSession()
    .then(session => {
      console.log("Session: ", session);
      setStatus(true);
    })
  }, []);

  return(
    <div>
      {status? <button onClick={signout}>logout</button>:" Please log in."}
    </div>
  );

};

export default Status;