import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoricoFilho } from '../historico-filho/historico-filho';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})

export class Historico {

  listaHistorico: Array<{}>;
  isReading: boolean;

  /*** Function to replace - to / to iOS devices ***/
  reviver(key, value):any {
    // if('timestamp' === key){
    //     //you can use any de-serialization algorithm here
    //     console.log(value);
    //     return new Date(value.replace(/-/g,"/"));
    // }
    return value;
  }

  constructor(public http: Http, public navCtrl: NavController) {
    this.http = http;
    this.isReading = true;
    var url = 'http://healthcontrol.luiseduardoluz.com/getData.php';
    /*** Getting history data from server ***/
    var res = this.http.get(url).map(res => JSON.parse(res.text(), this.reviver));
    res.subscribe(
      data => {
        this.isReading = false;
        this.listaHistorico = data;
      }, err => {
        this.isReading = false;
        console.log("Error in fetching data!");
        console.log(err);
      }
    );
  }

  /*** Redirect to BPM collect data page ***/
  openPage(aux: any) : void{
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
   this.navCtrl.push(HistoricoFilho, {
     bpm: aux.value, data: aux.timestamp
   });
  }

  /*** Adaptation function to split timestamp received from server ***/
  mySplit (string, nb) {
    var array = string.split(' ');
    return array[nb];
  }

}
