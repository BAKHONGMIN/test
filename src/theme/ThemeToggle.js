import React from 'react';
import styled from 'styled-components';

function ThemeToggle({ toggle, mode }) {
  return (
    <ToggleWrapper onClick={toggle} mode={mode}>
      {mode === 'dark' ? '⭐' : '☀️'}
    </ToggleWrapper>
  );
}

export default ThemeToggle;

const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 20px;
  right: 20px;

  background-color: ${props => props.theme.bgColor};
  border: ${props => props.theme.borderColor};
  font-size: 2vmax;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  max-width:100px;
  height: 8vh;
  border-radius: 10px;
  box-shadow: ${
    props => props.mode === 'dark' ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
    : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
  }
`;