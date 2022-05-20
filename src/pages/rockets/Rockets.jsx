import React, { useState, useEffect } from 'react';

import { PATHS } from "../../API/config";
import { sendRequest } from "../../API/sendRequest";
import { Sidebar } from "./Sidebar";
import { RocketContent } from './RocketContent'




export const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  function getRockets() {
    sendRequest(PATHS.ROCKETS)
      .then(result => setRockets(result))
  }

  useEffect(() => {
    getRockets();
  }, [])

  return (
    <div className="rockets">
      <div className="container">
        <div className="row">
          <div className="col-3"><Sidebar rockets={rockets} /></div>
          <div className="col-9"><RocketContent rockets={rockets} /></div>
        </div>
      </div>
    </div>
  );
}
