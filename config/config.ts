import { defineConfig } from '@umijs/max';
import { routes } from './routes';

export default defineConfig({
  antd: { import: false },
  access: {},
  model: {},
  layout: false,
  routes,
  npmClient: 'pnpm',
  qiankun: {
    master: {},
  },
  mountElementId: 'app-framework',
  styledComponents: {},
});
