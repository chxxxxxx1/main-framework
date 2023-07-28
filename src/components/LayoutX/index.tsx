import { NavTop } from '@/components/LayoutX/NavTop';
import { prefixCls } from '@/constants/framework.conf';
import { Outlet, useModel } from '@umijs/max';
import { App, ConfigProvider, Layout } from 'antd';
import React, { useMemo } from 'react';
import { Whether } from '../Whether';
import { SiderMenus } from './SiderMenus';
import styles from './index.module.less';

const { Sider, Content } = Layout;
const TOP_NAV_HEIGHT = 52;
const CONTENT_HEIGHT = 'calc(100vh - 52px)';
const SITE_MENU_COLLAPSED_WIDTH = 60;
const SITE_MENU_EXTENDED_WIDTH = 200;

const LayoutX: React.FC = () => {
  const { sideCollapsed, setSideCollapsed } = useModel('action');

  const contentMarginLeft = useMemo(() => {
    return sideCollapsed
      ? SITE_MENU_EXTENDED_WIDTH - 140
      : SITE_MENU_EXTENDED_WIDTH;
  }, [sideCollapsed]);
  return (
    <ConfigProvider prefixCls={prefixCls}>
      <App>
        <Layout>
          <Whether>
            <NavTop />
          </Whether>
          <Whether>
            <Layout hasSider>
              <Sider
                theme="light"
                style={{
                  height: '100vh',
                  position: 'fixed',
                  top: TOP_NAV_HEIGHT,
                  left: 0,
                  overflow: 'auto',
                  bottom: 0,
                  zIndex: 999,
                  width: SITE_MENU_EXTENDED_WIDTH,
                }}
                collapsedWidth={SITE_MENU_COLLAPSED_WIDTH}
                collapsible
                collapsed={sideCollapsed}
                onCollapse={(collapsed) => {
                  setSideCollapsed(collapsed);
                }}
              >
                <SiderMenus />
              </Sider>
              <Layout
                className={styles.main}
                style={{
                  marginTop: TOP_NAV_HEIGHT,
                  marginLeft: contentMarginLeft,
                }}
              >
                <Content>
                  <Outlet />
                </Content>
              </Layout>
            </Layout>
          </Whether>
        </Layout>
      </App>
    </ConfigProvider>
  );
};

export default LayoutX;
