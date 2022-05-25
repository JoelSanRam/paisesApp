import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { RespCountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: RespCountry;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
/*     this.activateRoute.params.subscribe(({id}) => {
      console.log(id)
      this.paisService.getPaisCodigo(id).subscribe(pais =>{
        console.log(pais)
      })
    }) */

    this.activateRoute.params.pipe(switchMap((param) => this.paisService.getPaisCodigo(param.id)
    ), tap(console.log)).subscribe( resp => {
      this.pais = resp;
    });
  }

}
