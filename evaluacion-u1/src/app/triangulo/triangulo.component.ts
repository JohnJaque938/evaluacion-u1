import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonList, IonInput, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/figura';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonList, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, FormsModule]
})
export class TrianguloComponent  implements OnInit {

  ladoAStr: string = "";
  ladoBStr: string = "";
  ladoCStr: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = parseInt(this.ladoAStr)
    const ladoB = parseInt(this.ladoBStr)
    const ladoC = parseInt(this.ladoCStr)
    const figura = new TrianguloEscaleno(ladoA, ladoB, ladoC)
    const perimetro = figura.calcularPerimetro()
    this.resultado = `El perímetro es ${perimetro} cm`
  }

}