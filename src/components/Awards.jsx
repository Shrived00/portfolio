import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aimg from '../images/award.png'


function Awards() {
    return (

        <div>
            <Container fluid>
                <div className='main-text' >Awards</div>
                <Row>
                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='m-2'>
                            <div className='certi-part text-center'>
                                <div className=''>
                                    <img src={aimg} ></img>
                                </div>
                                <div className='certi-text  text-center'>
                                    Title
                                </div>
                                <div className='  text-center'>
                                    Award Name
                                </div>
                                <div className='  text-center'>
                                    Descrpition
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='m-2'>
                            <div className='certi-part text-center'>
                                <div className=''>
                                    <img src={aimg} ></img>
                                </div>
                                <div className='certi-text  text-center'>
                                    Title
                                </div>
                                <div className='  text-center'>
                                    Award Name
                                </div>
                                <div className='  text-center'>
                                    Descrpition
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='m-2'>
                            <div className='certi-part text-center'>
                                <div className=''>
                                    <img src={aimg} ></img>
                                </div>
                                <div className='certi-text  text-center'>
                                    Title
                                </div>
                                <div className='  text-center'>
                                    Award Name
                                </div>
                                <div className='  text-center'>
                                    Descrpition
                                </div>
                            </div>
                        </div>
                    </Col>



                </Row>
            </Container>

        </div>
    )
};

export default Awards;