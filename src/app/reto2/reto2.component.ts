import { FormStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto2.component.html',
  styleUrl: './reto2.component.css'
})


export class Reto2Component {
  producto = {
    nombre: '',
    precio: 0,
    stock: 0
  };
  registroExitoso = false;

  alEnviar() {
    if (this.producto.precio > 0 && this.producto.stock > 0) {
      this.registroExitoso = true;
    }
  }
}
