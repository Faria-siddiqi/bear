import React, { useState } from 'react';
import styles from './Heading.module.scss';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';
import { useWindowScrollPositions } from '../../Components/Scrolls/Scrolls';
import './OverRide.scss';
import { useLocation } from 'react-router-dom';

const Heading = () => {
  // let location = useLocation();
  let [sideBarState, setSiteBarState] = useState(false);
  const { scrollX, scrollY } = useWindowScrollPositions();

  function sidebarOpener() {
    setSiteBarState(true);
  }
  function sidebarCloser() {
    setSiteBarState(false);
  }

  // console.log(location)

  return (
    <div className={styles.main_heading}>
      <Row>
        <Col sm={12} md={12}>
          <div
            className={`${styles.heading_nav} ${
              scrollY > 20 ? 'scrollable' : ''
            }`}
          >
            <div className={styles.head}>
              <h3>
                LONELY BEAR <br />
                SOCIETY
              </h3>
            </div>
            <div className={`${styles.links}`}>
                <p>
                  <a href="#aboutus">ABOUT US</a>
                </p>
                <p>
                  <a href="#works">WORKS</a>
                </p>
                <p>
                  <a href="#teams">ARTIST</a>
                </p>
                <p>
                  <a href="#roadmaps">ROADMAP</a>
                </p>
                <p>
                  <a href="#faqss">FAQ</a>
                </p>
              <p>
                <a>JOIN</a>
              </p>
            </div>
            <div className={styles.side_bar}>
              <img
                src='Assets/sidebar.png'
                alt=''
                onClick={sideBarState ? sidebarCloser : sidebarOpener}
              />
            </div>
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
            <Animated
              animationIn='animate__fadeInUp'
              animationOut='fadeIn'
              isVisible={true}
            >
              <button className='animate__backInUp'>
                <span>JOIN OUR DISCORD</span>
              </button>
            </Animated>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Heading;
