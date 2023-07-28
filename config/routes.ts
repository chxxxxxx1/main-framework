import { IConfigFromPlugins } from '@@/core/pluginConfig';

export const routes: IConfigFromPlugins['routes'] = [
  {
    path: '/',
    component: '@/components/LayoutX',
    routes: [
      { path: '/debug', component: '@/pages/Debug' },
      { path: '*', component: '@/pages/404' },
    ],
  },
];
