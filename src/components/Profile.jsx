import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './comp-styles/Profile.css'
import pic from '../images/profile.png'
import AlbumIcon from '@mui/icons-material/Album';
import { Col, Container, Row } from 'react-bootstrap';

import { useSelector} from 'react-redux';



function Profile() {
    const { portfolio, loading } = useSelector(state => state.port);
    
    
    return (
        <>
        {portfolio && <div className='main p-5 text-white'>
            <div className='image'>
                <div className='img-sty'> <img src={pic} className='image' height={200} width={200}></img></div>

            </div>

            <div className='introone my-3'>Hey There! Glad you're here</div>
            <div className='introtwo text-center px-5 mx-5 my-3 '>{portfolio.description}</div>




            <div className='interest-main text-center'>
                {/* <div className='interest-container text-center'>


                    <div className='interest border border-2 text-center rounded p-2'>
                        <span>Travel bug</span>
                        <span className='ms-2 inter-logo'><AlbumIcon /></span>
                    </div>
                    <div className='interest border border-2 text-center rounded p-2'>
                        <span>Travel bug</span>
                        <span className='ms-2 inter-logo'><AlbumIcon /></span>
                    </div>
                    <div className='interest border border-2 text-center rounded p-2'>
                        <span>Travel bug</span>
                        <span className='ms-2 inter-logo'><AlbumIcon /></span>
                    </div>
                    <div className='interest border border-2 text-center rounded p-2'>
                        <span>Travel bug</span>
                        <span className='ms-2 inter-logo'><AlbumIcon /></span>
                    </div>



                </div> */}
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

            </div>




        </div> }
        </>
    )
}

export default Profile