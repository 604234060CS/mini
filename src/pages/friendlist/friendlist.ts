import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/Friendmodels';
import { FriendRestProvider } from '../../providers/friend-rest/friend-rest';
import { FrienddetailPage } from '../frienddetail/frienddetail';

/**
 * Generated class for the FriendlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

  Friends:Friend;
  classrooom:string;

  constructor(public friendRest:FriendRestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.classrooom=this.navParams.get("classroom");
    this.friendRest.getFriendList().subscribe(data=>{
      console.log(data);
      this.Friends=data.filter(friend => friend.classroom === this.classrooom);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendlistPage');
  }

  showDetail(studentID:number){
    this.navCtrl.push(FrienddetailPage,
      {studentID:studentID}
      );
  }
  gotoBack(){
    this.navCtrl.pop();
  }

}
