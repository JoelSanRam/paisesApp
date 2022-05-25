import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDebouunce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder = '';

  deboncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }

  ngOnInit(): void {
    this.deboncer.pipe(debounceTime(300)).subscribe(valor => {
      console.log(valor)
      this.onDebouunce.emit(valor);
    });
  }

  Buscar(){
    this.onEnter.emit(this.termino);
  }

  tecladazo(){
    this.deboncer.next(this.termino)
  }

}
