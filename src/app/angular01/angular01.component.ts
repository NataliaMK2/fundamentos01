import { FormStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular01',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './angular01.component.html',
  styleUrl: './angular01.component.css'
})
export class Angular01Component {
  title= 'mi primera aplicacion';
  valor:boolean=false;
  dni:string='';
function():void{
  console.log('hola mundo');
}
}
