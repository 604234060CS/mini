import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/Friendmodels';

/*
  Generated class for the FriendRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendRestProvider {

  private url:string="https://raw.githubusercontent.com/604234060CS/datamini/master/myfriend.json"

  constructor(public http: HttpClient) {
    console.log('Hello FriendRestProvider Provider');
  }
  getFriendList():Observable<any>
  { 
    return this.http.get<Friend>(this.url)
  }
 

}
