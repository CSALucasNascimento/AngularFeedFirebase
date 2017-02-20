import {Injectable, Inject, NgZone} from '@angular/core';
import {FIREBASE} from '../../utility/index';

@Injectable()
export class DatabaseService {
  private database:any;
  private onSync:Function;
  private userID:string;
  constructor(@Inject(FIREBASE) firebase:any, private ngZone: NgZone) {
    console.log('Constructing DatabaseService');
    // Initialize Firebase
      var config = {
      //Settings from firebase
    };
    firebase.initializeApp(config);
    this.database = firebase.database();
  }

  sync(path: string, onValueReceived: Function):void {
    this.database.ref(path).on('value', (snapshot:any) => {
      this.ngZone.run(() => {
        onValueReceived(snapshot.val());
      });
    });
  }

  addChild(path: string, data:any, callback?:Function):void {
    this.database.ref(path).push(data, (err:any) => {
      if (callback && !err) {
        this.ngZone.run(() => {
          callback();
        });
      }
    });
  }
}
