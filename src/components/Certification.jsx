import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './comp-styles/Certification.css'
import cimg from '../images/certi.png'


function Certification() {
    return (
        <div>
            <Container fluid>
                <div className='main-text' >Certification</div>
                <Row>
                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='m-2'>
                            <div className='certi-part text-center'>
                                <div className=''>
                                    <img src={cimg} ></img>
                                </div>
                                <div className='certi-text  text-center'>
                                    Certificate Name
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='m-2'>
                            <div className='certi-part text-center'>
                                <div className=''>
                                    <img src={cimg} ></img>
                                </div>
                                <div className='certi-text  text-center'>
                                    Certificate Name
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='m-2'>
                            <div className='certi-part text-center'>
                                <div className=''>
                                    <img src={cimg} ></img>
                                </div>
                                <div className='certi-text  text-center'>
                                    Certificate Name
                                </div>
                            </div>
                        </div>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default Certification