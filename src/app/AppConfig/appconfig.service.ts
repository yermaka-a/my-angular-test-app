import { InjectionToken } from '@angular/core';
import type { AppConfig } from './appconfig.interface';
import { env } from '../environment/environment';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');


export const APP_CONFIG: AppConfig = {
  apiEndpoint: env.apiEndpoint
}
