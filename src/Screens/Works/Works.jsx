import React from 'react';
import { Col, Row } from 'reactstrap';
import SliderComponent from '../../Components/Slider/Slider';
import styles from './Works.module.scss';
import { Animated } from 'react-animated-css';

const Works = ({
  walletAddress, 
  onMint,
  increase,
  decrease,
  max,
  counter,
  totalSupply,
  loading
}) => {
  let collections = [
    {name : 'Assets/art1.png'},
    {name : 'Assets/art2.png'},
    {name : 'Assets/art3.png'},
    {name : 'Assets/art4.png'},
    {name : 'Assets/art1.png'},
    {name : 'Assets/art2.png'},
    {name : 'Assets/art3.png'},
    {name : 'Assets/art4.png'},
    {name : 'Assets/art1.png'},
    {name : 'Assets/art2.png'},
    {name : 'Assets/art3.png'},
    {name : 'Assets/art4.png'},
  ];
  
  

  
  return (
    <>
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
            <SliderComponent imgs={collections} />
          </Col>
        </Row>
      </div>
      <div
        className={styles.main_works}
        id='mint'
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.01))',
        }}
      >
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Animated
              isVisible={true}
              animationIn='animate__fadeInUpBig'
              animationOut='animate__fadeInUpBig'
            >
              <div className={styles.joining}>
                <Col xs={12} sm={12} md={12}>
                  <div className={styles.works_head}>
                    <h2>
                      MI<span>NT</span>
                    </h2>
                  </div>
                </Col>
               <div className={styles.heading}>
                  <h1 style={{ color: '#ffffff' }}>Presale is Live</h1>
                </div>
                {/* <div className={styles.content1}>
                  <h3 style={{color: '#3a8bae'}}>PreSale Is Live</h3>
                </div> */}
                <div className={styles.mintingpart}>
                  <div className={styles.minted}>
                    <span>Total Minted </span>
                    <span>{totalSupply} / 7777</span>
                  </div>
                  <div className={styles.minted}>
                    {/* <span>Eth Balance </span> */}
                    {/* <span>{`${walletAddress ? (balance === 0 ? 0 : balance.slice(0, 6)) : 0} ETH`}</span> */}
                  </div>
                  <div
                    className={styles.buttons}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <button onClick={() => decrease()}>-</button>
                    <h1>{counter}</h1>
                    <button onClick={() => increase()}>+</button>
                    <button className={styles.maxBtn} onClick={() => max()} >Max</button>
                  </div>
                  <div className={styles.minted}>
                    <span>Total Cost </span>
                    <span>{(counter * 0.09).toFixed(2)} ETH</span>
                  </div>
                  <div className={styles.minted}>
                    <span>Max Mints Per Transaction</span>
                    <span>2</span>
                  </div>
                  <div className={styles.minted}>
                    <span>Max Mints Per Wallet</span>
                    <span>10</span>
                  </div>
                  <div className={styles.mintButton}>
                    {!loading ? <button onClick={() => onMint()}>Mint</button> : <p>Minting...</p>}
                  </div>
                </div>
              </div>
            </Animated>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Works;
