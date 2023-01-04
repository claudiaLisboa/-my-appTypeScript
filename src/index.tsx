import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
    <App />
 
);

// ERROR : Invariant failed: Cannot find droppable entry with id [TodosList]
// https://github.com/atlassian/react-beautiful-dnd/issues/2396
// Remove <React.StrictMode> </React.StrictMode> tag from Index.tsx file 
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


