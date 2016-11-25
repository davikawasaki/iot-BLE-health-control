import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Historico } from '../pages/historico/historico';
import { HistoricoFilho } from '../pages/historico-filho/historico-filho';
import { Bluetooth } from '../pages/bluetooth/bluetooth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Historico,
    HistoricoFilho,
    Bluetooth
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Historico,
    HistoricoFilho,
    Bluetooth
  ],
  providers: []
})
export class AppModule {}
