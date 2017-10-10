import React from 'react';
import styled from 'styled-components';
import CornerGraphics from '../static/images/corner-graphics.png';

const CornerGraphicsImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const Title = styled.h1`
  padding: 0px 32px;
  position: relative;
  border-left: 2px solid #F22300;

  &::after {
    top: calc(50% - 8px);
    left: -8px;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right:8px solid #F22300;
  }
`;

const NotFound = () =>
  <div>
    <CornerGraphicsImage src={CornerGraphics} />
    <Title>
      404: Oops! This page does not exist
    </Title>
  </div>;

export default NotFound;