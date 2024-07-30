import './App.css'
import {Navigate, Outlet} from 'react-router-dom';
import Layout from './components/Layout'
import { useContext, useState } from 'react';
import MyContext from './components/MyContext';


function App(){
  const {isLogin} = useContext(MyContext)

  return isLogin ? (
    <Layout>
      <Outlet/>
    </Layout>
  ) : <Navigate to='/login' />;
}

export default App;