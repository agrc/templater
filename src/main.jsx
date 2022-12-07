import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import './index.css';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex flex-col justify-between items-center">
      <p>Something went wrong:</p>
      <pre className="p-3">{error.message}</pre>
      <button className="bg-red-200 p-3 rounded-lg" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.localStorage.clear();
      }}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
