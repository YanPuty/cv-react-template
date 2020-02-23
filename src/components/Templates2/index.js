import React from 'react';
import { Row, Col, Avatar } from 'antd';
import PropType  from "prop-types";


class Template2 extends React.Component {

    render() {
        const { data } = this.props;
        console.log(data);
        const education = data.qualification;
        return(
            <React.Fragment>
                <Row>
                    <Col className="gutter-row" span={21}>
                        <Avatar size={90} icon="user" shape="square" />
                    </Col>
                    <Col className="gutter-row">
                        <div className="gutter-box">
                            <h2>{data.firstName} {data.lastName}</h2>
                            <p>Curriculum Vitae</p>  
                        </div>
                    </Col>
                </Row>
                    <h3>Personal Details</h3>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <Row>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">Birth</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">{data.dateOfBirth}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">Address</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">{data.address}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">Phone</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">{data.phoneNumber}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">Mail</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">{data.emailAddress}</div>
                        </Col>
                    </Row>
                    <h3>Self Information</h3>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <div> <p>{data.selfDescription} </p></div>
                    <h3>Educations</h3>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    {
                        education.map( data => (
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
                    <h3>Work Experience</h3>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
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
                    <h3>Skills</h3>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
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
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <p>{data.interest.name}</p>
                    <h3>References</h3>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <div>{ (data.available.isAvailable === true) ? "Available upon request" : data.dateAvailable }</div>
            </React.Fragment>
        );
    }

}

Template2.proptype = {
    data: PropType.any
}

export default Template2;
