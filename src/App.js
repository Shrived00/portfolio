import './App.css';
import React, { useEffect } from 'react'
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'




function App() {

  



  return (

    <>
    <Router>


      <main>

          <Routes>
            
            <Route exact path='/' element={<HomeScreen/>}/>
            
          </Routes>
   
      </main>
  

    </Router>
    </>

  );
}

export default App;
