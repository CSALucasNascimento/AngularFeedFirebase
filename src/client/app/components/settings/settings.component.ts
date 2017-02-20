import { Injector, Component } from '@angular/core';
import { Config } from '../../shared/core/index';

// import {DatabaseService} from '../../shared/utility/services/database.service';
@Component({
  moduleId: module.id,
  selector: 'sd-settings',
  templateUrl: 'settings.component.html',
  styleUrls: [
    'settings.component.css',
  ],
})
export class SettingsComponent {

  // Just one way you could handle the {N} `ui/page` Page class
  // in a shared component...
  value:number;
  value2:number;
  total:number;
  private _page: any;
  private get page() {
    if (Config.PageClass) {
      if (!this._page) {
        this._page = this.injector.get(Config.PageClass);
      }

      return this._page;
    }
  }

  constructor(private injector: Injector) {
    
  }
}
