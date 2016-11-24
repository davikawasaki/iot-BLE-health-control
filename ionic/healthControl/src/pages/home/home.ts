import { Component } from '@angular/core';
import { Medico } from '../medico/medico';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  static get parameters() {
         return [[Http]];
     }


  bpm : any;
  //http;
  constructor(private http:Http, public navCtrl: NavController) {
    this.http = http;

  }
  makeGetRequest() {

        this.http.get("http://healthcontrol.luiseduardoluz.com/getData.php").map(res => res.json()).subscribe(res => {
          console.log(res)
          this.bpm = res[0].value;
});


        //});
        console.log(this.bpm);
    }

  goToOtherPage() : void{
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Medico);
  }

}
