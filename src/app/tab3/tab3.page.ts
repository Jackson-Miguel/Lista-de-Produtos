import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItemGroup, IonItemDivider, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItemGroup, IonItemDivider, IonButton],
})

export class Tab3Page {
  constructor(private router: Router) {}
  irParaTela4(){
    this.router.navigate(['/tab4']);
  }
}