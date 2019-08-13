import { Component, OnInit } from '@angular/core';
import { bitacora } from '../bitacora';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  BitacoraArray: bitacora[] = [
    {Operador: "LFLN", Turno: "DIA", Area: "Respaldos", id:1},
    {Operador: "DFRD", Turno: "DIA", Area: "Catalogacion", id:2},
    {Operador: "JG", Turno: "NOCHE", Area: "Respaldos", id:3}
  ]

  constructor() { }

  ngOnInit() {
  }

}