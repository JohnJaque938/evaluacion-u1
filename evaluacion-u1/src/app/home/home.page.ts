import { Component } from '@angular/core';
import { IonHeader, IonSelect, IonContent, IonSelectOption, SelectChangeEventDetail, IonList, IonItem } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent, Side } from '@ionic/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonHeader, IonContent, IonSelect, 
    CirculoComponent, TrianguloComponent, IonSelectOption, CommonModule]
})
export class HomePage {
  tipoFigura:String = ""

  constructor() {}

  esFiguraCirculo() { return this.tipoFigura == "circulo"}
  esFiguraTriangulo() { return this.tipoFigura == "triangulo"}
  manejarSeleccionTipoFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = $event.detail.value
  }
}