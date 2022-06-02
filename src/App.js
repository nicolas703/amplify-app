import { Authenticator } from '@aws-amplify/ui-react';

import { Login } from './components/Login';
import { Home } from './components/Home';
import { Layout } from './components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Protected } from './components/Uno';
import { RequireAuth } from './components/RequireAuth';
import { ProtectedSecond } from './components/Dos';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;