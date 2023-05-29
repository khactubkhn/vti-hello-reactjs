import styled from 'styled-components';
import {useState} from 'react';

const StyledComponent = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['red', 'blue', 'green']

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${colors[colorIndex]}
  `;

// Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const handleChangeColor = () => {
    setColorIndex((colorIndex + 1) % 3);
  }

  return (
      <Wrapper>
        <Title>
          Hello World!
        </Title>
        <button onClick={handleChangeColor}>Change color</button>
      </Wrapper>
  );
};

export default StyledComponent;
