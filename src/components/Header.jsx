import React, { useEffect, useState} from 'react'
import GitHub from '@mui/icons-material/GitHub';
import { Code, LinkedIn } from '@mui/icons-material';
import './comp-styles/Header.css'
import { getPortfolio } from '../store/port';
import { useDispatch , useSelector} from 'react-redux';


function Header() {
    const dispatch = useDispatch();

    const { portfolio, loading } = useSelector(state => state.port);

    useEffect(() => {
        dispatch(getPortfolio());
    }, [dispatch]);

    

  
    
    return (
        <div className='header'>
            <div className='navbar'>
                <div className='name'>{portfolio.name}</div>
                {/* <div className='list'>
                    <div className='list-item'>About Me</div>
                    <div className='list-item'>Skills</div>
                    <div className='list-item'>Certification</div>
                    <div className='list-item'>Experience</div>
                    <div className='list-item'>Articles</div>

                </div> */}
            </div>
            <div className='info'>
                <div className='text-one'>I,m a</div>
                <div className='text-two'>{portfolio.occupation}</div>
                <div className='text-three'>{portfolio.address}</div>
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




