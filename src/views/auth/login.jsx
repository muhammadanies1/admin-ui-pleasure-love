import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="flex flex-col gap-5">
      <span>Menu Login</span>
      <button className="bg-primary-01" onClick={back}>
        Back To Main
      </button>
    </div>
  );
};

export default Login;
