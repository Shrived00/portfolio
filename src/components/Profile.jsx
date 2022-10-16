import React from 'react'
import './comp-styles/Profile.css'
import pic from '../images/jcoelho.jpg'
import AlbumIcon from '@mui/icons-material/Album';
import { Col, Container, Row } from 'react-bootstrap';



function Profile() {
    return (
        <div className='main p-5 text-white'>
            <div className='image'>
                <div className='img-sty'> <img src={pic} className='rounded rounded-5'></img></div>

            </div>

            <div className='introone my-3'>Hey There! Glad you're here</div>
            <div className='introtwo text-center px-5 mx-5 my-3 '>Going on 7 years of experience in Software engineering. I'm currently working as a cloud engineer exploring the AWS world. I’m interested in building distributed, cloud native applications, service management, monitoring and site reliability engineering.</div>




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
                            <Col> <div className='interest border border-2 text-center rounded p-2'>
                                <span>Travel bug</span>
                                <span className='ms-2 inter-logo'><AlbumIcon /></span>
                            </div></Col>
                            <Col> <div className='interest border border-2 text-center rounded p-2'>
                                <span>Travel bug</span>
                                <span className='ms-2 inter-logo'><AlbumIcon /></span>
                            </div></Col>
                            <Col> <div className='interest border border-2 text-center rounded p-2'>
                                <span>Travel bug</span>
                                <span className='ms-2 inter-logo'><AlbumIcon /></span>
                            </div></Col>
                            <Col> <div className='interest border border-2 text-center rounded p-2'>
                                <span>Travel bug</span>
                                <span className='ms-2 inter-logo'><AlbumIcon /></span>
                            </div></Col>
                        </Row>
                    </Container>

                </div>

            </div>




        </div>
    )
}

export default Profile