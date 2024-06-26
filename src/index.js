import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom"
import Quiz from './components/Quizz/Quiz';
import VideoTutorial from './components/Video Tutorial/VideoTutorial';
import About from './components/About/About';
import Certification from './components/Certification/Certification';
import Dashboard from './components/Dashboard/Dashboard';
import Notes from './components/Notes/Notes';
import BubbleSort from './components/Games/Bubble Sort/BubbleSort';
import BubbleSort2 from './components/Games/Bubble Sort/BubbleSort2';
import BubbleSort3 from './components/Games/Bubble Sort/BubbleSort3';


const router =createBrowserRouter(
  [
    {
      path: "dashboard",
      element: <Dashboard/>,
    },

    {
      path: "games",
      element: <App/>,
    },

    {
      path: "quiz",
      element: <Quiz/>,
    },

    {
      path: "video-tutorials",
      element: <VideoTutorial/>,
    },

    {
      path: "about",
      element: <About/>,
    },
    
    {
    path: "certifications",
    element: <Certification/>,
    },

    {
      path: "notes",
      element: <Notes/>,
    },

    {
      path: "bubble-sort",
      element: <BubbleSort/>,
    },
    {
      path: "bubble-sort-playarea",
      element: <BubbleSort2/>,
    },
    {
      path:"bubble-sort-instructions",
      element:<BubbleSort3/>,
    }


  
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
