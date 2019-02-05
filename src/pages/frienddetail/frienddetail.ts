import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/Friendmodels';
import { FriendRestProvider } from '../../providers/friend-rest/friend-rest';

/**
 * Generated class for the FrienddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frienddetail',
  templateUrl: 'frienddetail.html',
})
export class FrienddetailPage {

  studentID:number;
  friend:Friend;

  constructor(private Friendrest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentID=this.navParams.get("studentID");
    this.Friendrest.getFriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentID === this.studentID)[0];
    });
  }

  ionViewDidLoad() {
    this.studentID=this.navParams.get("studentID");
    console.log(this.studentID);
  }
  gotoBack(){
    this.navCtrl.pop();
  }

}
