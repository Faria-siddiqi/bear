import React, { useEffect } from 'react';
import styles from './Faqs.module.scss';
import { Row, Col } from 'reactstrap';
import { Collapse } from 'antd';
import './OverRide.scss';
import { Animated } from 'react-animated-css';

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

  // useEffect(() => {
  //   let div = document.getElementsByClassName('ant-collapse-header')[0];
  //   console.log(div);
  //   let head1 = document.createElement('div');
  //   let h3Node1 = document.createTextNode('+');
  //   let head2 = document.createElement('div');
  //   let h3Node2 = document.createTextNode(' ');
  //   let head3 = document.createElement('div');
  //   let h3Node3 = document.createTextNode(' ');
  //   let head4 = document.createElement('div');
  //   let h3Node4 = document.createTextNode(' ');
  //   let head5 = document.createElement('div');
  //   let h3Node5 = document.createTextNode(' ');
  //   let head6 = document.createElement('div');
  //   let h3Node6 = document.createTextNode(' ');
  //   let head7 = document.createElement('div');
  //   let h3Node7 = document.createTextNode(' ');
  //   let head8 = document.createElement('div');
  //   let h3Node8 = document.createTextNode(' ');
  //   let head9 = document.createElement('div');
  //   let h3Node9 = document.createTextNode(' ');
  //   let head10 = document.createElement('div');
  //   let h3Node10 = document.createTextNode('+');

  //   head1.appendChild(h3Node1);
  //   head2.appendChild(h3Node2);
  //   head3.appendChild(h3Node3);
  //   head4.appendChild(h3Node4);
  //   head5.appendChild(h3Node5);
  //   head6.appendChild(h3Node6);
  //   head6.appendChild(h3Node7);
  //   head6.appendChild(h3Node8);
  //   head6.appendChild(h3Node9);
  //   head6.appendChild(h3Node10);


  //   div.appendChild(head1);
  //   div.appendChild(head2);
  //   div.appendChild(head3);
  //   div.appendChild(head4);
  //   div.appendChild(head5);
  //   div.appendChild(head6);
  //   div.appendChild(head7);
  //   div.appendChild(head8);
  //   div.appendChild(head9);
  //   div.appendChild(head10);

  // }, []);

  return (
    <div className={styles.main_faqs}>
      <Animated
        isVisible={true}
        animationIn='animate__fadeInUp'
        animationOut='animate__fadeInUp'
      >
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
              <Panel
                header='IS LONELY BEAR SOCIETY A PROMISING PROJECT?'
                key='4'
              >
                <p>{text}</p>
              </Panel>
              <Panel header='Why mental health?' key='5'>
                <p>{text}</p>
              </Panel>
              <Panel
                header='Why does the body of the bear not match the head?'
                key='6'
              >
                <p>{text}</p>
              </Panel>
              <Panel header='WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?' key='7'>
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </Animated>
    </div>
  );
};

export default Faqs;
