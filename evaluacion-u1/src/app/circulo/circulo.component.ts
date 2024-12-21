import { Component, OnInit } from '@angular/core';
import {  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/figura';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, FormsModule]
})
export class CirculoComponent  implements OnInit {

  radioStr: string ="";
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const radio = parseInt(this.radioStr)
    const figura = new Circulo(radio)
    const perimetro = figura.calcularPerimetro()
    this.resultado = `El perímetro es ${perimetro.toFixed(2)} cm`
  }

}