import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from './pages/posts';
import AdditionalPosts from './pages/additionalPosts';
import Main from './pages/main';
import Login from './components/login';
import {MyProvider} from './components/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyProvider>
      <BrowserRouter>
         <Routes>
            <Route path={'/'} element={<App/>}>
              <Route path={'/'} element={<Main/>}/>
              <Route path={'/posts'} element={<Posts/>}/>
              <Route path={'/posts/:id'} element={<AdditionalPosts/>}/>
            </Route>
            <Route path={'/login'} element={<Login/>}/>
         </Routes>
        </BrowserRouter>
    </MyProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
