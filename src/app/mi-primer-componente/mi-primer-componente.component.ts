import { Component, OnInit } from '@angular/core';
import {Persona} from '../persona';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent  {

  Persona1 = new Persona('José Luis','Ibarra Llamas',19,'Masculino');

  title = 'Angular'

}
