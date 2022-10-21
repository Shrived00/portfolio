import React, { useEffect, useState} from 'react'
import './comp-styles/Header.css'
import { getPortfolio } from '../store/port';
import { useDispatch , useSelector} from 'react-redux';
import pic from '../images/two.jpg'
import profile from '../images/profile.png'
import * as Unicons from '@iconscout/react-unicons';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


function Header() {
    const {id} = useParams();
    const dispatch = useDispatch();

    const { portfolio, loading } = useSelector(state => state.port);
    useEffect(() => {
        dispatch(getPortfolio(id));
    }, [dispatch]);

    

    

  
    
    return (
        <div className='header'>
                    {portfolio.image ? <img src={portfolio.image} className='profile'  height={150} width={150} /> :<img src={profile} className='profile'  height={150} width={150} />}
                    <img src={pic} className='image' height={1500} width="100%" ></img>
                    <Button href={`https://buisnesscardserver2.herokuapp.com/api/v1/portfolio/contact/${id}`} className='contact'>Add Contact</Button>
                <div className='name'>{portfolio.name}</div>
                <div className='icons1'>
                    {portfolio.linkedInUrl !== "" && <a className='icon' href={portfolio.linkedInUrl}><Unicons.UilLinkedin  /></a>}
                    {portfolio.twitterUrl !== "" && <a className='icon' href={portfolio.twitterUrl}><Unicons.UilTwitter /></a>}
                    {portfolio.facebookUrl !== "" && <a className='icon' href={portfolio.facebookUrl}><Unicons.UilFacebook /></a>}
                </div>
                <div className='icons2'>
                    {portfolio.instagramUrl !== "" && <a className='icon' href={portfolio.instagramUrl}><Unicons.UilInstagram  /></a>}
                    {portfolio.whatsappUrl !== "" && <a className='icon' href={portfolio.whatsappUrl}><Unicons.UilWhatsapp /></a>}
                </div>
                <div className='info' >
                    <div className='text-one'>I,m a</div>
                    <div className='text-two'>{portfolio.occupation}</div>
                    <div className='text-three'>{portfolio.address}</div>
                </div>
                {portfolio && <div className='main my-5 p-5 text-white'>
                

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
        </div>
        
    )
}

export default Header




