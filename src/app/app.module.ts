import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CadastrarPage } from '../pages/cadastrar/cadastrar';
import { EditarPage } from '../pages/editar/editar';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Provider } from '../providers/provider/provider';


@NgModule({
  declarations: [
    MyApp,
    CadastrarPage,
    EditarPage,
    HomePage,
    TabsPage,
    LoginPage,
    PesquisarPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastrarPage,
    EditarPage,
    HomePage,
    TabsPage,
    PesquisarPage,
    LoginPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}
