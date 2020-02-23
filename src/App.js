import React from 'react';
import './App.css';
import { Button, Row, Col, Modal } from 'antd';
import Template1 from './components/Templates1';
import Template2 from './components/Templates2';
import Template3 from './components/Templates3';

class App extends React.Component {
  state = {
    isShowModal1: false,
    isShowModal2: false,
    isShowModal3: false
  }

  onClickTemplate1 = () => {
    this.setState({
      isShowModal1: true
    });
  }

  onClickTemplate2 = () => {
    this.setState({
      isShowModal2: true
    });
  }

  onClickTemplate3 = () => {
    this.setState({
      isShowModal3: true
    });
  }

  onCloseModal1 = () => {
    this.setState({
      isShowModal1: false
    })
  }

  onCloseModal3 = () => {
    this.setState({
      isShowModal3: false
    })
  }

  onCloseModal2 = () => {
    this.setState({
      isShowModal2: false
    })
  }
  render () {
    const personalData = { 
      firstName: "Joe",
      lastName: "Broggs",
      dateOfBirth: "30 Sep 1993",
      address: "Phonm Penh Cambodia",
      phoneNumber: "(123)000 0000",
      emailAddress: "joe@joebroggs.com",
      selfDescription: "Desciptions text goes here. In order to maintain a stylish look, try to fill this description with a few line of text. Do the same for the other entries in the education section.",
      workingExperience: [
        {
          jobName: "Software Developer",
          from: "2010",
          to: "2015",
          companyName: "Jenko Solution",
          jobDescription: "A Java, C#, .Net, C, Sybase and Oracle Software Developer is generally responsible for the development, design and implementation of new or modified software products or ongoing business projects. Typically sitting within the IT team of a business, a Software Developer will be involved in liaising with the Business Analysts and Development Managers to ensure software projects meet requirements",
        },
        {
          jobName: "Backend Developer",
          from: "2015",
          to: "Present",
          companyName: "Slack Co.Ltd",
          jobDescription: "A Java, C#, .Net, C, Sybase and Oracle Software Developer is generally responsible for the development, design and implementation of new or modified software products or ongoing business projects. Typically sitting within the IT team of a business, a Software Developer will be involved in liaising with the Business Analysts and Development Managers to ensure software projects meet requirements",
        }
      ],
      skill: [
        {
          name: "Language",
          type: 1,
          skillDescription: "English(Fluent), Dutch(Mother Tongue), German(Fluent)"
        },
        {
          name: "Software",
          type: 2,
          skillDescription: "MATLAB, LATEX, Ansys, Comsol"
        },
      ],
      qualification : [
        {
          type: 1, 
          courseName: "Bsc Computer Science",
          from: "2010",
          to: "2014",
          address: "Karnataka Bangalore India",
          collegeName: "Bangalore University",
        },
        {
          type: 1, 
          courseName: "Bachelor Of Language",
          from: "2013",
          to: "2017",
          address: "Phonm Penh Cambodia",
          collegeName: "IFL University",
        }
      ],
      interest: {
        type: 1, 
        name: "Sports, Inclusivity, Feminism, Empowerment"
      },
      available: {
        isAvailable: true,
        dateAvailable: ""
      }
    };
    return(
      <div>
      <Row style={{ marginTop: "100px"}} justify="center" type="flex">
        <Col span={8}>
          <Button
            size="large"
            type="primary"
            onClick={this.onClickTemplate1}
          >
            Template 1
          </Button>
          <Modal
            title="CV Template 1"
            visible={this.state.isShowModal1}
            footer={null}
            style={{minWidth: "1000px"}}
            wrapClassName="col-24 col-lg-9 wrapper-modal-transfer"
            onCancel={this.onCloseModal1}
          >
          <Template1 data={personalData}/>
          </Modal>
        </Col>
        <Col span={8}>
          <Button
            size="large"
            type="primary"
            onClick={this.onClickTemplate2}
          >
            Template 2 
          </Button>
          <Modal
            title="CV Template 2"
            visible={this.state.isShowModal2}
            footer={null}
            style={{minWidth: "1000px"}}
            wrapClassName="col-24 col-lg-9 wrapper-modal-transfer"
            onCancel={this.onCloseModal2}
          >
          <Template2 data={personalData}/>
          </Modal>
        </Col>
        <Col span={6}>
          <Button
            size="large"
            type="primary"
            onClick={this.onClickTemplate3}
          >
            Template 3 
          </Button>
          <Modal
            title="CV Template 3"
            visible={this.state.isShowModal3}
            footer={null}
            style={{minWidth: "1000px"}}
            wrapClassName="col-24 col-lg-9 wrapper-modal-transfer"
            onCancel={this.onCloseModal3}
          >
          <Template3 data={personalData}/>
          </Modal>
        </Col>
      </Row>
      </div>
    );
  }
}

export default App;
