import React from 'react';
import styles from './Heading.module.scss';
import { Row, Col } from 'reactstrap';

const Heading = () => {
  return (
    <div className={styles.main_heading}>
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
              <img src='Assets/sidebar.png' alt='' />
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className={styles.bearImg}>
            <img src='Assets/bear.png' alt='Bear Pic' />
          </div>
        </Col>
        <Col sm={12} md={8}>
          <div className={styles.bearContent}>
            <h1>
              LONELY BEAR <br />
              SOCIETY
            </h1>
            <button>JOIN OUR DISCORD</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Heading;
