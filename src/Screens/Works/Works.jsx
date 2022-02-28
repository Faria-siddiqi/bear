import React from 'react';
import { Col, Row } from 'reactstrap';
import SliderComponent from '../../Components/Slider/Slider';
import styles from './Works.module.scss';
import { Animated } from 'react-animated-css';

const Works = () => {
  let imgArr = [
    'Assets/art1.png',
    'Assets/art2.png',
    'Assets/art3.png',
    'Assets/art4.png',
    'Assets/art1.png',
    'Assets/art2.png',
    'Assets/art3.png',
    'Assets/art4.png',
    'Assets/art1.png',
    'Assets/art2.png',
    'Assets/art3.png',
    'Assets/art4.png',
  ];
  return (
    <div className={styles.main_works} id='works'>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.works_head}>
            <h2>
              WO<span>RKS</span>
            </h2>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <SliderComponent imgs={imgArr} />
        </Col>
        <Col sm={12} md={12}>
          <Animated
            isVisible={true}
            animationIn='animate__fadeInUpBig'
            animationOut='animate__fadeInUpBig'
          >
            <div className={styles.joining}>
              <div className={styles.firstSection}>
                <p>3333/3333 SOLD</p>
              </div>
              <div className={styles.heading}>
                <h1>Public Mint</h1>
              </div>
              <div className={styles.content1}>
                <p>Public Sale Is Live</p>
              </div>
              <div className={styles.content2}>
                <a href='#'>View on Opensea</a>
              </div>
              <div className={styles.buttons}>
                <button>-</button>
                <input type='text' name='' id='' />
                <button>+</button>
                <button className={styles.maxBtn}>Max</button>
              </div>
              <div className={styles.mintButton}>
                <button>Mint Bears</button>
              </div>
              <div className={styles.supplyInfo}>
                <p>.03 Eth</p>
                <p>3333 Supply</p>
              </div>
              <div className={styles.transacInfo}>
                <p>Max Mints Per Transaction: 5</p>
                <p>Max Mints Per Wallet : 20</p>
              </div>
            </div>
          </Animated>
        </Col>
      </Row>
    </div>
  );
};

export default Works;
