import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <span>Menu Dasboard</span>
      <button onClick={back}>Back To Main</button>
    </div>
  );
};

export default Dashboard;
