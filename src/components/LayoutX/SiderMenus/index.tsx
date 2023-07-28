import { useNavigate } from '@umijs/max';
import { Menu } from 'antd';
import React from 'react';

export const SiderMenus: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Menu
      items={[{ label: 'test', key: 'debug' }]}
      style={{ height: '100%' }}
      onClick={({ key }) => {
        navigate(key);
      }}
    />
  );
};
