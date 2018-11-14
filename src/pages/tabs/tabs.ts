import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';

import { CadastrarPage } from '../cadastrar/cadastrar';
import { EditarPage } from '../editar/editar';
import { HomePage } from '../home/home';
import { LoginPage } from './../login/login';
import { PesquisarPage } from './../pesquisar/pesquisar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CadastrarPage;
  tab3Root = EditarPage;
  tab4Root = PesquisarPage;
  tab5Root = LoginPage;

  constructor(public navCtrl: NavController) {

  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
    }
}
