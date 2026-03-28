import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton],
})

export class Tab4Page {

  constructor(private router: Router) {}
    irParaTela1(){
    this.router.navigate(['./tabs/tab1']);
  }
    irParaTela2(){
    this.router.navigate(['./tabs/tab2']);
  }
    irParaTela3(){
    this.router.navigate(['./tabs/tab3']);
  }
}