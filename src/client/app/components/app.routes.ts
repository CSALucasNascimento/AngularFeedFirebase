// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { SettingsRoutes } from './settings/settings.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...SettingsRoutes
];
