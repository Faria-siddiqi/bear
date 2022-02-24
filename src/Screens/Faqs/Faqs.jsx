import React from 'react';
import styles from './Faqs.module.scss';
import { Row, Col } from 'reactstrap';
import { Collapse } from 'antd';
import './OverRide.scss';

const { Panel } = Collapse;

const Faqs = () => {
  function callback(key) {
    console.log(key);
  }
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div className={styles.main_faqs}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.faqs_head}>
              <h1>FAQ</h1>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header='What is Lonely Bear Society?' key='1'>
              <p>{text}</p>
            </Panel>
            <Panel header='When will The Lonely Bear Society launch?' key='2'>
              <p>{text}</p>
            </Panel>
            <Panel header='How can I join' key='3'>
              <p>{text}</p>
            </Panel>
            <Panel header='IS LONELY BEAR SOCIETY A PROMISING PROJECT?' key='3'>
              <p>{text}</p>
            </Panel>
            <Panel header='Why mental health?' key='3'>
              <p>{text}</p>
            </Panel>
            <Panel header='Why does the body of the bear not match the head?' key='3'>
              <p>{text}</p>
            </Panel>
            <Panel header='WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?' key='3'>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Faqs;
