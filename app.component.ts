import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Creamos Variables 
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice4.png';
  numero1 = 1;
  numero2 = 2;

  // Creamos Una Funcion Tipo Void

  tirarDados(): void { 
    // this: Hace Referencia A Un Objeto 
    this.numero1 = Math.round(Math.random() * 5) + 1;
    // Math.round() Devuelve una expresión numérica proporcionada redondeada al entero más próximo.
    // Math.random() Devuelve un número pseudoaleatorio entre 0 y 1.

    this.numero2 = Math.round(Math.random() * 5) + 1;
    // Math.round() Devuelve una expresión numérica proporcionada redondeada al entero más próximo.
    // Math.random() Devuelve un número pseudoaleatorio entre 0 y 1.

    this.dadoIzquierda = '../assets/img/dice' + this.numero1 + '.png';
    this.dadoDerecha = '../assets/img/dice' + this.numero2 + '.png';
    
  }
}
