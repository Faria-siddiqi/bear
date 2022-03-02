/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styles from './Heading.module.scss';
import { Row, Col } from 'reactstrap';
import { Animated } from 'react-animated-css';
import 'react-toastify/dist/ReactToastify.css';
import { useWindowScrollPositions } from '../../Components/Scrolls/Scrolls';
import './OverRide.scss';


const Heading = ({onClickConnectWallet, onClickDisconnectWallet, walletAddress}) => {
  let [sideBarState, setSiteBarState] = useState(false);
  const { scrollY } = useWindowScrollPositions();
  let [activeState, setActiveState] = useState('');

  function sidebarOpener() {
    setSiteBarState(true);
  }
  function sidebarCloser() {
    setSiteBarState(false);
  }

  useEffect(() => {
    setActiveState(window.location.hash);
  }, [scrollY]);

  return (
    <div className={styles.main_heading} id='home'>
      <Row>
        <Col sm={12} md={12}>
          <div
            className={`${styles.heading_nav} ${
              scrollY > 20 ? 'scrollable' : ''
            }`}
          >
            <div className={styles.head}>
              <a href='#home' style={{display: 'flex'}}>
                <img src='Assets/logo.png' alt='logo' className={styles.logo_image}/>
                  <h3 className={styles.logo_cover}>
                    BUNNIES<br />
                    TO OFFICIAL
                  </h3>
              </a>
            </div>
            {/* <div> */}
            <div className={`${styles.links}`}>
              <p
                className={`${
                  activeState === '#aboutus' ? styles.active_links : ''
                }`}
              >
                <a href='#aboutus'>ABOUT US</a>
              </p>
              <p
                className={`${
                  activeState === '#works' ? styles.active_links : ''
                }`}
              >
                <a href='#works'>WORKS</a>
              </p>
              <p
                className={`${
                  activeState === '#mint' ? styles.active_links : ''
                }`}
              >
                <a href='#mint'>MINT</a>
              </p>
              <p
                className={`${
                  activeState === '#teams' ? styles.active_links : ''
                }`}
              >
                <a href='#teams'>ARTIST</a>
              </p>
              <p
                className={`${
                  activeState === '#roadmaps' ? styles.active_links : ''
                }`}
              >
                <a href='#roadmaps'>ROADMAP</a>
              </p>
              {walletAddress > 0 ? <button className={styles.connectBtn} onClick={() => onClickDisconnectWallet()}><p>{walletAddress.slice(0,5)+'...'+walletAddress.slice((walletAddress.length - 4), walletAddress.length)}</p></button> : <button className={styles.connectBtn} onClick={() => onClickConnectWallet()}><p>Connect</p></button>}
              {/* <p
                className={`${
                  activeState === '#faqss' ? styles.active_links : ''
                }`}
              >
                <a href='#faqss'>FAQ</a>
              </p>
              <p>
                <a>JOIN</a>
              </p> */}
            </div>
            {/* </div> */}
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
                  <p
                    className={`${
                      activeState === '#aboutus' ? styles.active_links_mobile : ''
                    }`}
                  >
                    <a href='#aboutus'>ABOUT US</a>
                  </p>
                  <p
                    className={`${
                      activeState === '#works' ? styles.active_links_mobile : ''
                    }`}
                  >
                    <a href='#works'>WORKS</a>
                  </p>
                  <p
                    className={`${
                      activeState === '#mint' ? styles.active_links_mobile : ''
                    }`}
                  >
                    <a href='#mint'>MINT</a>
                  </p>
                  <p
                    className={`${
                      activeState === '#teams' ? styles.active_links_mobile : ''
                    }`}
                  >
                    <a href='#teams'>ARTIST</a>
                  </p>
                  <p
                    className={`${
                      activeState === '#roadmaps' ? styles.active_links_mobile : ''
                    }`}
                  >
                    <a href='#roadmaps'>ROADMAP</a>
                  </p>
                  {/* <p
                    className={`${
                      activeState === '#faqss' ? styles.active_links_mobile : ''
                    }`}
                  >
                    <a href='#faqss'>FAQ</a>
                  </p>
                  <p>
                    <a>JOIN</a>
                  </p> */}
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
              <img src='Assets/rabbit3.png' alt='Bear Pic' />
            </div>
          </Animated>
        </Col>
        <Col sm={12} md={8}>
          <div className={styles.bunniesContent}>
            <h1>
              BUNNIES <br />
              TO OFFICIAL
            </h1>
            <Animated
              animationIn='animate__fadeInUp'
              animationOut='fadeIn'
              isVisible={true}
            >
              <a href='https://discord.gg/WYDmSGhJ9u' target="_blank">
                <button className='animate__backInUp'>
                  JOIN OUR DISCORD
                </button>
              </a>
            </Animated>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Heading;
