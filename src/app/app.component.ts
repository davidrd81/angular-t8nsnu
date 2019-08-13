import { Component } from '@angular/core';
import { Bitacora } from './models/bitacora';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  BitacoraArray: Bitacora[] = [
    {Operador: "LFLN", Turno: "DIA", Area: "Respaldos", id:1},
    {Operador: "DFRD", Turno: "DIA", Area: "Catalogacion", id:2},
    {Operador: "JG", Turno: "NOCHE", Area: "Respaldos", id:3}
  ]

}
