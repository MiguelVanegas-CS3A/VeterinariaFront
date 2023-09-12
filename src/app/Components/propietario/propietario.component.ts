import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {
titulo = "Propietario"

constructor(public api: ApiService) {

}
  ngOnInit(): void {
  this.api.Get("propietario");
  }

}
