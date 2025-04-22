import { useCallback } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const ToLogin = useCallback(() => {
    navigate("/login")
  },[navigate]);
  
  const ToDashboard = useCallback(() => {
    navigate("/dashboard")
  },[navigate]);

  return (
    <>
    <button onClick={ToLogin}>Ke Login</button>
    <button onClick={ToDashboard}>Ke Dashboard</button>
    </>
  );
}

export default App;
