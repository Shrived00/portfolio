import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Experience() {
    const { portfolio, loading } = useSelector(state => state.port);
    return (
        <Container fluid className=' fluid'>
            <div className='sideshow  m-4'>
                Experience
            </div>
            <Row className=' my-3  border-3 mx-3'>
                {portfolio.experience && portfolio.experience.map((item)=> {
                    return(
                        <Col sm={12} md={6} lg={4}>
                            <div
                                className='educationCard border border-1 rounded-3 p-2 m-2'>
                                <div className='text-primary'>{item.position}</div>
                                <div className='font-weight-bold'>{item.company}</div>
                                <div className=''>{item.roleDescription}</div>

                                <div className=''>{item.startDate}</div>
                                <div className=''>{item.endDate}</div>
                            </div>
                        </Col>
                    )})}
            </Row>




        </Container>


    )
};

export default Experience