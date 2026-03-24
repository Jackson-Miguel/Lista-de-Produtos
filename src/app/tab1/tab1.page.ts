import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItemGroup, IonItemDivider} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonList, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItemGroup, IonItemDivider],
})
export class Tab1Page {
  constructor() {}
}
