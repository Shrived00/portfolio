import './App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Certification from './components/Certification';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Awards from './components/Awards';
import Education from './components/Education';

import { listPortfolioDetails } from './actions/portfolioAction'



function App() {

  const dispatch = useDispatch();

  const portfolioDetails = useSelector(state => state.portfolio)

  console.log(portfolioDetails)




  const { id } = `634423ee353695c9ae81478b`

  useEffect(() => {
    dispatch(listPortfolioDetails(id))
  }, [dispatch, id]);



  return (
    <>
      <Header />
      <Profile />
      <Skill />
      <Certification />


      <Awards />

      <Education />
      <Experience />

      <Footer />




    </>

  );
}

export default App;
