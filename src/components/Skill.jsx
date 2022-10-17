import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GitHub from '@mui/icons-material/GitHub'
import './comp-styles/Skill.css'
import { useSelector } from 'react-redux'


function Skill() {
    const { portfolio, loading } = useSelector(state => state.port);
    return (
        <div className='p-5'>
            <div>
                <h2>Skill</h2>
            </div>
            <Container fluid className='' >
                <Row className=' my-3' >
                    {portfolio.skills && portfolio.skills.map((item)=>{
                        return(
                            <Col
                                sm={12} md={6} lg={3}
                                className=' mb-2' >
                                <div className='p-3  border p-2 rounded sm-container'>
                                    <div className=' pe-1' ><GitHub /></div>
                                    <div className='info-skill  ps-1' >
                                        <div>{item.skill}</div>
                                        <div>Level : {item.level}</div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                    
                    


                </Row>





            </Container>

        </div>
    )
}

export default Skill