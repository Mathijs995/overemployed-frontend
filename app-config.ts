import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Overemployed Ltd',
  pageTitle: 'Overemployed',
  pageDescription: 'AI-powered voice assistant',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/logo.svg',
  accent: '#002cf2',
  logoDark: '/logo-dark.svg',
  accentDark: '#1fd5f9',
  startButtonText: 'Start call',
};
