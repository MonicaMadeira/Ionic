import { Provider } from './../../providers/provider/provider';
import { App } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html'
})
export class PesquisarPage {

  posts: any;

  constructor(public navCtrl: NavController, public Provider: Provider) {
    this.getPosts();
  }

  getPosts(){
    this.Provider.getPostagem()
    .then(data=>{
      this.posts = data;
      console.log(this.posts);
    });
  }

}
