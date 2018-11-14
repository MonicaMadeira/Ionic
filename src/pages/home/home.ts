import { Provider } from './../../providers/provider/provider';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public Provider: Provider) {
    this.ListPost();
  }

  ListPost(){
    this.Provider.getPostagem()
      .then(data=>{
        this.posts = data;
        console.log(this.posts);
      });
  }

}
