import { Component, OnInit } from '@angular/core';
import { RespCountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['cais', 'caricom', 'pa', 'nafta', 'usan'];
  regionActiva: string = '';
  paisesRegion: RespCountry[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string){
    if(region === this.regionActiva){ return }
    this.regionActiva = region;
    this.paisService.getPaisRegion(this.regionActiva).subscribe((res) => {
      console.log(res);
      this.paisesRegion = res;
    });
  }

}
