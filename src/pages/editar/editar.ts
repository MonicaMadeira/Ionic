import { App } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html'
})
export class EditarPage {

  posts: any;

  constructor(public navCtrl: NavController,public Provider: Provider) {
    
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
