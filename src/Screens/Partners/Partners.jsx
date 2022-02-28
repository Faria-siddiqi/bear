import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Partners.module.scss';

const Partners = () => {
  return (
    <div className={styles.main_partners}>
      <Row>
        <Col sm={12} md={12}>
          <div className={styles.img_container}>
            <img src='Assets/mark.png' alt='' />
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className={styles.partners}>
            <div className={styles.head}>
              <h3>
                Bunnies <br />
                To Official
              </h3>
            </div>
            <div className={styles.partners_icons}>
              <img src='Assets/discord.png' alt='' />
            </div>
            <div className={styles.social_icons}>
              <img src='Assets/insta.png' alt='' />
              <img src='Assets/twitter.png' alt='' />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Partners;
