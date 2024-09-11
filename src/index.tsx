import React from 'react';
import ReactDOM from 'react-dom/client';
import QuestionPage from './pages/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QuestionPage />
  </React.StrictMode>
);
