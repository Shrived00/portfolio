import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './comp-styles/Profile.css'
import AlbumIcon from '@mui/icons-material/Album';
import { Col, Container, Row } from 'react-bootstrap';

import { useSelector} from 'react-redux';



function Profile() {
    const { portfolio, loading } = useSelector(state => state.port);
    
    
    return (
        <>
        {portfolio && <div className='main p-5 text-white'>
            

            <div className='introone my-3'>About Me</div>
            <div className='introtwo px-0'>{portfolio.description}</div>




            {/* <div className='interest-main text-center'>
               
                <div className='interest-container text-center'>
                    <Container>
                        <Row>
                            
                            {portfolio.interests && portfolio.interests.map((item)=>{
                                return(
                                    <Col> <div className='interest border border-2 text-center rounded p-2'>
                                <span>{item.interest}</span>
                                <span className='ms-2 inter-logo'><AlbumIcon /></span>
                                </div></Col>
                                )
                            })}
                            
                            
                        </Row>
                    </Container>

                </div>

            </div> */}




        </div> }
        </>
    )
}

export default Profile