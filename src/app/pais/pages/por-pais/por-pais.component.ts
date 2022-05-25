import { Component, OnInit } from '@angular/core';
import { RespCountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string = '';
  hayError:boolean = false;
  paises: RespCountry[] = [];
  paisesSugeridos: RespCountry[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  Buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe((res) => {
      console.log(res);
      this.paises = res;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.paisService.buscarPais( termino).subscribe(res => {
      this.paisesSugeridos = res.splice(0, 5);
    }, err => {
      this.paisesSugeridos = [];
    });
  }

}
