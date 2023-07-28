import { navHeight } from '@/constants/framework.conf';
import { styled } from '@umijs/max';
import { Col, Row } from 'antd';
import React from 'react';

const HeadContarier = styled.div`
  position: fixed;
  height: 52px;
  width: 100%;
  left: 0;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  z-index: 1000;
`;

export const NavTop: React.FC = () => {
  const heightStyles: React.CSSProperties = {
    height: navHeight,
    padding: '15px 10px',
  };

  return (
    <HeadContarier>
      <Row justify={'space-between'}>
        <Col style={heightStyles}>logo</Col>
        <Col style={heightStyles}>User</Col>
      </Row>
    </HeadContarier>
  );
};
