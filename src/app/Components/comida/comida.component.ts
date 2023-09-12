import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
titulo = "Comida"

constructor(public api: ApiService) {

}
  ngOnInit(): void {
    this.api.Get("comida");
  }

}
