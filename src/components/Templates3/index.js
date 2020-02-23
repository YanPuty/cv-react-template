import React from 'react';
import { Row, Col, Avatar, Icon } from 'antd';
import PropTypes from "prop-types"; 


class Template3 extends React.Component {

    render() {
        const { data } = this.props;
        console.log(data.workingExperience);
        const work = data.workingExperience;
        const skill = data.skill;
        const qualification = data.qualification;
        return(
            <React.Fragment>
                <Row>
                    <Col className="gutter-row">
                        <Avatar size={40} icon="user" shape="circle" />
                            <h2>{data.firstName} {data.lastName}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <Icon type="home" />{data.address}
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="gutter-box">
                        <Icon type="phone" />{data.phoneNumber}
                        </div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="gutter-box">
                        <Icon type="smile" />{data.dateOfBirth}
                        </div>
                    </Col>
                    <Col className="gutter-row">
                        <div className="gutter-box">
                        <Icon type="mail" style={{ marginRight: "3px"}}/>{data.emailAddress}
                        </div>
                    </Col>
                </Row>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <p>{data.selfDescription}</p>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <h3>Work Experience</h3>
                    {
                        work.map( data => (
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
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <h3>Skills</h3>
                    {
                        skill.map(data=> (
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
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <h3>Educations And Qualifications</h3>
                    {
                        qualification.map(data => (
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
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <h3>Interests</h3>
                    <p>{data.interest.name}</p>
                    <hr style = {{ borderWidth: 1.5, borderColor: "black", margin: 10, marginLeft: "1px"}}></hr>
                    <h3>References</h3>
                    <div>{ (data.available.isAvailable === true) ? "Available upon request" : data.dateAvailable }</div>
            </React.Fragment>
        );
    }

}

Template3.propTypes = {
    data: PropTypes.any
};

export default Template3;
