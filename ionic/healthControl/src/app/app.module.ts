import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Medico } from '../pages/medico/medico';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Medico
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Medico
  ],
  providers: []
})
export class AppModule {}
