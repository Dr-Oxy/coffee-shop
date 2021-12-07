import React from 'react';
import './Button.css';

const STYLES = [
  'btn--primary--color',
  'btn--outline--color',
  'btn--light--color',
  'btn--secondary--color',
];

const SIZES = ['btn--medium', 'btn--small'];

export const Button = ({ children, buttonStyle, buttonSize, onClick }) => {
  //checks if button style  or size exist, if not falls back to the first style child
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
