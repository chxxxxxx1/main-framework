import { prefixCls } from '@/constants/framework.conf';
import { Outlet } from '@umijs/max';
import { App, ConfigProvider } from 'antd';
const GlobalLayout: React.FC = () => {
  return (
    <ConfigProvider prefixCls={prefixCls}>
      <App>
        <Outlet />
      </App>
    </ConfigProvider>
  );
};

export default GlobalLayout;
