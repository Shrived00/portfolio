import React from 'react'

import GitHub from '@mui/icons-material/GitHub';
import { Code, LinkedIn } from '@mui/icons-material';

import './comp-styles/Header.css'


function Header() {
    return (
        <div className='header'>
            {/* <div className='navbar'>
                <div className='name'>maderchod</div>
                <div className='list'>
                    <div className='list-item'>About Me</div>
                    <div className='list-item'>Skills</div>
                    <div className='list-item'>Certification</div>
                    <div className='list-item'>Experience</div>
                    <div className='list-item'>Articles</div>

                </div>
            </div> */}
            <div className='info'>
                <div className='text-one'>I,m a</div>
                <div className='text-two'>Clound Enginneer</div>
                <div className='text-three'>Porto, Portugal</div>
            </div>
            <div className='logos'>
                <div className='logo-style ' ><GitHub /></div>
                <div className='logo-style' ><Code /></div>
                <div className='logo-style' ><LinkedIn /></div>
            </div>

        </div>
    )
}

export default Header




