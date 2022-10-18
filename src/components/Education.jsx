import React , { Component}  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './comp-styles/Education.css';
import { useSelector } from 'react-redux';

function Education() {
    const { portfolio, loading } = useSelector(state => state.port);


    return (

        // college
        // gpa
        // degree
        // date
        <Container fluid className=' fluid'>
            <div className='sideshow  m-4'>
                Education/Qualification
            </div>
            <Row className=' my-3  border-3 mx-3'>
                {portfolio.education && portfolio.education.map((item)=>{
                    return( <Col sm={12} md={6} lg={4}>
                        <div
                            className='educationCard border border-1 rounded-3 p-2 m-2'>
                            <div className='text-primary'>{item.college}</div>
                            <div className=''>{item.degree}</div>
                            <div className=''>{item.gpa}</div>
                            <div className=''>{item.startDate}</div>
                            <div className=''>{item.endDate}</div>
                        </div>
                    </Col>)
                }) }
            </Row>
            
      



        </Container>
    );
}

export default Education