import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';

document.title = "JeyDevLab";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<div>welcome</div>} />
          <Route path={'videos'} element={<div>Videos</div>} />
          <Route path={'about'} element={<div>about</div>} />
          <Route path={'gaming'} element={<div>gaming</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
