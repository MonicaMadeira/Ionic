import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, HideWhen, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario : any;
    senha : any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  login(){

    let usuario = this.usuario;
    let senha = this.senha;

    if(usuario == "admin" && senha == "admin"){
        console.log("Login correto");
        this.navCtrl.setRoot(TabsPage);
    }else {
      const alert = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Senha ou login errado',
        buttons: ['OK']
      });
      alert.present();
    }



  }
}
