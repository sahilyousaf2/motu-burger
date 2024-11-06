import React from 'react';
import { CardBlogsProps } from '../types/allTypes';
const BurgerCard = (Props:CardBlogsProps) => {
  return (
    <div className='card' style={styles.card}>
      <img 
        src={Props.image} 
        alt="Burger" 
        style={styles.image}
      />
      <h2 className='title dark:text-[#262625]' style={styles.title}>{Props.heading}</h2>
      <p className='timings dark:text-white' style={styles.timings}>{Props.day}</p>
      <p className='timings dark:text-white' style={styles.timings}>{Props.time}</p>
      <p className='description dark:text-white' style={styles.description}>
        {Props.description}
      </p>
      <button className='button' style={styles.button}>Read More</button>
    </div>
  );
};

const styles = {
  card: { 
    backgroundColor: '#fff',
    marginBottom: '20px',
    marginTop: '20px',
    borderRadius: '15px',
    width: '350px',
    height: '375px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center' as 'center',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '131px',
    height: '102px',
    marginTop: '21px'
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '36.31px',
    color: '#ff423b',
    margin: '10px 0'
  },
  timings: {
    margin: '5px 0',
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '18.15px',
    color: '#000'
  },
  description: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '14.52px',
    color: '#000000cc',
    textAlign: 'center' as 'center',
    margin: '10px 0'
  },
  button: {
    backgroundColor: '#ff423b',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '15px',
    fontFamily: 'Inter',
    fontWeight: 500,
    lineHeight: '18.15px',
    borderRadius: '5px',
    cursor: 'pointer' as 'pointer',
    marginTop: '20px'
  }
};

export default BurgerCard;

