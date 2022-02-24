import React, { useState } from 'react';
import styles from './Heading.module.scss';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';

const Heading = () => {
  let [sideBarState, setSiteBarState] = useState(false);
  function sidebarOpener() {
    setSiteBarState(true);
  }
  function sidebarCloser() {
    setSiteBarState(false);
  }
  return (
    <div className={styles.main_heading}>
      {sideBarState ? (
        <div className={styles.sidebar}>
          <div className={styles.lists}>
            <p>ABOUT US</p>
            <p>WORKS</p>
            <p>ARTIST</p>
            <p>ROADMAP</p>
            <p>FAQ</p>
            <p>JOIN</p>
          </div>
          <div>
            <img
              src='Assets/sidebar.png'
              alt=''
              onClick={sideBarState ? sidebarCloser : sidebarOpener}
            />
          </div>
        </div>
      ) : null}
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.heading_nav}>
            <div className={styles.head}>
              <h3>
                LONELY BEAR <br />
                SOCIETY
              </h3>
            </div>
            <div className={styles.links}>
              <p>ABOUT US</p>
              <p>WORKS</p>
              <p>ARTIST</p>
              <p>ROADMAP</p>
              <p>FAQ</p>
              <p>JOIN</p>
            </div>
            <div className={styles.side_bar}>
              <img
                src='Assets/sidebar.png'
                alt=''
                onClick={sideBarState ? sidebarCloser : sidebarOpener}
              />
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <Animated
            animationIn='animate__fadeInLeft'
            animationOut='fadeOut'
            isVisible={true}
          >
            <div className={`${styles.bearImg}`}>
              <img src='Assets/bear.png' alt='Bear Pic' />
            </div>
          </Animated>
        </Col>
        <Col sm={12} md={8}>
          <div className={styles.bearContent}>
            <h1>
              LONELY BEAR <br />
              SOCIETY
            </h1>
            <Animated animationIn='animate__fadeInUp' animationOut="fadeIn" isVisible={true}>
              <button className='animate__backInUp' >JOIN OUR DISCORD</button>
            </Animated>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Heading;
