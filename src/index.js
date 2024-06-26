import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import {ThemeProvider} from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ThemeProvider>
          <App />
      </ThemeProvider>
  </React.StrictMode>
);


