// any operators needed throughout your application
import './operators';

// libs
import { Component, OnInit } from '@angular/core';

// app
import { AnalyticsService } from '../shared/analytics/index';
import { Config, LogService, AppService } from '../shared/core/index';
import {DatabaseService} from '../shared/utility/services/database.service';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    public analytics: AnalyticsService,
    public log: LogService,
    private appService: AppService,
    private databaseService: DatabaseService
  ) {
    log.debug(`Config env: ${Config.ENVIRONMENT().ENV}`);
    let count = 0;
      databaseService.sync('counters', (data:any) => {
        console.log('Synced path updated', data);
      });
      setInterval(() => {
        databaseService.addChild('counters', count++);
      }, 3000);
  }
}
