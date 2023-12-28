import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import { configureStore } from "./store/configureStore";
import Layout from './components/layout';
import { Login } from './pages/auth';
import NavigationRoutes from './Routes';
import Signup from './pages/auth/Signup';
import Profile from './pages/user/Profile';
const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<Layout routes={NavigationRoutes} />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/profile" element={<Profile />} /> */}

        </Routes>
      </Provider>
    </div>
  );
}

export default App;
