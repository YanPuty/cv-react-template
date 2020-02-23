import React from 'react';
import { Row, Col } from 'antd';
import PropType from "prop-types";


class Template1 extends React.Component {

    render() {
        const { data } = this.props;
        console.log(data);
        return(
            <React.Fragment>
                <Row type="flex" align="middle">
                    <Col md={10}></Col>
                    <Col md={12}>
                        <h2>{data.firstName} {data.lastName}</h2>
                    </Col>
                    <Col md={10}></Col>
                    <Col md={12}>
                        <p>{data.emailAddress}</p> 
                    </Col>
                    <Col md={10}></Col>
                    <Col md={12}>
                        <p>{data.phoneNumber}</p>  
                    </Col>
                    <Col md={10}></Col>
                    <Col md={12}>
                        <p>{data.dateOfBirth}</p>
                    </Col>
                    <Col md={10}></Col>
                    <Col md={12}>
                        <p>{data.address}</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <h3>Title / Summary</h3>
                    <p>{data.selfDescription}</p>
                    <h3>Employment History</h3>
                    {
                        data.workingExperience.map( data => (
                            <div>  
                            <Row>
                                <Col className="gutter-row" span={16}>
                                    <div className="gutter-box"><h4>{data.jobName}</h4></div>
                                </Col>
                                <Col className="gutter-row" span={6} >
                                    <div className="gutter-box"><b>{data.from}-{data.to} </b></div>
                                </Col>
                            </Row>
                            <div>{data.companyName}</div>
                            <div style={{marginLeft: "30px"}}>
                                <p>
                                   {data.jobDescription}
                                </p>
                            </div>
                            </div>
                    ))}
                    <h3>Qualifications</h3>
                    {
                        data.qualification.map( data => (
                            <div>
                                <Row>
                                    <Col className="gutter-row" span={16}>
                                        <div className="gutter-box"><h4>{data.courseName}</h4></div>
                                    </Col>
                                    <Col className="gutter-row" span={6} >
                                        <div className="gutter-box"><b>{data.from} {data.to}</b></div>
                                    </Col>
                                </Row>
                            <div>{data.collegeName}</div>
                            <div> {data.address}</div>
                            </div>
                        ))
                    }
                    <h3>Skills</h3>
                    {
                        data.skill.map(data=> (
                            <div>
                                <Row>
                                    <Col className="gutter-row" span={5}>
                                        <div className="gutter-box"><h4>{ (data.type === 1) ? data.name : (data.type === 2) ? data.name : ""}</h4></div>
                                    </Col>
                                    <Col className="gutter-row" span={3} >
                                        <div className="gutter-box"><b>{data.skillDescription}</b></div>
                                    </Col>
                                </Row>
                            </div>
                    ))}
                    <h3>Interests</h3>
                    <p>{data.interest.name}</p>
                    <h3>References</h3>
                    <div>{ (data.available.isAvailable === true) ? "Available upon request" : data.dateAvailable }</div>
                </Row>
            </React.Fragment>
        );
    }

}

Template1.propType = {
    data: PropType.any
}

export default Template1;
