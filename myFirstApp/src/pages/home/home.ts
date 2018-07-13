import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
usuarios:any[] = [];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
  	this.provider.load().then(
  		(data)=>{this.usuarios =data;}
  		)
  }

}
