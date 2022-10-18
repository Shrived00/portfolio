import '../App.css';
import React, { useEffect, useState} from 'react'

import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Certification from '../components/Certification';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Awards from '../components/Awards';
import Education from '../components/Education';
import { getPortfolio } from '../store/port';
import { useDispatch , useSelector} from 'react-redux';





function HomeScreen() {
    



  return (
    <>
      <Header />
      {/* <Profile /> */}
      {/* <Skill />
      <Certification />
      <Education />
      <Experience />
      <Footer /> */}
    </>

  );
}

export default HomeScreen;