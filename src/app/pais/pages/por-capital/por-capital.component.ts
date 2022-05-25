import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RespCountry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string = '';
  hayError:boolean = false;
  paises: RespCountry[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  Buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPaisCapital(this.termino).subscribe((res) => {
      console.log(res);
      this.paises = res;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
  }
}
